package dev.gowo.gowo.repository;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurposeRoutineRepository extends JpaRepository<PurposeRoutineEntity, Long> {
    List<PurposeRoutineEntity> findByWorkOutArea(String workOutArea);
    List<PurposeRoutineEntity> findByWorkOutDivision(String workOutDivision);
    List<PurposeRoutineEntity> findByWorkOutPurpose(String workOutPurpose);

    @Query("SELECT p.workOutArea FROM PurposeRoutineEntity p GROUP BY p.workOutArea")
    List<String> findDistinctWorkOutArea();
}
