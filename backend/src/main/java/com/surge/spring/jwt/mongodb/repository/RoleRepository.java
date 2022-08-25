package com.surge.spring.jwt.mongodb.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.surge.spring.jwt.mongodb.models.ERole;
import com.surge.spring.jwt.mongodb.models.Role;

// Role model needs a repository for persisting and accessing data so we use MongoRepository methods to query them
public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
