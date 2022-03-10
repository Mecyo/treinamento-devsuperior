package com.mecyo.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mecyo.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String userEmail);

}
