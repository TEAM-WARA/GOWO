package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.DayRoutineDAO;
import dev.gowo.gowo.dao.RoutineDAO;
import dev.gowo.gowo.dto.DayRoutineDTO;
import dev.gowo.gowo.dto.ResponseDayRoutineDTO;
import dev.gowo.gowo.dto.RoutineDTO;
import dev.gowo.gowo.entity.DayRoutineEntity;
import dev.gowo.gowo.entity.RoutineEntity;
import dev.gowo.gowo.service.MainWorkOutService;
import dev.gowo.gowo.service.RoutineService;
import dev.gowo.gowo.service.SubWorkOutService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class RoutineServiceImpl implements RoutineService {
    private final static Logger logger = LoggerFactory.getLogger(RoutineServiceImpl.class);
    private final DayRoutineDAO dayRoutineDAO;
    private final RoutineDAO routineDAO;
    private final MainWorkOutService mainWorkOutService;
    private final SubWorkOutService subWorkOutService;

    public RoutineServiceImpl(
            @Autowired MainWorkOutService mainWorkOutService,
            @Autowired SubWorkOutService subWorkOutService,
            @Autowired DayRoutineDAO dayRoutineDAO,
            @Autowired RoutineDAO routineDAO
    ){
        this.mainWorkOutService = mainWorkOutService;
        this.subWorkOutService = subWorkOutService;
        this.dayRoutineDAO = dayRoutineDAO;
        this.routineDAO = routineDAO;
    }

    @Override
    public ResponseEntity<String> createRoutine(String password, List<DayRoutineDTO> dayRoutineDTOList) {
        RoutineEntity routine = RoutineEntity.builder()
                .password(password)
                .count(Long.valueOf(dayRoutineDTOList.size()))
                .build();
        routine = this.routineDAO.createRoutine(routine);

        List<DayRoutineEntity> data = new ArrayList<>();
        for(DayRoutineDTO dto : dayRoutineDTOList){
            DayRoutineEntity entity = DayRoutineEntity.builder()
                    .preWorkOut(dto.getPreWorkOut())
                    .mainWorkOut(dto.getPreWorkOut())
                    .finishWorkOut(dto.getFinishWorkOut())
                    .routine(routine).build();
            this.dayRoutineDAO.createDayRoutine(entity);
        }


        return ResponseEntity.status(201).body("success");
    }

    @Override
    public ResponseEntity<RoutineDTO> readRoutineByPassword(String password) {
        RoutineEntity data = this.routineDAO.getRoutineByPassword(password);
        List<ResponseDayRoutineDTO> dtos = new ArrayList<>();
        for(DayRoutineEntity dayRoutineEntity : data.getRoutineEntityList()){
            ResponseDayRoutineDTO dto = ResponseDayRoutineDTO.builder()
                    .id(dayRoutineEntity.getId())
                    .preWorkOut(this.subWorkOutService.readByDTOList(dayRoutineEntity.getPreWorkOut()))
                    .mainWorkOut(this.mainWorkOutService.readByDTOList(dayRoutineEntity.getMainWorkOut()))
                    .finishWorkOut(this.subWorkOutService.readByDTOList(dayRoutineEntity.getFinishWorkOut())).build();
            dtos.add(dto);
        }
        RoutineDTO result = RoutineDTO.builder()
                .count(Long.valueOf(dtos.size()))
                .data(dtos)
                .build();

        return ResponseEntity.status(200).body(result);
    }

    @Override
    public ResponseEntity<Boolean> existsPassword(String password) {
        if(this.routineDAO.existPassword(password)){
            return ResponseEntity.status(200).body(true);
        }else{
            return ResponseEntity.status(400).body(false);
        }
    }

    @Override
    public RoutineEntity test2() {
        RoutineEntity routine = this.routineDAO.getRoutineByPassword("asd");

        return routine;
    }
}
