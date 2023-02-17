package com.example.backend.Testing;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestingController {
    private final TestingRepository testingRepository;

    public TestingController(TestingRepository testingRepository) {
        this.testingRepository = testingRepository;
    }

    @GetMapping("/testing")
    public List<Testing> getTesting() {return (List<Testing>) testingRepository.findAll();}
}
