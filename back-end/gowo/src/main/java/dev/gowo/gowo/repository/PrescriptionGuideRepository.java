package dev.gowo.gowo.repository;

import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrescriptionGuideRepository extends JpaRepository<PrescriptionGuideEntity, Long> {
    public List<PrescriptionGuideEntity> getByTool(String tool);
    public List<PrescriptionGuideEntity> getByPlace(String place);
    public List<PrescriptionGuideEntity> getByHealth(String health);
    // 실외 추출
    public List<PrescriptionGuideEntity> getByHealthAndToolAndPlace(String health, String tool, String place);
    public List<PrescriptionGuideEntity> getByHealthAndToolNotAndPlace(String health, String tool, String place);
}
