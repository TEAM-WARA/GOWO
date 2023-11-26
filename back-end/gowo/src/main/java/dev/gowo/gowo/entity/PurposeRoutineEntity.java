package dev.gowo.gowo.entity;

import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class PurposeRoutineEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 운동명
    private String workOutName;

    // 운동 설명
    private String workOutDescription;

    // 썸네일
    private String imageUrl;

    // 동영상 제목
    private String videoName;

    // 장면 전환 재생 시간
    private Double startTime;
    // 동영상 주소

    private String videoUrl;

    // 운동 부위
    private String workOutArea;

    // 운동 구분
    private String workOutDivision;

    // 운동 목적
    private String workOutPurpose;
}
