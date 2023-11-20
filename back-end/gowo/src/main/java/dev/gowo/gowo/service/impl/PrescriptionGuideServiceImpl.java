package dev.gowo.gowo.service.impl;


import dev.gowo.gowo.dao.PrescriptionGuideDAO;
import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import dev.gowo.gowo.service.PrescriptionGuideService;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

@Service
public class PrescriptionGuideServiceImpl implements PrescriptionGuideService {
    private static final Logger logger = LoggerFactory.getLogger(PrescriptionGuideServiceImpl.class);
    private final PrescriptionGuideDAO prescriptionGuideDAO;

    public PrescriptionGuideServiceImpl(
            @Autowired PrescriptionGuideDAO prescriptionGuideDAO
    ){
        this.prescriptionGuideDAO = prescriptionGuideDAO;
    }

    @Override
    public void saveData() throws URISyntaxException {
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<?> http;
        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.APPLICATION_JSON);

        List<HttpMessageConverter<?>> messageConverters = new ArrayList<HttpMessageConverter<?>>();
        //Add the Jackson Message converter
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();

        // Note: here we are making this converter to process any kind of response,
        // not only application/*json, which is the default behaviour
        converter.setSupportedMediaTypes(Collections.singletonList(MediaType.ALL));
        messageConverters.add(converter);
        restTemplate.setMessageConverters(messageConverters);

        String num = "&numOfRows=1000";
        for(int i=1; i<9; i++) {
            String page = "&pageNo="+i;
            String url = "https://apis.data.go.kr/B551014/SRVC_TODZ_VDO_PKG/TODZ_VDO_TRNG_GUIDE_I?serviceKey=INPDOyrXXImnGdmHVQ0dbbSxVooQk7kDVX7dYfzS%2BNLdsx%2BRwnE5Z7zHLdCIIB2B7i4CrOVGm2j3z4F2%2FIT1bg%3D%3D&resultType=json";
            URI uri = new URI(url + page + num);

            http = new HttpEntity<>(header);
            ResponseEntity response = restTemplate.exchange(uri, HttpMethod.GET, http, JSONObject.class);
            JSONObject value = (JSONObject) response.getBody();
            LinkedHashMap<?, ?> data = (LinkedHashMap<?, ?>) value.get("response");
            data = (LinkedHashMap<?, ?>) data.get("body");
            LinkedHashMap<?, ?> items = (LinkedHashMap<?, ?>) data.get("items");
            List<?> item = (List<?>) items.get("item");
            LinkedHashMap<?, ?> json = (LinkedHashMap<?, ?>) item.get(0);

            for (Object work : item) {
                LinkedHashMap<?, ?> workout = (LinkedHashMap<?, ?>) work;
                //logger.info(workout.toString());
                PrescriptionGuideEntity entity = PrescriptionGuideEntity.builder()
                        .trng_nm((String) workout.get("trng_nm"))
                        .vdo_desc((String) workout.get("vdo_desc"))
                        .thumbnail(workout.get("img_file_url").toString() + workout.get("img_file_nm").toString())
                        .vdo_ttl_nm((String) workout.get("vdo_ttl_nm"))
                        .snap_tm((Double) workout.get("snap_tm"))
                        .video_url(workout.get("file_url").toString() + workout.get("file_nm").toString())
                        .tool_nm((String) workout.get("tool_nm"))
                        .trng_plc_nm((String) workout.get("trng_plc_nm"))
                        .ftns_fctr_nm((String) workout.get("ftns_fctr_nm"))
                        .build();
                this.prescriptionGuideDAO.createPrescriptionGuide(entity);
                //logger.info(workout.toString());
            }
        }

    }
}
