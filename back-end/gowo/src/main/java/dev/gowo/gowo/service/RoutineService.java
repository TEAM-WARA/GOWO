package dev.gowo.gowo.service;


import dev.gowo.gowo.dto.DayRoutineDTO;
import dev.gowo.gowo.dto.RoutineDTO;
import dev.gowo.gowo.entity.RoutineEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface RoutineService {
    public ResponseEntity<String> createRoutine(String password, List<DayRoutineDTO> dayRoutineDTOList);
    public ResponseEntity<RoutineDTO> readRoutineByPassword(String password);
    public RoutineEntity test2();


}
