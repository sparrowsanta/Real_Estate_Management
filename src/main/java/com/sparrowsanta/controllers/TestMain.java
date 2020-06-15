package com.sparrowsanta.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestMain {
    @GetMapping("/mainpage")
    public String test(){
        return "mainpage";
    }
}
