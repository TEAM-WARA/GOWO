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
    public List<PrescriptionGuideEntity> getByToolName(String tool) {
        return this.prescriptionGuideRepository.getByTool_nm(tool);
    }

    @Override
    public List<PrescriptionGuideEntity> getByPlaceName(String place) {
        return this.prescriptionGuideRepository.getByTrng_plc_nm(place);
    }


}
