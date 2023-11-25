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
public class RoutineDTO {
    private Long count;
    @Builder.Default
    private List<DayRoutineDTO> data = new ArrayList<>();
}
