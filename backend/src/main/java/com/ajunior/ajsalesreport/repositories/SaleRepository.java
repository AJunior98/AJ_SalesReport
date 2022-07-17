package com.ajunior.ajsalesreport.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ajunior.ajsalesreport.entities.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {

}
