package com.mecyo.dsmovie.conttrolers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mecyo.dsmovie.dto.MovieDTO;
import com.mecyo.dsmovie.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieConttroler {

	@Autowired
	private MovieService service;
	
	@GetMapping
	public Page<MovieDTO> findAll(Pageable pageable) {
		return this.service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public MovieDTO findById(@PathVariable Long id) throws Exception {
		
		return this.service.findById(id);
	}
}
