package com.sparrowsanta.controllers.rooms;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import static com.sparrowsanta.businessmodel.Room.RoomType.ROOM;

@Controller
@RequestMapping("rooms")
@SessionAttributes("furnitures")
public class RoomController {

    private List<Room> rooms = new ArrayList<>();
    private List<Rent> rents = new ArrayList<>();
    private Client client = new Client(1L, "Jakub", "Wróbel", 30, "jakubw.rrw@wm.pl", "Krakow", "Zlota", 73893987L);
    private List<Furniture> furnitureList = new ArrayList<>();
    private Room room;

    public RoomController() {
        Furniture furniture = new Furniture(1, "Szafa", 1, LocalDate.now(), 350);
        Furniture furniture2 = new Furniture(2, "Szafa", 1, LocalDate.now(), 350);

        furnitureList.add(furniture);
        furnitureList.add(furniture2);
        room = new Room(1, "myFirstChanged", 30.20, 1000, ROOM, 1, 1);
        rooms.add(room);
    }

    @GetMapping("/roomPicture/{id}")
    @ResponseBody
    public String getRoomPictures(Model model, @PathVariable(name = "id") String id) {

        Room myFirstChanged = new Room(1, "myFirstChanged", 30.20, 1000, ROOM, 1, 1);

        byte[] file = null;
        String image = "";
        if (file != null && file.length > 0) {
            image = Base64.getEncoder().encodeToString(file);
        }

        return new Gson().toJson(image);
    }


    @PostMapping("/roomPicture/{id}")
    public String postRoomPictures(@RequestParam("roomFilePic") MultipartFile roomFilePic, Model model, @PathVariable(name = "id") String id) {

        Room myFirstChanged = new Room(1, "myFirstChanged", 30.20, 1000, ROOM, 1, 1);
        String fileName = StringUtils.cleanPath(roomFilePic.getOriginalFilename());
        try {
            myFirstChanged.setRoomPicture(roomFilePic.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "redirect:/flats/showAllRooms/" + id;
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

    @DeleteMapping(value = "/furniture/{furnitureId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteFurniture(@PathVariable(name = "furnitureId") long furnitureId) {
        System.out.println(furnitureId);
        furnitureList.removeIf(f -> f.getId() == furnitureId);
        return new Gson().toJson(furnitureList);

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

//        return room id

        return new Gson().toJson(roomId);
    }

    @GetMapping(value = "/furnitureById/{furnitureId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getFurnitureById(@PathVariable(name = "furnitureId") long furnitureId) {
        Furniture furniture = furnitureList.stream()
                .filter(f -> f.getId() == furnitureId)
                .findFirst()
                .orElse(null);
        return new Gson().toJson(furniture);
    }


    @GetMapping(value = "/roomRentHistory/{roomId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getRentHistoryByRoomId(@PathVariable(name = "roomId") long roomId, Model model) {
        rents.clear();
        Client client = new Client(1L, "Jakub", "Wróbel", 30, "jakubw.rrw@wm.pl", "Krakow", "Zlota", 73893987L);
        Client client2 = new Client(2L, "Marek", "Mikołaczyk", 30, "Mikołaj.rrw@wm.pl", "Zabierzów", "Srebrna", 2323222L);
        Room room = new Room(1, "myFirstChanged", 30.20, 1000, ROOM, 1, 1);

        Rent rent = new Rent(1, LocalDate.now().minus(Period.ofMonths(5)), LocalDate.now().minus(Period.ofMonths(3)), 1000, client, room);
        Rent rent2 = new Rent(2, LocalDate.now().minus(Period.ofMonths(3)), LocalDate.now(), 1200, client2, room);

        rents.add(rent);
        rents.add(rent2);

        return new Gson().toJson(rents);
    }

    @DeleteMapping("/rentHistory/{rentId}")
    @ResponseBody
    public String deleteRentHistory(@PathVariable(name = "rentId") long rentId) {
        rents.removeIf(r -> r.getId() == rentId);
        return new Gson().toJson("OK");
    }

    @GetMapping("/roomsForFlat/{flatId}")
    @ResponseBody
    public String getAllRoomsForFlat(@PathVariable(name = "flatId") long flatId) {
        List<Room> roomsList = rooms.stream()
                .filter(r -> r.getFlatId() == flatId)
                .collect(Collectors.toList());
        return new Gson().toJson(roomsList);
    }



/*    @GetMapping(value = "/getRoomDesc/{roomId}", produces = "text/plain;charset=UTF-8")
    public String getRoomDescription(@PathVariable(name = "roomId") long roomId) {
        Room room = rooms.stream()
                .filter(r -> r.getId() == roomId)
                .findFirst()
                .orElse(null);
        String description;
        description = "test";
        return new Gson().toJson(description);
    }*/

}
