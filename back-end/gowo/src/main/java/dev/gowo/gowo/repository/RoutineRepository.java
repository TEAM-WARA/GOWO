package dev.gowo.gowo.repository;

import dev.gowo.gowo.entity.RoutineEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoutineRepository extends JpaRepository<RoutineEntity, String> {
}
