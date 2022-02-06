package com.cg.sprint.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.sprint.entity.User;
import com.cg.sprint.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User fetchUserByEmail(String email) {
		return userRepository.findByEmail(email);

	}

	public User fetchUserByEmailandPassword(String email, String password) {
		return userRepository.findByEmailAndPassword(email, password);

	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public void changePassword(String email, String newPassword) {
		User user = userRepository.findByEmail(email);
		if (user != null) {
			user.setPassword(newPassword);
			userRepository.save(user);
		}
	}

}
