package com.mecyo.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mecyo.dsmovie.dto.MovieDTO;
import com.mecyo.dsmovie.dto.ScoreDTO;
import com.mecyo.dsmovie.entities.Movie;
import com.mecyo.dsmovie.entities.Score;
import com.mecyo.dsmovie.entities.User;
import com.mecyo.dsmovie.repositories.MovieRepository;
import com.mecyo.dsmovie.repositories.ScoreRepository;
import com.mecyo.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private ScoreRepository repository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MovieRepository movieRepository;

	@Transactional(readOnly = true)
	public Page<ScoreDTO> findAll(Pageable pageable) {
		Page<Score> result = this.repository.findAll(pageable);
		Page<ScoreDTO> page = result.map(ScoreDTO::new);
		
		return page;
	}
	
	@Transactional(readOnly = true)
	public ScoreDTO findById(Long id) throws Exception {
		Score score = this.repository.findById(id).orElseThrow(() -> new Exception("Id: " + id + " não localizado"));
		
		return new ScoreDTO(score);
	}
	
	@Transactional
	public MovieDTO avaliar(ScoreDTO score) throws Exception {
		String email = score.getUserEmail();
		Long movieId = score.getMovieId();
		Double value = score.getValue();
		
		User user = this.userRepository.findByEmail(email);
		
		if(user == null) {
			user = this.userRepository.saveAndFlush(new User(email));
		}
		
		Movie movie = this.movieRepository.findById(movieId).orElseThrow(() -> new Exception("Id: " + movieId + " não localizado"));
		
		this.repository.saveAndFlush(new Score(movie, user, value));
		
		return this.recalcularAvaliacao(movie, value);
	}

	private MovieDTO recalcularAvaliacao(Movie movie, Double value) {
		Double total = 0.0;
		
		for(Score s : movie.getScores()) {
			total = total + s.getValue();
		}
		Integer count = movie.getScores().size();
		
		Double media = total / count;
		movie.setScore(media);
		movie.setCount(count);
		
		return new MovieDTO(this.movieRepository.save(movie));
	}
}
