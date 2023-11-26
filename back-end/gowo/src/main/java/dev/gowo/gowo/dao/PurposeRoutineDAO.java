package dev.gowo.gowo.dao;

import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.entity.PurposeRoutineEntity;

import java.util.List;

public interface PurposeRoutineDAO {
    public void createPurposeRoutine(PurposeRoutineEntity entity);
    public PurposeRoutineEntity readById(Long id);
    public List<PurposeRoutineEntity> readByPurpose(String purpose);
    public List<PurposeRoutineEntity> readByDivision(String division);
    public List<PurposeRoutineEntity> readByArea(String area);
    public List<String> readByDistinctAreas();
    public List<String> readByDistinctDivisions();
    public List<String> readByDistinctPurposes();
    public List<PurposeRoutineEntity> readAllData();
}
