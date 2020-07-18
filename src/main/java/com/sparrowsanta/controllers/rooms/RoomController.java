package com.sparrowsanta.controllers.rooms;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/rooms")
public class RoomController {

    @RequestMapping
    public String showRooms(){
        return "rooms/showRooms";
    }
}
