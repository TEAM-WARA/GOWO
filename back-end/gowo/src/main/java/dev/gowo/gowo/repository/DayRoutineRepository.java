package dev.gowo.gowo.repository;

import dev.gowo.gowo.entity.DayRoutineEntity;
import dev.gowo.gowo.entity.RoutineEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DayRoutineRepository extends JpaRepository<DayRoutineEntity, Long> {
    public List<DayRoutineEntity> getByRoutine(RoutineEntity routineEntity);
}
