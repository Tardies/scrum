package com.example.backend.Done;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DoneController {
    private final DoneRepository doneRepository;

    public DoneController(DoneRepository doneRepository) {
        this.doneRepository = doneRepository;
    }

    @GetMapping("/done")
    public List<Done> getDone() {
        return (List<Done>) doneRepository.findAll();
    }
}
