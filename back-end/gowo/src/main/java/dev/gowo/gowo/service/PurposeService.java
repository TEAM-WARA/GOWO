package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.dto.PurposeRoutineResponseDTO;

import java.util.List;

public interface PurposeService {
    public PurposeRoutineResponseDTO readByPurpose(String purpose);
    public CategoryResponseDTO readByDistinctPurposes();
}
