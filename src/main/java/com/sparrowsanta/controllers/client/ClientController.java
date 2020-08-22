package com.sparrowsanta.controllers.client;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("clients")

public class ClientController {

    @GetMapping("/addClient")
    public String addClient() {
        return "client/addClient";
    }
}
