package dev.gowo.gowo.controller;

import dev.gowo.gowo.dto.PurposeRoutineResponseDTO;
import dev.gowo.gowo.service.SubWorkOutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sub")
public class SubWorkOutController {
    private final SubWorkOutService subWorkOutService;

    public SubWorkOutController(@Autowired SubWorkOutService subWorkOutService) {
        this.subWorkOutService = subWorkOutService;
    }

    @GetMapping("/{division}")
    public PurposeRoutineResponseDTO readByChoiceSubWorkOut(@PathVariable String division){
        return subWorkOutService.readByChoiceSubWorkOut(division);
    }
}
