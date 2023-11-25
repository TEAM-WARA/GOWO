package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.PurposeRoutineDAO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.dto.PurposeRoutineResponseDTO;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import dev.gowo.gowo.service.SubWorkOutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class SubWorkOutServiceImpl implements SubWorkOutService {
    private final PurposeRoutineDAO purposeRoutineDAO;

    public SubWorkOutServiceImpl(@Autowired PurposeRoutineDAO purposeRoutineDAO) {
        this.purposeRoutineDAO = purposeRoutineDAO;
    }

    @Override
    public PurposeRoutineResponseDTO readByChoiceSubWorkOut(String division){
        List<PurposeRoutineEntity> entities = purposeRoutineDAO.readByDivision(division);
        List<PurposeRoutineDTO> dtoList = toDTOList(entities);
        List<PurposeRoutineDTO> result = new ArrayList<>();

        Random rm = new Random(System.currentTimeMillis());
        int i = Math.min(dtoList.size(), 2);

        while(i-- > 0 ){
            result.add(dtoList.get(rm.nextInt(dtoList.size())));
        }

        return toaResponseDTO(result);
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

    public PurposeRoutineResponseDTO toaResponseDTO(List<PurposeRoutineDTO> DTOS){
        PurposeRoutineResponseDTO purposeRoutineResponseDTO = PurposeRoutineResponseDTO.builder()
                .totalCount(DTOS.size())
                .data(DTOS)
                .build();
        return purposeRoutineResponseDTO;
    }
}
