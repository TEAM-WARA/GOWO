package dev.gowo.gowo.repository;

import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PrescriptionGuideRepository extends JpaRepository<PrescriptionGuideEntity, Long> {
    public List<PrescriptionGuideEntity> getByTool(String tool);
    public List<PrescriptionGuideEntity> getByPlace(String place);
    public List<PrescriptionGuideEntity> getByHealth(String health);
    // 실외 추출
    public List<PrescriptionGuideEntity> getByHealthAndToolAndPlace(String health, String tool, String place);
    public List<PrescriptionGuideEntity> getByHealthAndToolNotAndPlace(String health, String tool, String place);

    @Query("SELECT p.tool FROM PrescriptionGuideEntity p GROUP BY p.tool")
    List<String> findDistinctTool();
    @Query("SELECT p.place FROM PrescriptionGuideEntity p GROUP BY p.place")
    List<String> findDistinctPlace();
    @Query("SELECT p.health FROM PrescriptionGuideEntity p GROUP BY p.health")
    List<String> findDistinctHealth();
}
