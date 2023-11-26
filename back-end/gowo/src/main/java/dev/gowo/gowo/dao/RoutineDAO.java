package dev.gowo.gowo.dao;

import dev.gowo.gowo.entity.RoutineEntity;

public interface RoutineDAO {

    public RoutineEntity createRoutine(RoutineEntity routineEntity);
    public RoutineEntity getRoutineByPassword(String password);
    public Boolean existPassword(String password);


}
