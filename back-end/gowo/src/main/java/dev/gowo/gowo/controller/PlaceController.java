package dev.gowo.gowo.controller;


import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import dev.gowo.gowo.service.PlaceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/place")
public class PlaceController {
    private final static Logger logger = LoggerFactory.getLogger(PlaceController.class);
    private final PlaceService placeService;

    public PlaceController(
            @Autowired PlaceService placeService
    ){
        this.placeService = placeService;
    }


    @RequestMapping()
    public ResponseEntity<List<PrescriptionGuideDTO>> getByPlaceName(@RequestParam("place") String place){
        return this.placeService.getByPlaceName(place);
    }

    @GetMapping("/category")
    public CategoryResponseDTO readByPlaceCategory(){
        return placeService.getByDistinctPlace();
    }


}
