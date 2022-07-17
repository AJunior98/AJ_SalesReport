package com.ajunior.ajsalesreport.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ajunior.ajsalesreport.entities.Sale;
import com.ajunior.ajsalesreport.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	public List<Sale> findSales() {
		return saleRepository.findAll();
	}
}
