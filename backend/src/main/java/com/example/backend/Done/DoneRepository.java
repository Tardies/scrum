package com.example.backend.Done;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoneRepository extends CrudRepository<Done, Long> {
}
