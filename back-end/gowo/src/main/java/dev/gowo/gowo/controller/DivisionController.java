package dev.gowo.gowo.controller;

import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.service.DivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/division")
public class DivisionController {
    private final DivisionService divisionService;

    public DivisionController(@Autowired DivisionService divisionService) {
        this.divisionService = divisionService;
    }

    @GetMapping("/read/{division}")
    public List<PurposeRoutineDTO> readByDivision(@PathVariable String division){
        return divisionService.readByDivision(division);
    }
}
