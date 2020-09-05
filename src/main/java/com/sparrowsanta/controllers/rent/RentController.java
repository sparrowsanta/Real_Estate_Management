package com.sparrowsanta.controllers.rent;

import com.google.gson.Gson;
import com.sparrowsanta.utils.BasicRestTemplate;
import com.sparrowsanta.utils.RestUrls;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@Controller
@RequestMapping("rents")
public class RentController {

    @PostMapping("/{roomId}")
    @ResponseBody
    public String saveRentForRoom(@PathVariable(name = "roomId") long roomId, @RequestBody String rentDetails) {
        ResponseEntity<String> forEntity = BasicRestTemplate.postForEntity(rentDetails, RestUrls.SAVE_RENT_FOR_ROOM + roomId);
        return new Gson().toJson("OK");
    }

    @GetMapping("/rentHistory/{rentId}")
    @ResponseBody
    public String getRentHistoryById(@PathVariable(name = "rentId") long rentId) {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity(RestUrls.GET_RENT_HISTORY_BY_ID + rentId);
        return forEntity.getBody();
    }

    @PutMapping("/{rentId}")
    @ResponseBody
    public String saveEditedRent(@PathVariable(name = "rentId") long rentId, @RequestBody String data) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(data, headers);
        restTemplate.exchange(RestUrls.SAVE_RENT_FOR_ROOM + rentId, HttpMethod.PUT, request, void.class);

        return "OK";
    }

    @GetMapping(value = "/roomRentHistory/{roomId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getRentHistoryByRoomId(@PathVariable(name = "roomId") long roomId, Model model) {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity(RestUrls.GET_RENT_HISTORY_BY_ROOM_ID + roomId);
        return forEntity.getBody();
    }


    @DeleteMapping("/rentHistory/{rentId}")
    @ResponseBody
    public String deleteRentHistory(@PathVariable(name = "rentId") long rentId) {
        BasicRestTemplate.deleteForEntity(RestUrls.GET_RENT_HISTORY_BY_ID, rentId);
        return new Gson().toJson("OK");
    }

    @GetMapping("/getMostRecentRent/{roomId}")
    @ResponseBody
    public String getMostRecentRent(@PathVariable(name = "roomId") long roomId) {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity(RestUrls.GET_MOST_RECENT_RENT + roomId);
        return forEntity.getBody();
    }
}
