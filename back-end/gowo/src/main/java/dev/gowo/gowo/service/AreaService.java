package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.PurposeRoutineDTO;

import java.util.List;

public interface AreaService {
    public List<PurposeRoutineDTO> readByArea(String area);
}
