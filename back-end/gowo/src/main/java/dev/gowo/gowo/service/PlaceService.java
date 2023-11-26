package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PlaceService {

    public ResponseEntity<List<PrescriptionGuideDTO>> getByPlaceName(String place);
    public CategoryResponseDTO getByDistinctPlace();
    public ResponseEntity<List<PrescriptionGuideDTO>> getAllData();
}
