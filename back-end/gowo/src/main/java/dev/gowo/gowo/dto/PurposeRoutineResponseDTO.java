package dev.gowo.gowo.dto;

import lombok.*;

@Builder
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class PurposeRoutineResponseDTO {
    int totalCount;
    Object data;
}
