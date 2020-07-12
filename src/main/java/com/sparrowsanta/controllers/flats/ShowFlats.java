package com.sparrowsanta.controllers.flats;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Flat;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.print.attribute.standard.MediaSize;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/flats")
public class ShowFlats {


    public List<Flat> flats = new ArrayList<>();


    @GetMapping
    String showFlats() {
        return "flats/showFlats";
    }

    @GetMapping(value = "/allFlats", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    String getAllFlats(HttpServletRequest request) {

        Flat flat1 = new Flat(1, "Pierwsze", "Kraków", "Złota Podkowa", "5", "31-322", 2, null, 3, "Moje pierwsze mieszkanie",
                34.4, 2010, 305000.00, 2000.0, null, "");
        Flat flat2 = new Flat(3, "Drugie", "Oświęcim", "Stawowa", "1", "11-322", 4, null, 1, "Moje drugie mieszkanie",
                66.1, 2014, 255000.00, 1000.0, null, "");
//        Flat flat3 = new Flat(2, "Trzecie", "Gdańsk", "Olejna", "4", "01-020", 2, null, 10, "Moje trzecie mieszkanie",
//                23.1, 2019, 355000.00, 1500.0, null, "");
        flats.add(flat1);
        flats.add(flat2);
//        flats.add(flat3);
        request.setAttribute("flats", flats);
        return new Gson().toJson(flats);
    }

    @GetMapping(value = "/addFlat", produces = "text/plain;charset=UTF-8")
    public String addFlat(Model model) {
        return "flats/addFlat";
    }

    @PostMapping(value = "/addFlat", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String addFlatPost(Model model, @RequestParam(value = "file") MultipartFile file, @RequestParam(name = "name") String name) throws IOException {
        File convertFile = new File("/home/kuba/JAVA_COURSE/JAVA_1/Real_Estate_Management/src/main/webapp/dump/" + file.getOriginalFilename());
        convertFile.createNewFile();
        FileOutputStream fout = new FileOutputStream(convertFile);
        fout.write(file.getBytes());
        fout.close();
        return "flats/addFlat";

    }
}
