package com.example.backend.Testing;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestingRepository extends CrudRepository<Testing, Long> {
}
