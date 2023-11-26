package dev.gowo.gowo.controller;

import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.dto.PurposeRoutineResponseDTO;
import dev.gowo.gowo.service.PurposeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/purpose")
public class PurposeController {
    private final PurposeService purposeService;

    public PurposeController(@Autowired PurposeService purposeService) {
        this.purposeService = purposeService;
    }

    @GetMapping("/read/{purpose}")
    public PurposeRoutineResponseDTO readByPurpose(@PathVariable String purpose){
        return purposeService.readByPurpose(purpose);
    }

    @GetMapping("/category")
    public CategoryResponseDTO readByDistinctPurposes(){
        return purposeService.readByDistinctPurposes();
    }
}
