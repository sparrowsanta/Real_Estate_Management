package com.sparrowsanta.controllers.flats;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Flat;
import com.sparrowsanta.businessmodel.Room;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.sparrowsanta.businessmodel.Room.RoomType.ROOM;

@Controller
@SessionAttributes("flatEdited")
@RequestMapping("flats")
public class ShowFlats {


    public static final List<Flat> flats = new ArrayList<>();

    //    getMeters(currentFlat);
    @GetMapping
    public String showFlats() {
        return "flats/showFlats";
    }


    private ShowFlats() {
        List<Room> rooms = Arrays.asList(new Room(1,"myFirst", 30.20, 1000, ROOM),
                new Room(2,"mySec", 40.20, 2000, ROOM));
        Flat flat1 = new Flat(1, "Pierwsze", "Kraków", "Złota Podkowa", "5", "31-322", 2, null, 3, "Moje pierwsze mieszkanie",
                34.4, 2010, 305000.00, 2000.0, null, "");
        flat1.setRooms(rooms);

        Flat flat2 = new Flat(3, "Drugie", "Oświęcim", "Stawowa", "1", "11-322", 4, null, 1, "Moje drugie mieszkanie",
                66.1, 2014, 255000.00, 1000.0, null, "");
//      Flat flat3 = new Flat(2, "Trzecie", "Gdańsk", "Olejna", "4", "01-020", 2, null, 10, "Moje trzecie mieszkanie",
//                23.1, 2019, 355000.00, 1500.0, null, "");

        flats.add(flat1);
        flats.add(flat2);
        //flats.add(flat3);
    }

    @GetMapping(value = "/allFlats", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getAllFlats(HttpServletRequest request) {

        request.setAttribute("flats", flats);
        return new Gson().toJson(flats);
    }

    @GetMapping(value = "/addFlat", produces = "text/plain;charset=UTF-8")
    public String addFlat(Model model) {
        model.addAttribute("flatEdited", 0);

        return "flats/addFlat";
    }

    //    FOR MultiPartHTTPServlet https://www.jvt.me/posts/2019/09/08/spring-extract-multipart-request-parameters/
    @PostMapping(value = "/addFlat", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String addFlatPost(Model model, @RequestParam(value = "file") MultipartFile file, MultipartHttpServletRequest mrequest) throws IOException {
        File convertFile = new File("/home/kuba/JAVA_COURSE/JAVA_1/Real_Estate_Management/src/main/webapp/dump/" + file.getOriginalFilename());
        convertFile.createNewFile();
        FileOutputStream fout = new FileOutputStream(convertFile);
        fout.write(file.getBytes());
        fout.close();
//        ALL PARAMETERS FROM FORM instead of Select and File
        Map<String, String[]> parameterMap = mrequest.getParameterMap();
        Map<String, List<String>> collect = parameterMap.entrySet().stream()
                .collect(Collectors.toMap(entry -> entry.getKey(), entry -> Arrays.asList(entry.getValue())));
        /*        for (int i = 0; i < collect.size(); i++) {
            System.out.println(collect.keySet());
        }*/


        Gson gson = new Gson();
        String stringOfRooms = mrequest.getParameter("roomsNumber");
        String[] tableOfRooms = stringOfRooms.split("},\\{");
        String[] tableOfRoomsReplaced = Arrays.stream(tableOfRooms)
                .map(s -> s.replaceAll("(\\[)|(\\])|(\\{)|(\\})", ""))
                .toArray(size -> new String[size]);
        Room room1 = gson.fromJson("{" + tableOfRoomsReplaced[1] + "}", Room.class);
//        room1.setId(3);

        System.out.println(mrequest.getParameter("name"));
        System.out.println(mrequest.getParameter("meters"));


        return "flats/addFlat";

    }


    @DeleteMapping(value = "/delete/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteFlat(@PathVariable(name = "id") long id) {
        System.out.println(id);
        flats.removeIf(s -> s.getId() == id);

        return new Gson().toJson("Ok");
    }


    @RequestMapping(value = "/addFlat/{id}")
    public String getFlatById(Model model, @PathVariable(name = "id") long id) {
        Flat flat = flats.stream()
                .filter(s -> s.getId() == id)
                .findFirst()
                .orElse(null);
        model.addAttribute("flatEdited", new Gson().toJson(flat));
//        new Gson().toJson(flat);"forward:addFlat";
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

    @PutMapping(value = "/updateRooms/{flatId}", produces = "text/plain;charset=UTF-8")
    public String updateRoomsForFlat(@PathVariable(name = "flatId") long flatId, MultipartHttpServletRequest mrequest){
        Flat flat = flats.stream()
                .filter(s -> s.getId() == flatId)
                .findFirst()
                .orElse(null);
        mrequest.getParameter("roomType");
        return "";
    }

}

