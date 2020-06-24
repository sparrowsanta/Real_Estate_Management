package com.sparrowsanta.controllers.flats;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/flats")
public class ShowFlats {

    @GetMapping
    String showFlats() {
        return "flats/showFlats";
    }
}
