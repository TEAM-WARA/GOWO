package dev.gowo.gowo.controller;

import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/area")
public class AreaController {
    private final AreaService areaService;

    public AreaController(@Autowired AreaService areaService) {
        this.areaService = areaService;
    }

    @GetMapping("/read/{area}")
    public List<PurposeRoutineDTO> readByArea(@PathVariable String area){
        return areaService.readByArea(area);
    }
}
