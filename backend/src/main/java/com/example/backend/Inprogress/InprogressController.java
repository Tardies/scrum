package com.example.backend.Inprogress;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class InprogressController {
    private final InprogressRepository inprogressRepository;

    public InprogressController(InprogressRepository inprogressRepository) {
        this.inprogressRepository = inprogressRepository;
    }

    @GetMapping("/inprogress")
    public List<Inprogress> getInprogress() {
        return (List<Inprogress>) inprogressRepository.findAll();
    }
}
