package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.PrescriptionGuideDAO;
import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import dev.gowo.gowo.service.HealthService;
import org.apache.tomcat.jni.Time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Service
public class HealthServiceImpl implements HealthService {


    private final PrescriptionGuideDAO prescriptionGuideDAO;

    public HealthServiceImpl(
            @Autowired PrescriptionGuideDAO prescriptionGuideDAO
    ){
        this.prescriptionGuideDAO = prescriptionGuideDAO;
    }

    // 반복작업 묶음
    public List<PrescriptionGuideDTO> getAllByHealth(String health){
        List<PrescriptionGuideDTO> result = new ArrayList<>();
        List<PrescriptionGuideEntity> entities = this.prescriptionGuideDAO.getByHealth(health);

        for(PrescriptionGuideEntity entity : entities){
            result.add(
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
        return result;
    }

    @Override
    public ResponseEntity<List<PrescriptionGuideDTO>> getByHealth(String health) {
        return ResponseEntity.status(200).body(this.getAllByHealth(health));
    }

    @Override
    public ResponseEntity<List<PrescriptionGuideDTO>> getChoiceByHealth(String health) {
        List<PrescriptionGuideDTO> data = this.getAllByHealth(health);
        Random rm = new Random(System.currentTimeMillis());
        List<PrescriptionGuideDTO> result = new ArrayList<>();
        int i = 4;
        while(i-- > 0 ){
            result.add(data.get(rm.nextInt(data.size())));
        }


        return ResponseEntity.status(200).body(result);
    }

    @Override
    public ResponseEntity<List<String>> getByDistinctHealth() {
        return ResponseEntity.status(200).body(prescriptionGuideDAO.getByDistinctHealth());
    }
}
