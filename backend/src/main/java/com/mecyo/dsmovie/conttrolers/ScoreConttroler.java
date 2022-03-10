package com.mecyo.dsmovie.conttrolers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mecyo.dsmovie.dto.MovieDTO;
import com.mecyo.dsmovie.dto.ScoreDTO;
import com.mecyo.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreConttroler {

	@Autowired
	private ScoreService service;
	
	@GetMapping
	public Page<ScoreDTO> findAll(Pageable pageable) {
		return this.service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public ScoreDTO findById(@PathVariable Long id) throws Exception {
		
		return this.service.findById(id);
	}
	
	@PutMapping(value = "/avaliar")
	public MovieDTO findById(@RequestBody ScoreDTO score) throws Exception {
		
		return this.service.avaliar(score);
	}
}
