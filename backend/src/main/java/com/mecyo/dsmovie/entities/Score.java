package com.mecyo.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "tb_score")
public class Score implements Serializable{
	
	private static final long serialVersionUID = 87672275296471222L;
	@EmbeddedId
	private ScorePK id = new ScorePK();
	private Double value;
}
