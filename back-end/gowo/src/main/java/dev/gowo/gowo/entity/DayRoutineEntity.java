package dev.gowo.gowo.entity;


import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class DayRoutineEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "day_id")
    private Long id;

    @Column
    @ElementCollection
    @Builder.Default
    private List<Long> preWorkOut = new ArrayList<>();

    @Column
    @ElementCollection
    @Builder.Default
    private List<Long> mainWorkOut = new ArrayList<>();

    @Column
    @ElementCollection
    @Builder.Default
    private List<Long> finishWorkOut = new ArrayList<>();

    @ManyToOne(cascade = {CascadeType.REMOVE})
    @JoinColumn(name = "password")
    private RoutineEntity routine;
}
