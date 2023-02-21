package com.analyz.esme.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.analyz.esme.dao.RepartitionDao;
import com.analyz.esme.interfac.RepartitionServiceInterface;
import com.analyz.esme.model.Repartition;

@RestController
@RequestMapping("/repartition")
public class RepartitionService implements RepartitionServiceInterface{
    @Autowired
    RepartitionDao repartitionDao;

    @Override
    public ResponseEntity<ArrayList<Repartition>> getAllRepartition() {
        try {
            return ResponseEntity.ok(repartitionDao.findAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @Override
    public ResponseEntity<Repartition> getRepartitionById(int id) {
        try {
            return ResponseEntity.ok(repartitionDao.findById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @Override
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByCity(String city) {
        try {
            return ResponseEntity.ok(repartitionDao.findByCity(city));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @Override
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByAge(String age) {
        try {
            return ResponseEntity.ok(repartitionDao.findByAge(age));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @Override
    public ResponseEntity<ArrayList<Repartition>> getRepartitionBySexe(String sexe) {
        try {
            return ResponseEntity.ok(repartitionDao.findBySexe(sexe));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @Override
    public ResponseEntity<String> addRepartition(Repartition repartition) {
        repartitionDao.save(repartition);
        return ResponseEntity.ok("Repartition added");
    }

    @Override
    public ResponseEntity<String> updateRepartition(Repartition repartition) {
        repartitionDao.save(repartition);
        return ResponseEntity.ok("Repartition updated");
    }

    @Override
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByCityAndAge(String city, String age) {
        try {
            return ResponseEntity.ok(repartitionDao.findByCityAndAge(city, age));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @Override
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByCityAndSexe(String city, String sexe) {
        try {
            return ResponseEntity.ok(repartitionDao.findByCityAndSexe(city, sexe));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @Override
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByAgeAndSexe(String age, String sexe) {
        try {
            return ResponseEntity.ok(repartitionDao.findByAgeAndSexe(age, sexe));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @Override
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByCityAndAgeAndSexe(String city, String age,
            String sexe) {
        try {
            return ResponseEntity.ok(repartitionDao.findByCityAndAgeAndSexe(city, age, sexe));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
