package com.sparrowsanta.controllers;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Meters;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("getmeters")
public class MetersController {


    @GetMapping(value = "/{flatId}", produces = "text/plain;charset=UTF-8")
    public String getMeters(@PathVariable(name = "flatId") long flatId) {
        List<Meters> flatMeters = new ArrayList<>();

        flatMeters.add(new Meters(1, 1, Meters.MeterType.ELECTRICITY, "Licznik prądu"));
        flatMeters.add(new Meters(2, 1, Meters.MeterType.WATER_COLD, "Licznik - woda zimna"));
        flatMeters.add(new Meters(3, 1, Meters.MeterType.WATER_HOT, "Licznik - woda ciepła"));
        flatMeters.add(new Meters(4, 1, Meters.MeterType.HEATING, "Licznik ciepła - pokój 1"));
        flatMeters.add(new Meters(5, 1, Meters.MeterType.HEATING, "Licznik ciepła - pokój 2"));
        flatMeters.add(new Meters(6, 1, Meters.MeterType.HEATING, "Licznik ciepła - pokój 3"));
        flatMeters.add(new Meters(7, 1, Meters.MeterType.GAS, "Licznik gazu"));
        return new Gson().toJson(flatMeters);
    }

}
