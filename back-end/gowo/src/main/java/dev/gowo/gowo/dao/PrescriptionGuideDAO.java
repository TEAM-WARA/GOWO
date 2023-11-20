package dev.gowo.gowo.dao;

import dev.gowo.gowo.entity.PrescriptionGuideEntity;

import java.util.List;

public interface PrescriptionGuideDAO {

    public void createPrescriptionGuide(PrescriptionGuideEntity prescriptionGuideEntity);
    public List<PrescriptionGuideEntity> getByToolName(String tool);
    public List<PrescriptionGuideEntity> getByPlaceName(String place);



}
