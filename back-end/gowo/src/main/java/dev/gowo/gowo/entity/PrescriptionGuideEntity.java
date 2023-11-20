package dev.gowo.gowo.entity;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
    private String trng_nm;

    // 운동 설명
    private String vdo_desc;

    // 썸네일
    private String thumbnail;

    // 동영상 제목
    private String vdo_ttl_nm;

    // 장면전환재생시간
    private Double snap_tm;

    // 동영상 주소
    private String video_url;

    // 소도구
    private String tool_nm;

    // 장소
    private String trng_plc_nm;

    // 체력요인
    private String ftns_fctr_nm;
}
