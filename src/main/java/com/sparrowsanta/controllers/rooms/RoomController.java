package com.sparrowsanta.controllers.rooms;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.*;
import com.sparrowsanta.utils.BasicRestTemplate;
import com.sparrowsanta.utils.MultiPartFileConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;


@Controller
@RequestMapping("rooms")
@SessionAttributes("furnitures")
public class RoomController {

    private List<Room> rooms = new ArrayList<>();
    private List<Rent> rents = new ArrayList<>();
    private Client client = new Client(1L, "Jakub", "Wróbel", 30, "jakubw.rrw@wm.pl", "Krakow", "Zlota", 73893987L);
    private List<Furniture> furnitureList = new ArrayList<>();
    private Room room;
    @Autowired
    private MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter;

    public RoomController() {
        Furniture furniture = new Furniture(1, "Szafa", 1, LocalDate.now(), 350);
        Furniture furniture2 = new Furniture(2, "Szafa", 1, LocalDate.now(), 350);

        furnitureList.add(furniture);
        furnitureList.add(furniture2);
        rooms.add(room);
    }

    @GetMapping("/roomPicture/{id}")
    @ResponseBody
    public String getRoomPictures(@PathVariable(name = "id") long id) {
        String url = "http://localhost:8081/rooms/roomPicture/" + id;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        return new Gson().toJson(response.getBody());
    }


    @PostMapping("/roomPicture/{id}")
    public String postRoomPictures(@RequestParam("roomFilePic") MultipartFile roomFilePic, @PathVariable(name = "id") long id) {
/*

        String fileName = StringUtils.cleanPath(roomFilePic.getOriginalFilename());
        System.out.println(roomFilePic);
*/
        String url = "http://localhost:8081/rooms/roomPicture/" + id;
        MultiValueMap<String, Object> bodyMap = new LinkedMultiValueMap<>();
        bodyMap.add("roomFilePic", new FileSystemResource(MultiPartFileConverter.convert(roomFilePic)));
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(bodyMap, headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);

        return "redirect:/flats/showAllRooms/" + response.getBody();
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




    @DeleteMapping("/rentHistory/{rentId}")
    @ResponseBody
    public String deleteRentHistory(@PathVariable(name = "rentId") long rentId) {
        rents.removeIf(r -> r.getId() == rentId);
        return new Gson().toJson("OK");
    }

    @GetMapping("/roomsForFlat/{flatId}")
    @ResponseBody
    public String getAllRoomsForFlat(@PathVariable(name = "flatId") long flatId) {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity("http://localhost:8081/rooms/roomsForFlat/" + flatId);
        return forEntity.getBody();
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
