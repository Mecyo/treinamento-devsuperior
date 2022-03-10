package com.mecyo.dsmovie.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Setter;

@Data
@Entity
@Table(name = "tb_movie")
public class Movie implements Serializable{

	private static final long serialVersionUID = -9204805403141345180L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String image;
	private Integer count;
	private Double score;
	
	@Setter(AccessLevel.NONE)
	@EqualsAndHashCode.Exclude
	@OneToMany(mappedBy = "id.movie")
	private Set<Score> scores = new HashSet<>();
}
