package dev.gowo.gowo.dao.impl;

import dev.gowo.gowo.dao.PrescriptionGuideDAO;
import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import dev.gowo.gowo.repository.PrescriptionGuideRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


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
}
