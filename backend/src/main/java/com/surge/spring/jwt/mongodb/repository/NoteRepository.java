package com.surge.spring.jwt.mongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.surge.spring.jwt.mongodb.models.Note;

public interface NoteRepository extends MongoRepository<Note, String> {

  List<Note> findByPublished(boolean published);

  List<Note> findByTitleContaining(String title);
}
