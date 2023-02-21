package com.analyz.esme.dao;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.analyz.esme.model.Repartition;

@Service
@Repository
public interface RepartitionDao extends JpaRepository<Repartition, Integer> {
    Repartition findById(int id);

    ArrayList<Repartition> findByAge(String age);

    ArrayList<Repartition> findByCity(String city);

    ArrayList<Repartition> findBySexe(String sexe);

    ArrayList<Repartition> findByCityAndAge(String city, String age);

    ArrayList<Repartition> findByCityAndSexe(String city, String sexe);

    ArrayList<Repartition> findByAgeAndSexe(String age, String sexe);

    ArrayList<Repartition> findByCityAndAgeAndSexe(String city, String age, String sexe);

    ArrayList<Repartition> findAll();

}
