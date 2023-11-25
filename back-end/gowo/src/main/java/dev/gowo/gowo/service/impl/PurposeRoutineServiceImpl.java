package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.PurposeRoutineDAO;
import dev.gowo.gowo.dto.PurposeRoutineDTO;
import dev.gowo.gowo.entity.PurposeRoutineEntity;
import dev.gowo.gowo.service.PurposeRoutineService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class PurposeRoutineServiceImpl implements PurposeRoutineService {
    private final PurposeRoutineDAO purposeRoutineDao;

    public PurposeRoutineServiceImpl(@Autowired PurposeRoutineDAO purposeRoutineDao) {
        this.purposeRoutineDao = purposeRoutineDao;
    }

    public void createVideo(int page) throws URISyntaxException{
        try {
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            HttpEntity<?> http = new HttpEntity<>(headers);

            String uriStr = "https://apis.data.go.kr/B551014/SRVC_TODZ_VDO_PKG/TODZ_VDO_ROUTINE_I?serviceKey=INPDOyrXXImnGdmHVQ0dbbSxVooQk7kDVX7dYfzS%2BNLdsx%2BRwnE5Z7zHLdCIIB2B7i4CrOVGm2j3z4F2%2FIT1bg%3D%3D&pageNo=" + page + "&numOfRows=1000&resultType=json";

            URI uri = new URI(uriStr);

            List<HttpMessageConverter<?>> messageConverters = new ArrayList<HttpMessageConverter<?>>();
            MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();

            converter.setSupportedMediaTypes(Collections.singletonList(MediaType.ALL));
            messageConverters.add(converter);
            restTemplate.setMessageConverters(messageConverters);

            ResponseEntity response = restTemplate.exchange(uri, HttpMethod.GET, http, JSONObject.class);


            if (response.getStatusCode().is2xxSuccessful()) {
                JSONObject value = (JSONObject) response.getBody();
                LinkedHashMap<?, ?> data = (LinkedHashMap<?, ?>) value.get("response");
                data = (LinkedHashMap<?, ?>) data.get("body");
                LinkedHashMap<?, ?> items = (LinkedHashMap<?, ?>) data.get("items");
                List<?> item = (List<?>) items.get("item");

                for(Object work : item){
                    LinkedHashMap<?, ?> workout = (LinkedHashMap<?, ?>) work;

                    PurposeRoutineEntity entity = PurposeRoutineEntity.builder()
                            .workOutName((String) workout.get("trng_nm"))
                            .workOutDescription((String) workout.get("vdo_desc"))
                            .imageUrl(((String) workout.get("img_file_url")) + ((String) workout.get("img_file_nm")))
                            .videoName((String) workout.get("vdo_ttl_nm"))
                            .startTime(Double.valueOf(String.valueOf(workout.get("snap_tm"))))
                            .videoUrl(((String) workout.get("file_url")) + ((String) workout.get("file_nm")))
                            .workOutArea((String) workout.get("trng_part_nm"))
                            .workOutPurpose((String) workout.get("ftns_fctr_nm"))
                            .workOutDivision((String) workout.get("trng_se_nm"))
                            .build();
                    purposeRoutineDao.createPurposeRoutine(entity);
                }

            }
        } catch (HttpClientErrorException e) {
        }
    }
}
