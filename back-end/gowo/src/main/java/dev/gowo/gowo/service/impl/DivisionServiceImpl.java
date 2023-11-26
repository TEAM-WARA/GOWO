package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.PurposeRoutineDAO;
import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.dto.PurposeRoutineResponseDTO;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import dev.gowo.gowo.service.DivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DivisionServiceImpl implements DivisionService {
    private final PurposeRoutineDAO purposeRoutineDAO;

    public DivisionServiceImpl(@Autowired PurposeRoutineDAO purposeRoutineDAO) {
        this.purposeRoutineDAO = purposeRoutineDAO;
    }

    @Override
    public PurposeRoutineResponseDTO readByDivision(String division) {
        List<PurposeRoutineEntity> entities = purposeRoutineDAO.readByDivision(division);
        List<PurposeRoutineDTO> dtoList = toDTOList(entities);
        return toaResponseDTO(dtoList);
    }

    @Override
    public CategoryResponseDTO readByDistinctDivisions() {
        List<String> divisionCategory = purposeRoutineDAO.readByDistinctDivisions();
        CategoryResponseDTO categoryResponseDTO = CategoryResponseDTO.builder()
                .category(divisionCategory)
                .build();
        return categoryResponseDTO;
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
