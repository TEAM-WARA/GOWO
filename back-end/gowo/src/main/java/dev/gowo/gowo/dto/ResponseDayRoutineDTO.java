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
public class ResponseDayRoutineDTO {
    private Long id;
    @Builder.Default
    private List<PurposeRoutineDTO> preWorkOut = new ArrayList<>();
    @Builder.Default
    private List<PrescriptionGuideDTO> mainWorkOut = new ArrayList<>();
    @Builder.Default
    private List<PurposeRoutineDTO> finishWorkOut = new ArrayList<>();
}

