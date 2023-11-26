package dev.gowo.gowo.controller;

import dev.gowo.gowo.dto.CategoryResponseDTO;
import dev.gowo.gowo.dto.PrescriptionGuideDTO;
import dev.gowo.gowo.service.ToolService;
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
@RequestMapping("/tool")
public class ToolController {
    private final static Logger logger = LoggerFactory.getLogger(ToolController.class);
    private final ToolService toolService;

    public ToolController(
            @Autowired ToolService toolService
    ){
        this.toolService = toolService;
    }


    /**
     * @param tool
     * @return
     */
    @GetMapping()
    public ResponseEntity<List<PrescriptionGuideDTO>> getToolData(
            @RequestParam(value = "tool", required = false) String tool
    ){
        if(tool != null) {
            return toolService.getByToolName(tool);
        }else{
            return toolService.getAllData();
        }
    }

    @GetMapping("/category")
    public CategoryResponseDTO readByToolCategory(){
        return toolService.getByDistinctTool();
    }

}
