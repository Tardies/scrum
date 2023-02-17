package com.example.backend.Blocked;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BlockedController {
    private final BlockedRepository blockedRepository;

    public BlockedController(BlockedRepository blockedRepository) {
        this.blockedRepository = blockedRepository;
    }

    @GetMapping("/blocked")
    public List<Blocked> getBlocked() {return (List<Blocked>) blockedRepository.findAll();}

}
