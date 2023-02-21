package com.analyz.esme.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.analyz.esme.dao.RepartitionDao;
import com.analyz.esme.model.Repartition;
import com.google.gson.JsonSyntaxException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

@RestController
@RequestMapping("/store")
public class StoreData {
    @Autowired
    RepartitionDao repartitionDao;

    @GetMapping
    public ResponseEntity<String> storeData() {
        try {
            ArrayList<Repartition> repartitions = parseData();
            repartitionDao.saveAll(repartitions);
            return ResponseEntity.status(HttpStatus.OK).body("Data stored successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    public ArrayList<Repartition> parseData() throws JsonSyntaxException, IOException {
        ArrayList<Repartition> repartitions = repartitionDao.findAll();
        String[] cityCodes = { "FE-1", "COM-75056", "COM-13055", "COM-33063", "COM-59350" };
        Map<String, String> sexes = new HashMap<>();
        Map<String, String> ages = new HashMap<>();
        // Sexes
        sexes.put("ENS", "Ensemble");
        sexes.put("1", "Hommes");
        sexes.put("2", "Femmes");
        // Ages
        ages.put("ENS", "Ensemble");
        ages.put("00", "0 à 14 ans");
        ages.put("15", "15 à 29 ans");
        ages.put("30", "30 à 44 ans");
        ages.put("45", "45 à 59 ans");
        ages.put("60", "60 à 74 ans");
        ages.put("75", "75 ans à 89 ans");
        ages.put("90", "90 ans et plus");

        for (String cityCode : cityCodes) {
            Response data = getData(cityCode);
            String responseString = data.body().string();
            String city = new JSONObject(responseString).getJSONObject("Zone").getJSONObject("Millesime")
                    .getString("Nccenr");
            JSONArray cellules = new JSONObject(responseString).getJSONArray("Cellule");

            for (int i = 0; i < cellules.length(); i++) {
                Repartition repartition = new Repartition();
                JSONArray modalites = cellules.getJSONObject(i).getJSONArray("Modalite");
                repartition.setCity(city);
                repartition.setSexe(sexes.get(modalites.getJSONObject(0).getString("@code")));
                repartition.setAge(ages.get(modalites.getJSONObject(1).getString("@code")));
                repartition.setValue(Float.parseFloat(cellules.getJSONObject(i).getString("Valeur")));
                if (!checkIfExist(repartitions, repartition))
                    repartitions.add(repartition);
                else System.out.println("Already exists");
            }
        }
        return repartitions;
    }

    public Response getData(String cityCode) {
        Response response = null;
        try {
            OkHttpClient client = new OkHttpClient();

            Request request = new Request.Builder()
                    .url("https://api.insee.fr/donnees-locales/V0.1/donnees/geo-SEXE-AGE15_15_90@GEO2022RP2019/"
                            + cityCode + ".all.all")
                    .header("Accept", "application/json")
                    .header("Authorization", "Bearer 57c363eb-c650-34cb-9cc0-b18b0e1e0af1")
                    .build();

            response = client.newCall(request).execute();

            if (response.isSuccessful()) {
                return response;
            } else {
                System.out.println("Error: " + response.code() + " " + response.message());
            }

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        return null;
    }

    public boolean checkIfExist(ArrayList<Repartition> repartitions, Repartition repartition) {
        for (Repartition rep : repartitions) {
            if (rep.getCity() == null || rep.getAge() == null || rep.getSexe() == null)
                continue;
            if (rep.getCity().equals(repartition.getCity()) && rep.getAge().equals(repartition.getAge())
                    && rep.getSexe().equals(repartition.getSexe()))
                return true;
        }
        return false;
    }
}
