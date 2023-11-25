package dev.gowo.gowo.controller;

import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import dev.gowo.gowo.service.HealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/health")
public class HealthController {

    private final HealthService healthService;

    public HealthController(
            @Autowired HealthService healthService
    )
    {
        this.healthService = healthService;
    }


    @GetMapping()
    public ResponseEntity<List<PrescriptionGuideDTO>> readAllByHealth(
            @RequestParam("health") String health
    ){
        return this.healthService.getByHealth(health);
    }

    @GetMapping("/choice")
    public ResponseEntity<List<PrescriptionGuideDTO>> readChoiceByHealth(
            @RequestParam("health") String health
    ){
        return this.healthService.getChoiceByHealth(health);
    }


}
