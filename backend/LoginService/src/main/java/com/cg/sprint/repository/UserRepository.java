package com.cg.sprint.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.sprint.entity.User;

//Repository for Model User
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findByEmail(String email);

	public User findByEmailAndPassword(String email, String password);

}
