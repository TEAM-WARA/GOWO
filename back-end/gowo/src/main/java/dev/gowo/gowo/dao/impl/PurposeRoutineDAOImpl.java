package dev.gowo.gowo.dao.impl;

import dev.gowo.gowo.dao.PurposeRoutineDAO;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import dev.gowo.gowo.repository.PurposeRoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    @Override
    public List<PurposeRoutineEntity> readByPurpose(String purpose) {
        return purposeRoutineRepository.findByWorkOutPurpose(purpose);
    }

    @Override
    public List<PurposeRoutineEntity> readByDivision(String division) {
        return purposeRoutineRepository.findByWorkOutDivision(division);
    }

    @Override
    public List<PurposeRoutineEntity> readByArea(String area) {
        return purposeRoutineRepository.findByWorkOutArea(area);
    }

    @Override
    public List<String> readByDistinctAreas() {
        return purposeRoutineRepository.findDistinctWorkOutArea();
    }

    @Override
    public List<String> readByDistinctDivisions() {
        return purposeRoutineRepository.findDistinctWorkOutDivision();
    }

    @Override
    public List<String> readByDistinctPurposes() {
        return purposeRoutineRepository.findDistinctWorkOutPurpose();
    }
}
