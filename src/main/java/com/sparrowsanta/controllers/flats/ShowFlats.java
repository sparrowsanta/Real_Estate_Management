package com.sparrowsanta.controllers.flats;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Flat;
import com.sparrowsanta.businessmodel.Room;
import com.sparrowsanta.utils.BasicRestTemplate;
import com.sparrowsanta.utils.MultiPartFileConverter;
import com.sparrowsanta.utils.RestUrls;
import net.minidev.json.JSONValue;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.boot.Banner;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

import static com.sparrowsanta.businessmodel.Room.RoomType.KITCHEN;
import static com.sparrowsanta.businessmodel.Room.RoomType.ROOM;

@Controller
@SessionAttributes("flatEdited")
@RequestMapping("flats")
public class ShowFlats {


    public static final List<Flat> flats = new ArrayList<>();
    private final Flat flat3 = new Flat(2, "Trzecie", "Gdańsk", "Olejna", "4", "01-020", 2, null, 10, "Moje trzecie mieszkanie", 23.1, 2019, 355000.00, 1500.0, null, "", null);


    @GetMapping("/flatPicture/{id}")
    @ResponseBody
    public String getFlatPictures(Model model, @PathVariable(name = "id") long id) {
        String url = "http://localhost:8081/flats/flatPicture/" + id;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        return new Gson().toJson(response.getBody());
    }

    @PostMapping(value = "/flatPicture/{id}")
    public String postRoomPictures(@RequestParam("flatFilePic") MultipartFile flatFilePic, Model model, @PathVariable(name = "id") Long id) {

        String fileName = StringUtils.cleanPath(flatFilePic.getOriginalFilename());

        String url = "http://localhost:8081/flats/flatPicture/" + id;
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
    public String showFlats(Model model) {
        byte[] file = flats.get(2).getPic();
        String image = "";
        if (file != null && file.length > 0) {
            image = Base64.getEncoder().encodeToString(file);
        }
        model.addAttribute("image", image);

        return "flats/showFlats";
    }


    private ShowFlats() {
        List<Room> rooms = Arrays.asList(new Room(1, "myFirst", 30.20, 1000, ROOM, 1),
                new Room(2, "mySec", 40.20, 2000, ROOM, 1), new Room(3, "Kitchen", 9.20, 0.00, KITCHEN, 0));
        Flat flat1 = new Flat(1, "Pierwsze", "Kraków", "Złota Podkowa", "5", "31-322", 2, null, 3, "Moje pierwsze mieszkanie",
                34.4, 2010, 305000.00, 2000.0, null, "", null);
        flat1.setRooms(rooms);

        Flat flat2 = new Flat(3, "Drugie", "Oświęcim", "Stawowa", "1", "11-322", 4, null, 1, "Moje drugie mieszkanie",
                66.1, 2014, 255000.00, 1000.0, null, "", null);

        flats.add(flat1);
        flats.add(flat2);
        flats.add(flat3);
    }


    @GetMapping(value = "/allFlats", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getAllFlats() {
        ResponseEntity<String> forEntity = BasicRestTemplate.getForEntity("http://localhost:8081/flats/getAllFlats");
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
/*        File convertFile = new File("/home/kuba/JAVA_COURSE/JAVA_1/Real_Estate_Management/src/main/webapp/dump/" + file.getOriginalFilename());
        convertFile.createNewFile();
        FileOutputStream fout = new FileOutputStream(convertFile);
        fout.write(file.getBytes());
        fout.close();*/

/*        byte[] fileToSend = file.getBytes();
        String image = "";
        if (fileToSend != null && fileToSend.length > 0) {
            image = Base64.getEncoder().encodeToString(fileToSend);
        }*/


//        ALL PARAMETERS FROM FORM instead of Select and File

/*        Map<String, String[]> parameterMap = mrequest.getParameterMap();
        Map<String, List<String>> collect = parameterMap.entrySet().stream()
                .collect(Collectors.toMap(entry -> entry.getKey(), entry -> Arrays.asList(entry.getValue())));*/
/*                for (int i = 0; i < collect.size(); i++) {
            System.out.println(collect.keySet());
        }*/

//        restTemplate.postForEntity(RestUrls.getAddFlat(), request, String.class);
//
        System.out.println(data);
        model.addAttribute("flatEdited", 0);
        ResponseEntity<String> stringResponseEntity = BasicRestTemplate.postForEntity(data, "http://localhost:8081/flats/addFlat");

/*        Gson gson = new Gson();
        String stringOfRooms = mrequest.getParameter("roomsNumber");
        String[] tableOfRooms = stringOfRooms.split("},\\{");
        String[] tableOfRoomsReplaced = Arrays.stream(tableOfRooms)
                .map(s -> s.replaceAll("(\\[)|(\\])|(\\{)|(\\})", ""))
                .toArray(size -> new String[size]);
        Room room1 = gson.fromJson("{" + tableOfRoomsReplaced[1] + "}", Room.class);*/
/*        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);


        HttpEntity<Map<String, List<String>>> request2 = new HttpEntity<>(collect, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(RestUrls.getAddFlat(), request2, String.class);*/


        return new Gson().toJson(stringResponseEntity.getBody());

    }

    @PostMapping(value = "/addRoomsForFlat/{flatId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String addRoomForFlats(@PathVariable(name = "flatId") Long flatId, @RequestBody String data) {
        System.out.println(data);
        ResponseEntity<String> stringResponseEntity = BasicRestTemplate.postForEntity(data, "http://localhost:8081/rooms/addRoomsForFlat/" + flatId);

        return new Gson().toJson("OK");
    }


    @DeleteMapping(value = "/delete/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteFlat(@PathVariable(name = "id") long id) {
/*        System.out.println(id);
        flats.removeIf(s -> s.getId() == id);*/
        BasicRestTemplate.deleteForEntity("http://localhost:8081/flats/delete/", id);
        return new Gson().toJson("OK");
    }


    @RequestMapping(value = "/addFlat/{id}")
    public String getFlatById(Model model, @PathVariable(name = "id") long id) {
        Flat flat = flats.stream()
                .filter(s -> s.getId() == id)
                .findFirst()
                .orElse(null);
        model.addAttribute("flatEdited", new Gson().toJson(flat));

        return "flats/addFlat";
    }

    @GetMapping(value = "/getRooms/{flatId}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getRoomsFromFlat(@PathVariable(name = "flatId") long flatId) {
        String s = "";
        Flat flat = flats.stream()
                .filter(d -> d.getId() == flatId)
                .findFirst()
                .orElse(null);
//        new Gson().toJson(flat);"forward:addFlat";
        s = new Gson().toJson(flat.getRooms());
        System.out.println();
        return s;
    }

    @PostMapping(value = "/updateRooms/{flatId}", produces = "text/plain;charset=UTF-8")
    public String updateRoomsForFlat(@PathVariable(name = "flatId") long flatId, @RequestBody String data) {
        Flat flat = flats.stream()
                .filter(s -> s.getId() == flatId)
                .findFirst()
                .orElse(null);
        System.out.println(data);

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

