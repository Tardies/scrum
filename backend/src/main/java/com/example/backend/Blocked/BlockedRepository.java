package com.example.backend.Blocked;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlockedRepository extends CrudRepository<Blocked, Long> {
}
