package dev.gowo.gowo.controller;


import dev.gowo.gowo.sevice.PrescriptionGuideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;

@RestController
@RequestMapping("/pg")
public class PrescriptionGuideController {

    private final PrescriptionGuideService prescriptionGuideService;

    public PrescriptionGuideController(
            @Autowired PrescriptionGuideService prescriptionGuideService
    ){
        this.prescriptionGuideService = prescriptionGuideService;
    }


    @GetMapping
    public void test() throws URISyntaxException {
        this.prescriptionGuideService.saveData();
    }
}
