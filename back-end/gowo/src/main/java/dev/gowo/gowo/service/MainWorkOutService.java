package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MainWorkOutService {

    public ResponseEntity<List<PrescriptionGuideDTO>> getChoiceByMainWorkOut(String health, String tool, String place);



}
