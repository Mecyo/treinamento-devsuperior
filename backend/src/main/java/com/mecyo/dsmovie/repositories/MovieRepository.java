package com.mecyo.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mecyo.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
