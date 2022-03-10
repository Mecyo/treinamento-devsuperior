package com.mecyo.dsmovie.dto;

import com.mecyo.dsmovie.entities.User;

import lombok.Data;

@Data
public class UserDTO {
	
	private Long id;
	private String email;
	
	
	public UserDTO(User user) {
		this.id = user.getId();
		this.email = user.getEmail();
	}
}
