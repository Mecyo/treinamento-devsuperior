package com.mecyo.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mecyo.dsmovie.dto.UserDTO;
import com.mecyo.dsmovie.entities.User;
import com.mecyo.dsmovie.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;

	@Transactional(readOnly = true)
	public Page<UserDTO> findAll(Pageable pageable) {
		Page<User> result = this.repository.findAll(pageable);
		Page<UserDTO> page = result.map(UserDTO::new);
		
		return page;
	}
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) throws Exception {
		User user = this.repository.findById(id).orElseThrow(() -> new Exception("Id: " + id + " não localizado"));
		
		return new UserDTO(user);
	}
}
