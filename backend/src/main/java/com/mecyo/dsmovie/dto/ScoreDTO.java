package com.mecyo.dsmovie.dto;

import com.mecyo.dsmovie.entities.Score;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ScoreDTO {

	private String userEmail;
	private Long movieId;
	private Double value;
	
	
	public ScoreDTO(Score score) {
		this.userEmail = score.getId().getUser().getEmail();
		this.movieId = score.getId().getMovie().getId();
		this.value = score.getValue();
	}
}
