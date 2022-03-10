package com.mecyo.dsmovie.dto;

import com.mecyo.dsmovie.entities.Movie;

import lombok.Data;

@Data
public class MovieDTO {

	private Long id;
	private String title;
	private String image;
	private Integer count;
	private Double score;
	
	
	public MovieDTO(Movie movie) {
		this.id = movie.getId();
		this.title = movie.getTitle();
		this.image = movie.getImage();
		this.count = movie.getCount();
		this.score = movie.getScore();
	}
}
