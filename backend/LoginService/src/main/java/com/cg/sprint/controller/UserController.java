package com.cg.sprint.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cg.sprint.entity.User;
import com.cg.sprint.service.UserService;


public class UserController {

	@Autowired
	private UserService userService;

	// Method to handle the Login Requests
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {

		String tempEmail = user.getEmail();
		String tempPassword = user.getPassword();
		User userObj = null;
		if (tempEmail != null && tempPassword != null) {
			userObj = userService.fetchUserByEmailandPassword(tempEmail, tempPassword);
		}
		if (userObj == null) {
			throw new Exception("User does not Exist! Kindly Register");
		}

		return userObj;
	}

	// Method to handle the User Registration Requests
	@PostMapping("/register")
	public User registerUser(@RequestBody User user, Model model) throws Exception {
		String tempEmail = user.getEmail();
		if (tempEmail != null && !"".equals(tempEmail)) {
			User userObj = userService.fetchUserByEmail(tempEmail);

			if (userObj != null) {
				throw new Exception("User with credentials" + tempEmail + "already exists");
			}
		}
		User userObj = null;
		userObj = userService.saveUser(user);
		return userObj;

	}

	// Method for Reseting the password of Existing User
	@GetMapping("/forgot/{email}/{newPassword}")
	public ResponseEntity changePassword(@PathVariable String email, @PathVariable String newPassword)
			throws Exception {
		String tempEmail = email;
		if (tempEmail != null && !"".equals(tempEmail)) {
			User userObj = userService.fetchUserByEmail(tempEmail);
			if (userObj != null) {
				userService.changePassword(email, newPassword);
				return ResponseEntity.ok().build();
			} else {
				throw new Exception("User does not exist");
			}

		} else {
			throw new Exception("Email is Mandantory");
		}
	}

}
