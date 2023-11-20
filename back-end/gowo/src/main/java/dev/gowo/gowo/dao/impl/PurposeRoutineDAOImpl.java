package dev.gowo.gowo.dao.impl;

import dev.gowo.gowo.dao.PurposeRoutineDAO;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import dev.gowo.gowo.repository.PurposeRoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PurposeRoutineDAOImpl implements PurposeRoutineDAO {
    private final PurposeRoutineRepository purposeRoutineRepository;

    public PurposeRoutineDAOImpl(@Autowired PurposeRoutineRepository purposeRoutineRepository) {
        this.purposeRoutineRepository = purposeRoutineRepository;
    }

    @Override
    public void createPurposeRoutine(PurposeRoutineEntity entity){
        purposeRoutineRepository.save(entity);
    }
}
