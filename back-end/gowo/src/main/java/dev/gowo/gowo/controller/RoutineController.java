package dev.gowo.gowo.controller;


import dev.gowo.gowo.dto.DayRoutineDTO;
import dev.gowo.gowo.dto.ResponseDayRoutineDTO;
import dev.gowo.gowo.dto.RoutineDTO;
import dev.gowo.gowo.service.RoutineService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/routine")
public class RoutineController {
    private final static Logger logger = LoggerFactory.getLogger(RoutineController.class);
    private final RoutineService routineService;

    public RoutineController (
            @Autowired RoutineService routineService
    ){
        this.routineService = routineService;
    }


    @PostMapping()
    public ResponseEntity<String> createRoutine(
            @RequestParam("password") String password,
            @RequestBody List<DayRoutineDTO> dayRoutineDTOList
            ){
        for(DayRoutineDTO dto : dayRoutineDTOList){
            logger.info(dto.toString());
        }
       return this.routineService.createRoutine(password, dayRoutineDTOList);
    }

    @GetMapping()
    public ResponseEntity<RoutineDTO> readRoutine(
            @RequestParam("password") String password
    ){
        return this.routineService.readRoutineByPassword(password);
    }

    @PostMapping("/password")
    public ResponseEntity<Boolean> existRoutine(
            @RequestParam("password") String password
    ){
        return this.routineService.existsPassword(password);
    }

//
//    @GetMapping()
//    public RoutineEntity test(){
//        return this.routineService.test2();
//    }


}
