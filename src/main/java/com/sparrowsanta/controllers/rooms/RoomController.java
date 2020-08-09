package com.sparrowsanta.controllers.rooms;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Furniture;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("rooms")
public class RoomController {
    Furniture furniture = new Furniture(1, "Szafa", 1, LocalDate.now(), 350);
    Furniture furniture2 = new Furniture(1, "Szafa", 1, LocalDate.now(), 350);

    List<Furniture> furnitureList = Arrays.asList(furniture, furniture2);

    @RequestMapping
    public String showRooms() {
        return "rooms/showRooms";
    }

    @DeleteMapping(name = "/delete/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteRoom(@PathVariable(name = "roomId") long roomId) {
        System.out.println("test");
        return "";
    }

    @RequestMapping(name = "/furniture/{id}", produces = "text/plain;charset=UTF-8")
    public String showAllFurniture(Model model, @PathVariable(name = "roomId") long roomId) {
        List<Furniture> furnitures = furnitureList.stream()
                .filter(s -> furnitureList.stream()
                        .anyMatch(dept -> dept.getRoomId() == roomId))
                .collect(Collectors.toList());
        model.addAttribute("furnitures", new Gson().toJson(furnitures));
        return "";
    }
}
