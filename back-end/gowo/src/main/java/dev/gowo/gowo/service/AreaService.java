package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PurposeRoutineResponseDTO;

public interface AreaService {
    public PurposeRoutineResponseDTO readByArea(String area);
    public CategoryResponseDTO readByDistinctAreas();
}
