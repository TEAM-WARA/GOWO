package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.PurposeRoutineDTO;

import java.util.List;

public interface PurposeService {
    public List<PurposeRoutineDTO> readByPurpose(String purpose);
}
