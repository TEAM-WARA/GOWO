package dev.gowo.gowo.controller;

import dev.gowo.gowo.service.impl.PurposeRoutineServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.net.URISyntaxException;

@RestController
public class PurposeRoutineController {
    private final PurposeRoutineServiceImpl purposeRoutineServiceImpl;

    public PurposeRoutineController(@Autowired PurposeRoutineServiceImpl purposeRoutineServiceImpl) {
        this.purposeRoutineServiceImpl = purposeRoutineServiceImpl;
    }

    @PostMapping("/create")
    public void createVideo() throws URISyntaxException{
        for(int i=0; i<3;i++) {
            purposeRoutineServiceImpl.createVideo(i+1);
        }
    }
}
