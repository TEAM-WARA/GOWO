package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.AreaCategoryResponseDTO;
import dev.gowo.gowo.dto.AreaResponseDTO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;

import java.util.List;

public interface AreaService {
    public AreaResponseDTO readByArea(String area);
    public AreaCategoryResponseDTO readByDistinctAreas();
}
