package dev.gowo.gowo.dao.impl;

import dev.gowo.gowo.dao.RoutineDAO;
import dev.gowo.gowo.entity.RoutineEntity;
import dev.gowo.gowo.repository.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RoutineDAOImpl implements RoutineDAO {

    private final RoutineRepository routineRepository;

    public RoutineDAOImpl(
            @Autowired RoutineRepository routineRepository
    ){
        this.routineRepository = routineRepository;
    }

    @Override
    public RoutineEntity createRoutine(RoutineEntity routineEntity) {
        return this.routineRepository.save(routineEntity);
    }

    @Override
    public RoutineEntity getRoutineByPassword(String password) {
        return this.routineRepository.getById(password);
    }

    @Override
    public Boolean existPassword(String password) {
        return this.routineRepository.existsById(password);
    }
}
