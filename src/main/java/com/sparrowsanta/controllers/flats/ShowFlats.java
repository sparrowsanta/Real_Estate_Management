package com.sparrowsanta.controllers.flats;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Flat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/flats")
public class ShowFlats {

    @GetMapping
    String showFlats() {
        return "flats/showFlats";
    }

    @GetMapping(value = "/allFlats", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    String getAllFlats(HttpServletRequest request) {
        List<Flat> flats = new ArrayList<>();
        Flat flat1 = new Flat(1, "Pierwsze", "Kraków", "Złota Podkowa", "5", "31-322", 2, null, 3, "Moje pierwsze mieszkanie",
                34.4, 2010, 305000.00, 2000.0, null, "");
        Flat flat2 = new Flat(3, "Drugie", "Oświęcim", "Stawowa", "1", "11-322", 4, null, 1, "Moje drugie mieszkanie",
                66.1, 2014, 255000.00, 1000.0, null, "");
        Flat flat3 = new Flat(2, "Trzecie", "Gdańsk", "Olejna", "4", "01-020", 2, null, 10, "Moje trzecie mieszkanie",
                23.1, 2019, 355000.00, 1500.0, null, "");
        flats.add(flat1);
        flats.add(flat2);
//        flats.add(flat3);
        request.setAttribute("flats", flats);
        return new Gson().toJson(flats);
    }

    @GetMapping(value = "/addFlat", produces = "text/plain;charset=UTF-8")
    public String addFlat() {
        return "flats/addFlat";
    }

    @PostMapping(value = "/addFlat", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String addFlatPost() {
        return "flats/addFlat";
    }

}
