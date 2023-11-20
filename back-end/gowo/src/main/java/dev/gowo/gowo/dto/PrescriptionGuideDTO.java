package dev.gowo.gowo.dto;


import lombok.*;

@ToString
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PrescriptionGuideDTO {
    // ID
    private Long id;

    // 운동명
    private String workOutName;

    // 운동 설명
    private String workOutDescription;

    // 썸네일
    private String imageUrl;

    // 동영상 제목
    private String videoName;

    // 장면전환재생시간
    private Double startTime;

    // 동영상 주소
    private String videoUrl;

    // 소도구
    private String tool;

    // 장소
    private String place;

    // 체력요인
    private String health;
}
