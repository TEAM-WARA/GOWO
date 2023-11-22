package dev.gowo.gowo.dto;

import lombok.*;
import java.util.List;

@Builder
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AreaCategoryResponseDTO {
    List<String> area;
}
