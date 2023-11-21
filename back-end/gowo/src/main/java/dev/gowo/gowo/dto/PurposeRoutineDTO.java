package dev.gowo.gowo.dto;

import lombok.*;

@Builder
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class PurposeRoutineDTO {
    private Long id;
    private String workOutName;
    private String workOutDescription;
    private String imageUrl;
    private String videoName;
    private Double startTime;
    private String videoUrl;
    private String workOutArea;
    private String workOutDivision;
    private String workOutPurpose;
}
