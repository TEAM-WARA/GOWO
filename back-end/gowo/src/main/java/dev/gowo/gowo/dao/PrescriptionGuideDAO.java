package dev.gowo.gowo.dao;

import dev.gowo.gowo.entity.PrescriptionGuideEntity;

import java.util.List;

public interface PrescriptionGuideDAO {

    public void createPrescriptionGuide(PrescriptionGuideEntity prescriptionGuideEntity);
    public List<PrescriptionGuideEntity> getByToolName(String tool);
    public List<PrescriptionGuideEntity> getByPlaceName(String place);
    public List<PrescriptionGuideEntity> getByHealth(String health);
    public List<PrescriptionGuideEntity> getMainWorkOut(String health, String tool, String place);
    public List<String> getByDistinctTool();
    public List<String> getByDistinctPlace();
    public List<String> getByDistinctHealth();
}
