package dev.gowo.gowo.service.impl;

import dev.gowo.gowo.dao.PrescriptionGuideDAO;
import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import dev.gowo.gowo.entity.PrescriptionGuideEntity;
import dev.gowo.gowo.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class PlaceServiceImpl implements PlaceService {

    private final PrescriptionGuideDAO prescriptionGuideDAO;

    public PlaceServiceImpl(
            @Autowired PrescriptionGuideDAO prescriptionGuideDAO
    ){
        this.prescriptionGuideDAO = prescriptionGuideDAO;
    }

    @Override
    public ResponseEntity<List<PrescriptionGuideDTO>> getByPlaceName(String place) {
        List<PrescriptionGuideDTO> result = new ArrayList<>();
        List<PrescriptionGuideEntity> entities = this.prescriptionGuideDAO.getByPlaceName(place);

        for(PrescriptionGuideEntity entity : entities){
            result.add(
                    PrescriptionGuideDTO.builder()
                            .id(entity.getId())
                            .workOutName(entity.getTrng_nm())
                            .workOutDescription(entity.getVdo_desc())
                            .imageUrl(entity.getThumbnail())
                            .videoName(entity.getVdo_ttl_nm())
                            .startTime(entity.getSnap_tm())
                            .videoUrl(entity.getVideo_url())
                            .tool(entity.getTool_nm())
                            .place(entity.getTrng_plc_nm())
                            .health(entity.getFtns_fctr_nm())
                            .build()
            );
        }

        return ResponseEntity.status(200).body(result);
    }
}
