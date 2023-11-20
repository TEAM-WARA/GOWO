package dev.gowo.gowo.repository;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurposeRoutineRepository extends JpaRepository<PurposeRoutineEntity, String> {

}
