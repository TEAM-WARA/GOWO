package dev.gowo.gowo.dao.impl;

import dev.gowo.gowo.dao.DayRoutineDAO;
import dev.gowo.gowo.entity.DayRoutineEntity;
import dev.gowo.gowo.entity.RoutineEntity;
import dev.gowo.gowo.repository.DayRoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DayRoutineDAOImpl implements DayRoutineDAO {

    private final DayRoutineRepository dayRoutineRepository;

    public DayRoutineDAOImpl(
            @Autowired DayRoutineRepository dayRoutineRepository
    ){
        this.dayRoutineRepository = dayRoutineRepository;
    }

    @Override
    public DayRoutineEntity createDayRoutine(DayRoutineEntity dayRoutineEntity) {
        return this.dayRoutineRepository.save(dayRoutineEntity);
    }

    @Override
    public List<DayRoutineEntity> readDayRoutine(RoutineEntity routineEntity) {
        return this.dayRoutineRepository.getByRoutine(routineEntity);
    }
}
