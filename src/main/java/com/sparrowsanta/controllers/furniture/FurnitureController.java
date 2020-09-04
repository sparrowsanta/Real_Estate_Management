package com.sparrowsanta.controllers.furniture;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Furniture;
import com.sparrowsanta.utils.BasicRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("furnitures")
@Controller
public class FurnitureController {

    @DeleteMapping(value = "/{furnitureId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteFurniture(@PathVariable(name = "furnitureId") long furnitureId) {
        BasicRestTemplate.deleteForEntity("http://localhost:8081/furnitures/", furnitureId);
        return new Gson().toJson("OK");

    }

    @GetMapping(value = "/furniture/{roomId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String showAllFurniture(Model model, @PathVariable(name = "roomId") long roomId) {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity("http://localhost:8081/furnitures/furniture/" + roomId);
        return forEntity.getBody();
    }


    @PostMapping(value = "/update/{roomId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String updateFurnitureForRoom(@PathVariable(name = "roomId") long roomId, @RequestBody String data) {
        ResponseEntity<String> forEntity = BasicRestTemplate.postForEntity(data, "http://localhost:8081/furnitures/update/" + roomId);
        return new Gson().toJson(roomId);
    }


    @GetMapping(value = "/furnitureById/{furnitureId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getFurnitureById(@PathVariable(name = "furnitureId") long furnitureId) {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity("http://localhost:8081/furnitures/furnitureById/" + furnitureId);
        return forEntity.getBody();
    }
}
