package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.PurposeRoutineDAO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import dev.gowo.gowo.service.PurposeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class PurposeServiceImpl implements PurposeService {
    private final PurposeRoutineDAO purposeRoutineDAO;

    public PurposeServiceImpl(@Autowired PurposeRoutineDAO purposeRoutineDAO) {
        this.purposeRoutineDAO = purposeRoutineDAO;
    }

    @Override
    public List<PurposeRoutineDTO> readByPurpose(String purpose) {
        List<PurposeRoutineEntity> entities = purposeRoutineDAO.readByPurpose(purpose);
        return toDTOList(entities);
    }

    public List<PurposeRoutineDTO> toDTOList(List<PurposeRoutineEntity> entities){
        List<PurposeRoutineDTO> purposeRoutineDTOS = new ArrayList<>();

        for(PurposeRoutineEntity entity : entities){
            PurposeRoutineDTO purposeRoutineDTO = PurposeRoutineDTO.builder()
                    .id(entity.getId())
                    .workOutName(entity.getWorkOutName())
                    .workOutDescription(entity.getWorkOutDescription())
                    .imageUrl(entity.getImageUrl())
                    .videoName(entity.getVideoName())
                    .startTime(entity.getStartTime())
                    .videoUrl(entity.getVideoUrl())
                    .workOutArea(entity.getWorkOutArea())
                    .workOutDivision(entity.getWorkOutDivision())
                    .workOutPurpose(entity.getWorkOutPurpose())
                    .build();
            purposeRoutineDTOS.add(purposeRoutineDTO);
        }
        return purposeRoutineDTOS;
    }
}
