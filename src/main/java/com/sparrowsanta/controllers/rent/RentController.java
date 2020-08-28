package com.sparrowsanta.controllers.rent;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Client;
import com.sparrowsanta.businessmodel.Rent;
import com.sparrowsanta.businessmodel.Room;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;

import static com.sparrowsanta.businessmodel.Room.RoomType.ROOM;

@Controller
@RequestMapping("rents")
public class RentController {
    private Client client = new Client(1L, "Jakub", "Wróbel", 30, "jakubw.rrw@wm.pl", "Krakow", "Zlota", 73893987L);
    private Room room = new Room(1, "myFirstChanged", 30.20, 1000, ROOM, 1, 1);

    private List<Rent> rents = new ArrayList<>();
    private Rent rent = new Rent(1, LocalDate.now().minus(Period.ofMonths(5)), LocalDate.now().minus(Period.ofMonths(3)), 1000, client, room);

    @PostMapping("/{roomId}")
    @ResponseBody
    public String saveRentForRoom(@PathVariable(name = "roomId") long roomId, @RequestBody String rentDetails) {
        System.out.println("Rent Details: " + rentDetails);
        System.out.println("room ID " + roomId);

        return new Gson().toJson("OK");
    }

    @GetMapping("/rentHistory/{rentId}")
    @ResponseBody
    public String getRentHistoryById(@PathVariable(name = "rentId") long rentId) {
        rents.add(rent);
        Rent rent = rents.stream()
                .filter(r -> r.getId() == rentId)
                .findFirst()
                .orElse(null);

        return new Gson().toJson(rent);
    }

    @PutMapping("/{rentId}")
    @ResponseBody
    public String saveEditedRent(@PathVariable(name = "rentId") long rentId) {
        rents.add(rent);
        Rent rent = rents.stream()
                .filter(r -> r.getId() == rentId)
                .findFirst()
                .orElse(null);

        return new Gson().toJson(rent);
    }
}
