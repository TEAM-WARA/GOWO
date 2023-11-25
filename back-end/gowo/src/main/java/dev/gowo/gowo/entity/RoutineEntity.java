package dev.gowo.gowo.entity;


import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "routine")
public class RoutineEntity {
    @Id @Column(name = "password")
    private String password;

    @Column
    private Long count;

    @OneToMany(mappedBy = "routine")
    private List<DayRoutineEntity> routineEntityList = new ArrayList<>();

}
