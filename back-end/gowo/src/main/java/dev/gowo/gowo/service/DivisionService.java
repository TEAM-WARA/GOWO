package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.dto.PurposeRoutineResponseDTO;

import java.util.List;

public interface DivisionService {
    public PurposeRoutineResponseDTO readByDivision(String division);
    public CategoryResponseDTO readByDistinctDivisions();
}
