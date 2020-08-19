package com.sparrowsanta.controllers.rooms;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Flat;
import com.sparrowsanta.businessmodel.Furniture;
import com.sparrowsanta.businessmodel.Room;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import static com.sparrowsanta.businessmodel.Room.RoomType.ROOM;

@Controller
@RequestMapping("rooms")
@SessionAttributes("furnitures")
public class RoomController {
    Furniture furniture = new Furniture(1, "Szafa", 1, LocalDate.now(), 350);
    Furniture furniture2 = new Furniture(1, "Szafa", 1, LocalDate.now(), 350);

    List<Furniture> furnitureList = Arrays.asList(furniture, furniture2);


    @GetMapping("/roomPicture/{id}")
    @ResponseBody
    public String getRoomPictures(Model model, @PathVariable(name = "id") String id) {

        Room myFirstChanged = new Room(1, "myFirstChanged", 30.20, 1000, ROOM, 1, 1);

        byte[] file =  null;
        String image = "";
        if (file != null && file.length > 0) {
            image = Base64.getEncoder().encodeToString(file);
        }

        return new Gson().toJson(image);
    }

    @GetMapping
    public String showRooms(Model model) {
        model.addAttribute("furnitures", 0);
        return "rooms/showRooms";
    }

    @PutMapping("/{id}")
    @ResponseBody
    public String updateRoomById(@PathVariable(name = "id") long id, Model model) {
//        only for testing:
        System.out.println(id);
        List<Room> rooms = new ArrayList<>();
        Room room = new Room(1, "myFirstChanged", 30.20, 1000, ROOM, 1, 1);
        rooms.add(room);
        Flat flat1 = new Flat(1, "Pierwsze", "Kraków", "Złota Podkowa", "5", "31-322", 2, null, 3, "Moje pierwsze mieszkanie",
                34.4, 2010, 305000.00, 2000.0, null, "", null);
        flat1.setRooms(rooms);
        model.addAttribute("flat", new Gson().toJson(flat1));

        return new Gson().toJson(room);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public String getRoomById(@PathVariable(name = "id") long id, Model model) {
//        only for testing:
        Room room = new Room(1, "myFirstChanged", 30.20, 1000, ROOM, 1);

        return new Gson().toJson(room);
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
    public String updateFurnitureForRoom(@PathVariable(name = "roomId") long roomId, @RequestBody String data) {
        System.out.println(data);
        return new Gson().toJson("OK");
    }
}
