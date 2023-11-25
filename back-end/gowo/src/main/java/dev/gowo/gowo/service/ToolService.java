package dev.gowo.gowo.service;

import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ToolService {

    public ResponseEntity<List<PrescriptionGuideDTO>> getByToolName(String tool);
    public ResponseEntity<List<String>> getByDistinctTool();
}
