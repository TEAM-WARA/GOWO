package dev.gowo.gowo.dao;

import dev.gowo.gowo.entity.PurposeRoutineEntity;

import java.util.List;

public interface PurposeRoutineDAO {
    public void createPurposeRoutine(PurposeRoutineEntity entity);
    public List<PurposeRoutineEntity> readByPurpose(String purpose);
    public List<PurposeRoutineEntity> readByDivision(String division);
    public List<PurposeRoutineEntity> readByArea(String area);
}
