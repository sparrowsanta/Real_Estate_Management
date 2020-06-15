package com.sparrowsanta.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainPageController {

    @GetMapping({"/mainpage","/welcome"})
    public String getMainPage(){
        return "mainpage";
    }
}
