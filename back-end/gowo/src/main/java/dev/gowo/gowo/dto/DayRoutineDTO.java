package dev.gowo.gowo.dto;


import lombok.*;

import java.util.ArrayList;
import java.util.List;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class DayRoutineDTO {
    private Long id;
    @Builder.Default
    private List<Long> preWorkOut = new ArrayList<>();
    @Builder.Default
    private List<Long> mainWorkOut = new ArrayList<>();
    @Builder.Default
    private List<Long> finishWorkOut = new ArrayList<>();
}

