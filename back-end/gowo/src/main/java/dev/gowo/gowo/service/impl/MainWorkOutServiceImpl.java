package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.PrescriptionGuideDAO;
import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import dev.gowo.gowo.service.MainWorkOutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class MainWorkOutServiceImpl implements MainWorkOutService {

    public final PrescriptionGuideDAO prescriptionGuideDAO;

    public MainWorkOutServiceImpl(
            @Autowired PrescriptionGuideDAO prescriptionGuideDAO
    ){
        this.prescriptionGuideDAO = prescriptionGuideDAO;
    }

    @Override
    public ResponseEntity<List<PrescriptionGuideDTO>> getChoiceByMainWorkOut(String health, String tool, String place) {
        List<PrescriptionGuideDTO> data = new ArrayList<>();
        List<PrescriptionGuideEntity> entities = this.prescriptionGuideDAO.getMainWorkOut(health, tool, place);
        for(PrescriptionGuideEntity entity : entities){
            data.add(
                    PrescriptionGuideDTO.builder()
                            .id(entity.getId())
                            .workOutName(entity.getWorkOutName())
                            .workOutDescription(entity.getWorkOutDescription())
                            .imageUrl(entity.getImageUrl())
                            .videoName(entity.getVideoName())
                            .startTime(entity.getStartTime())
                            .videoUrl(entity.getVideoUrl())
                            .tool(entity.getTool())
                            .place(entity.getPlace())
                            .health(entity.getHealth())
                            .build());
        }
        List<PrescriptionGuideDTO> result = new ArrayList<>();
        Random rm = new Random(System.currentTimeMillis());
        int i = data.size() < 4 ? data.size() : 4;
        while(i-- > 0 ){
            result.add(data.get(rm.nextInt(data.size())));
        }

        return ResponseEntity.status(200).body(result);
    }

    @Override
    public List<PrescriptionGuideDTO> readByDTOList(List<Long> workOutIds) {
        List<PrescriptionGuideEntity> entities = new ArrayList<>();

        for(Long id : workOutIds){
            entities.add(prescriptionGuideDAO.readById(id));
        }

        return toDTOList(entities);
    }

    public List<PrescriptionGuideDTO> toDTOList(List<PrescriptionGuideEntity> entities){
        List<PrescriptionGuideDTO> prescriptionGuideDTOS = new ArrayList<>();

        for(PrescriptionGuideEntity entity : entities){
            PrescriptionGuideDTO purposeRoutineDTO = PrescriptionGuideDTO.builder()
                    .id(entity.getId())
                    .workOutName(entity.getWorkOutName())
                    .workOutDescription(entity.getWorkOutDescription())
                    .imageUrl(entity.getImageUrl())
                    .videoName(entity.getVideoName())
                    .startTime(entity.getStartTime())
                    .videoUrl(entity.getVideoUrl())
                    .tool(entity.getTool())
                    .place(entity.getPlace())
                    .health(entity.getHealth())
                    .build();
            prescriptionGuideDTOS.add(purposeRoutineDTO);
        }
        return prescriptionGuideDTOS;
    }
}
