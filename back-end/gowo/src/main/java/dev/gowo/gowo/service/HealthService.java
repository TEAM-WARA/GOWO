package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface HealthService {

    public ResponseEntity<List<PrescriptionGuideDTO>> getByHealth(String health);
    public ResponseEntity<List<PrescriptionGuideDTO>> getChoiceByHealth(String health);
    public CategoryResponseDTO getByDistinctHealth();
    public ResponseEntity<List<PrescriptionGuideDTO>> getAllData();
}
