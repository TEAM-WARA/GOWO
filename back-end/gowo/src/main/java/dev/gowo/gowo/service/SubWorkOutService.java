package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.dto.PurposeRoutineResponseDTO;

import java.util.List;

public interface SubWorkOutService {
    public PurposeRoutineResponseDTO readByChoiceSubWorkOut(String division);
    public List<PurposeRoutineDTO> readByDTOList(List<Long> workOutIds);
}
