package com.mecyo.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mecyo.dsmovie.dto.MovieDTO;
import com.mecyo.dsmovie.entities.Movie;
import com.mecyo.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = this.repository.findAll(pageable);
		Page<MovieDTO> page = result.map(MovieDTO::new);
		
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) throws Exception {
		Movie Movie = this.repository.findById(id).orElseThrow(() -> new Exception("Id: " + id + " não localizado"));
		
		return new MovieDTO(Movie);
	}
}
