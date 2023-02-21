package com.analyz.esme.interfac;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.analyz.esme.model.Repartition;

public interface RepartitionServiceInterface {
    @GetMapping("/all")
    public ResponseEntity<ArrayList<Repartition>> getAllRepartition();

    @GetMapping("/id/{id}")
    public ResponseEntity<Repartition> getRepartitionById(@PathVariable int id);

    @GetMapping("/city/{city}")
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByCity(@PathVariable String city);

    @GetMapping("/age/{age}")
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByAge(@PathVariable String age);

    @GetMapping("/sexe/{sexe}")
    public ResponseEntity<ArrayList<Repartition>> getRepartitionBySexe(@PathVariable String sexe);

    @GetMapping("/city/{city}/age/{age}")
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByCityAndAge(@PathVariable String city,
            @PathVariable String age);

    @GetMapping("/city/{city}/sexe/{sexe}")
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByCityAndSexe(@PathVariable String city,
            @PathVariable String sexe);

    @GetMapping("/age/{age}/sexe/{sexe}")
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByAgeAndSexe(@PathVariable String age,
            @PathVariable String sexe);

    @GetMapping("/city/{city}/age/{age}/sexe/{sexe}")
    public ResponseEntity<ArrayList<Repartition>> getRepartitionByCityAndAgeAndSexe(@PathVariable String city,
            @PathVariable String age, @PathVariable String sexe);

    @PostMapping("/add")
    public ResponseEntity<String> addRepartition(@RequestBody Repartition repartition);

    @PutMapping("/update")
    public ResponseEntity<String> updateRepartition(@RequestBody Repartition repartition);
}
