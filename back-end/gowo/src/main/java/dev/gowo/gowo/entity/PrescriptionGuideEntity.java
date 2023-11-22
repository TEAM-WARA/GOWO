package dev.gowo.gowo.entity;


import lombok.*;

import javax.persistence.*;

@Builder
@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PrescriptionGuideEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 운동명
    @Column
    private String workOutName;

    // 운동 설명
    @Column
    private String workOutDescription;

    // 썸네일
    @Column
    private String imageUrl;

    // 동영상 제목
    @Column
    private String videoName;

    // 장면전환재생시간
    @Column
    private Double startTime;

    // 동영상 주소
    @Column
    private String videoUrl;

    // 소도구
    @Column
    private String tool;

    // 장소
    @Column
    private String place;

    // 체력요인
    @Column
    private String health;
}
