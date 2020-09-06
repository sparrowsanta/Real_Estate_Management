package com.sparrowsanta.controllers.flats;

import com.google.gson.Gson;
import com.sparrowsanta.utils.BasicRestTemplate;
import com.sparrowsanta.utils.MultiPartFileConverter;
import com.sparrowsanta.utils.RestUrls;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

@Controller
@SessionAttributes("flatEdited")
@RequestMapping("flats")
public class FlatController {


    @GetMapping("/flatPicture/{id}")
    @ResponseBody
    public String getFlatPictures(Model model, @PathVariable(name = "id") long id) {
        String url = RestUrls.ADD_PICTURE_FLAT + id;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        return new Gson().toJson(response.getBody());
    }

    @PostMapping(value = "/flatPicture/{id}")
    public String postRoomPictures(@RequestParam("flatFilePic") MultipartFile flatFilePic, Model model, @PathVariable(name = "id") Long id) {

        String fileName = StringUtils.cleanPath(flatFilePic.getOriginalFilename());

        String url = RestUrls.ADD_PICTURE_FLAT + id;

        MultiValueMap<String, Object> bodyMap = new LinkedMultiValueMap<>();
        bodyMap.add("flatFilePic", new FileSystemResource(MultiPartFileConverter.convert(flatFilePic)));
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(bodyMap, headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);


//            myFirstChanged.setRoomPicture(flatFilePic.getBytes());


        return "redirect:/flats";
    }


    @GetMapping
    public String showFlats() {
        return "flats/showFlats";
    }


    @GetMapping(value = "/allFlats", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getAllFlats() {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity(RestUrls.GET_ALL_FLATS);
        return forEntity.getBody();
    }

    @GetMapping(value = "/addFlat", produces = "text/plain;charset=UTF-8")
    public String addFlat(Model model) {
        model.addAttribute("flatEdited", 0);
        return "flats/addFlat";
    }

    //    FOR MultiPartHTTPServlet https://www.jvt.me/posts/2019/09/08/spring-extract-multipart-request-parameters/
    @PostMapping(value = "/addFlat", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String addFlatPost(Model model, @RequestBody String data) {
        model.addAttribute("flatEdited", 0);
        ResponseEntity<String> stringResponseEntity = BasicRestTemplate.postForEntity(data, RestUrls.ADD_FLAT);

        return new Gson().toJson(stringResponseEntity.getBody());

    }



    @DeleteMapping(value = "/delete/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteFlat(@PathVariable(name = "id") long id) {
        BasicRestTemplate.deleteForEntity(RestUrls.DELETE_FLAT, id);
        return "OK";
    }


    @RequestMapping(value = "/addFlat/{id}")
    public String getFlatById(Model model, @PathVariable(name = "id") long id) {
        return "flats/addFlat";
    }

    @GetMapping(value = "/getRooms/{flatId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getRoomsFromFlat(@PathVariable(name = "flatId") long flatId) {
        return "";
    }

    @PostMapping(value = "/updateRooms/{flatId}", produces = "text/plain;charset=UTF-8")
    public String updateRoomsForFlat(@PathVariable(name = "flatId") long flatId, @RequestBody String data) {
        return new Gson().toJson("OK");
    }


    //    Charts
    @GetMapping(value = "/flatCharts", produces = "text/plain;charset=UTF-8")
    public String showCharts() {
        return "flats/flatCharts";
    }

    @RequestMapping(value = "/showAllRooms/{flatId}", produces = "text/plain;charset=UTF-8")
    public String showAllRoomsForFlat(Model model, @PathVariable(name = "flatId") long flatId) {
//        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity("http://localhost:8081/flats/getFlatById/" + flatId);
        model.addAttribute("flatEdited", flatId);
        return "rooms/showAllRooms";
    }


}

