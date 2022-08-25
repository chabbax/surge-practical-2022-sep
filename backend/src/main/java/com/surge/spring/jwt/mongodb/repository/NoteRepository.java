package com.surge.spring.jwt.mongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.surge.spring.jwt.mongodb.models.Note;

/**
 * NoteRepository is an interface that extends MongoRepository for CRUD methods and custom finder methods. 
 * It will be autowired in NoteController
 * Can use MongoRepository’s methods: save(), findOne(), findById(), findAll(), count(), delete(), deleteById() without implementing these methods
 */
public interface NoteRepository extends MongoRepository<Note, String> {

  List<Note> findByPublished(boolean published);

  List<Note> findByTitleContaining(String title);
}
