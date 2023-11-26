package dev.gowo.gowo.dao.impl;

import dev.gowo.gowo.dao.PrescriptionGuideDAO;
import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import dev.gowo.gowo.repository.PrescriptionGuideRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class PrescriptionGuideDAOImpl implements PrescriptionGuideDAO {

    private final PrescriptionGuideRepository prescriptionGuideRepository;

    public PrescriptionGuideDAOImpl(
            @Autowired PrescriptionGuideRepository prescriptionGuideRepository
    ){
        this.prescriptionGuideRepository = prescriptionGuideRepository;
    }

    @Override
    public void createPrescriptionGuide(PrescriptionGuideEntity prescriptionGuideEntity) {
        this.prescriptionGuideRepository.save(prescriptionGuideEntity);
    }

    @Override
    public PrescriptionGuideEntity readById(Long id) {
        return prescriptionGuideRepository.getById(id);
    }

    @Override
    public List<PrescriptionGuideEntity> getByToolName(String tool) {
        return this.prescriptionGuideRepository.getByTool(tool);
    }

    @Override
    public List<PrescriptionGuideEntity> getByPlaceName(String place) {
        return this.prescriptionGuideRepository.getByPlace(place);
    }

    @Override
    public List<PrescriptionGuideEntity> getByHealth(String health) {
        return this.prescriptionGuideRepository.getByHealth(health);
    }

    @Override
    public List<PrescriptionGuideEntity> getMainWorkOut(String health, String tool, String place) {
        if(tool.equals("사용")) {
            return this.prescriptionGuideRepository.getByHealthAndToolNotAndPlace(health, "", place);
        }else{
            return this.prescriptionGuideRepository.getByHealthAndToolAndPlace(health, "", place);
        }
    }

    @Override
    public List<String> getByDistinctTool() {
        return prescriptionGuideRepository.findDistinctTool();
    }

    @Override
    public List<String> getByDistinctPlace() {
        return prescriptionGuideRepository.findDistinctPlace();
    }

    @Override
    public List<String> getByDistinctHealth() {
        return prescriptionGuideRepository.findDistinctHealth();
    }

    @Override
    public List<PrescriptionGuideEntity> getAllData() {
        return this.prescriptionGuideRepository.findAll();
    }
}
