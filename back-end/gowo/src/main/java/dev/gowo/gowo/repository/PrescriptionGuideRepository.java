package dev.gowo.gowo.repository;

import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrescriptionGuideRepository extends JpaRepository<PrescriptionGuideEntity, Long> {
    public List<PrescriptionGuideEntity> getByTool_nm(String tool_nm);
    public List<PrescriptionGuideEntity> getByTrng_plc_nm(String trng_plc_nm);

}
