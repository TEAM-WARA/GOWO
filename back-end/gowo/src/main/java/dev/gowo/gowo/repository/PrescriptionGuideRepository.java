package dev.gowo.gowo.repository;

import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrescriptionGuideRepository extends JpaRepository<PrescriptionGuideEntity, Long> {
<<<<<<< HEAD
    public List<PrescriptionGuideEntity> getByTool(String tool);
    public List<PrescriptionGuideEntity> getByPlace(String place);
=======
    public List<PrescriptionGuideEntity> getByTool_nm(String tool_nm);
    public List<PrescriptionGuideEntity> getByTrng_plc_nm(String trng_plc_nm);
>>>>>>> 7958d1e (🚧 디비 컬럼명 수정해야 함 비상!)

}
