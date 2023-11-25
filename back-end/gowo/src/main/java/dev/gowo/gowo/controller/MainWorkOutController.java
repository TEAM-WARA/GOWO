package dev.gowo.gowo.controller;


import dev.gowo.gowo.dto.MainWorkOutDTO;
import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import dev.gowo.gowo.service.MainWorkOutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/main")
public class MainWorkOutController {

    private final MainWorkOutService mainWorkOutService;

    public MainWorkOutController(
            @Autowired MainWorkOutService mainWorkOutService
    ){
        this.mainWorkOutService = mainWorkOutService;
    }

    @GetMapping()
    public ResponseEntity<List<PrescriptionGuideDTO>> readMainWorkOut(
            @RequestBody MainWorkOutDTO mainWorkOutDTO
            ){
        return this.mainWorkOutService.getChoiceByMainWorkOut(mainWorkOutDTO.getHealth(), mainWorkOutDTO.getTool(), mainWorkOutDTO.getPlace());
    }

}
