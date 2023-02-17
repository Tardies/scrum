package com.example.backend.Inprogress;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InprogressRepository extends CrudRepository<Inprogress, Long> {
}
