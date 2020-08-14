package com.sparrowsanta.controllers.rooms;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Furniture;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("rooms")
@SessionAttributes("furnitures")
public class RoomController {
    Furniture furniture = new Furniture(1, "Szafa", 1, LocalDate.now(), 350);
    Furniture furniture2 = new Furniture(1, "Szafa", 1, LocalDate.now(), 350);

    List<Furniture> furnitureList = Arrays.asList(furniture, furniture2);

    @GetMapping
    public String showRooms(Model model) {
        model.addAttribute("furnitures", 0);
        return "rooms/showRooms";
    }

    @DeleteMapping(value = "/delete/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteRoom(@PathVariable(name = "id") long id) {
        System.out.println(id);
        return new Gson().toJson("Ok");

    }

    @RequestMapping(value = "/furniture/{roomId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String showAllFurniture(Model model, @PathVariable(name = "roomId") long roomId) {
        List<Furniture> furnitures = furnitureList.stream()
                .filter(s -> furnitureList.stream()
                        .anyMatch(dept -> dept.getRoomId() == roomId))
                .collect(Collectors.toList());
        model.addAttribute("furnitures", new Gson().toJson(furnitures));


        return new Gson().toJson(furnitures);
    }

    @PostMapping(value = "/furniture/update/{roomId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String updateFurnitureForRoom(@PathVariable(name = "roomId") long roomId, @RequestBody String data){
        System.out.println(data);
        return new Gson().toJson("OK");
    }
}
