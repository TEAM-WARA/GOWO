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
    private String trng_nm;

    // 운동 설명
    private String vdo_desc;

    // 썸네일
    private String thumbnail;

    // 동영상 제목
    private String vdo_ttl_nm;

    // 장면 전환 재생 시간
    private Double snap_tm;

    // 동영상 주소
    private String video_url;

    // 운동 부위
    private String trng_part_nm;

    // 운동 목적
    private String ftns_fctr_nm;

    // 운동 구분
    private String trng_se_nm;
}
