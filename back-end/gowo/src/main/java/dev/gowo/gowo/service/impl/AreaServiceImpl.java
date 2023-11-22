package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.PurposeRoutineDAO;
import dev.gowo.gowo.dto.AreaCategoryResponseDTO;
import dev.gowo.gowo.dto.AreaResponseDTO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import dev.gowo.gowo.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AreaServiceImpl implements AreaService {
    private final PurposeRoutineDAO purposeRoutineDAO;

    public AreaServiceImpl(@Autowired PurposeRoutineDAO purposeRoutineDAO) {
        this.purposeRoutineDAO = purposeRoutineDAO;
    }

    @Override
    public AreaResponseDTO readByArea(String area) {
        List<PurposeRoutineEntity> entities = purposeRoutineDAO.readByArea(area);
        List<PurposeRoutineDTO> dtoList = toDTOList(entities);
        return toAreaResponseDTO(dtoList);
    }

    @Override
    public AreaCategoryResponseDTO readByDistinctAreas() {
        List<String> areas = purposeRoutineDAO.readByDistinctAreas();
        AreaCategoryResponseDTO areaCategoryResponseDTO = AreaCategoryResponseDTO.builder()
                .area(areas)
                .build();
        return areaCategoryResponseDTO;
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

    public AreaResponseDTO toAreaResponseDTO(List<PurposeRoutineDTO> DTOS){
        AreaResponseDTO areaResponseDTO = AreaResponseDTO.builder()
                .totalCount(DTOS.size())
                .data(DTOS)
                .build();
        return areaResponseDTO;
    }
}
