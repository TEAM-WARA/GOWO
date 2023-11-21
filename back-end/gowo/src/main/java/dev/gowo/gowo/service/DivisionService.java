package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.PurposeRoutineDTO;

import java.util.List;

public interface DivisionService {
    public List<PurposeRoutineDTO> readByDivision(String division);
}
