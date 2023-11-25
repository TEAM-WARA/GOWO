package dev.gowo.gowo.dao;


import dev.gowo.gowo.entity.DayRoutineEntity;
import dev.gowo.gowo.entity.RoutineEntity;

import java.util.List;

public interface DayRoutineDAO {

    public DayRoutineEntity createDayRoutine(DayRoutineEntity dayRoutineEntity);
    public List<DayRoutineEntity> readDayRoutine(RoutineEntity routineEntity);
}
