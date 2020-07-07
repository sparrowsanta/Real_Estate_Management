package com.sparrowsanta.controllers.tmp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {

    @GetMapping(value = "/test")
    public String testForMeters() {
        return "tmp/test";
    }
}
