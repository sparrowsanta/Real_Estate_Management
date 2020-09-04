package com.sparrowsanta.controllers.rooms;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.*;
import com.sparrowsanta.utils.BasicRestTemplate;
import com.sparrowsanta.utils.MultiPartFileConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.*;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("rooms")
@SessionAttributes("furnitures")
public class RoomController {
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

    @PutMapping(value = "/{roomId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String updateRoomById(@PathVariable(name = "roomId") long roomId, @RequestBody String data) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(data, headers);
        ResponseEntity<String> exchange = restTemplate.exchange("http://localhost:8081/rooms/" + roomId, HttpMethod.PUT, request, String.class);
        return exchange.getBody();
    }

    @GetMapping("/{roomId}")
    @ResponseBody
    public String getRoomById(@PathVariable(name = "roomId") long roomId) {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity("http://localhost:8081/rooms/" + roomId);
        return forEntity.getBody();
    }


    @DeleteMapping(value = "/delete/{roomId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteRoom(@PathVariable(name = "roomId") long roomId) {
        BasicRestTemplate.deleteForEntity("http://localhost:8081/rooms/delete/", roomId);
        return new Gson().toJson("Ok");
    }

    @GetMapping("/roomsForFlat/{flatId}")
    @ResponseBody
    public String getAllRoomsForFlat(@PathVariable(name = "flatId") long flatId) {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity("http://localhost:8081/rooms/roomsForFlat/" + flatId);
        return forEntity.getBody();
    }
}
