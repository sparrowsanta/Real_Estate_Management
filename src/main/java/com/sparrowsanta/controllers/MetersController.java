package com.sparrowsanta.controllers;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Meters;
import com.sparrowsanta.businessmodel.MetersHistory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

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

    @GetMapping(value = "/history/{meterId}", produces = "text/plain;charset=UTF-8")
    public String getMeterHistory(@PathVariable(name = "meterId") long meterId) {
        List<MetersHistory> metersHistory = new ArrayList<>();
        metersHistory.add(new MetersHistory(1, 1, LocalDate.now(), 345.0));
        metersHistory.add(new MetersHistory(2, 1, LocalDate.now().minus(Period.ofMonths(5)), 327.11));
        metersHistory.add(new MetersHistory(3, 1, LocalDate.now().minus(Period.ofMonths(7)), 300.0));
        metersHistory.add(new MetersHistory(4, 1, LocalDate.now().minus(Period.ofMonths(12)), 256.43));
        metersHistory.add(new MetersHistory(5, 1, LocalDate.now().minus(Period.ofMonths(18)), 200.41));
        metersHistory.add(new MetersHistory(6, 1, LocalDate.now().minus(Period.ofMonths(24)), 140.0));
        metersHistory.add(new MetersHistory(7, 1, LocalDate.now().minus(Period.ofMonths(31)), 90.54));
        metersHistory.add(new MetersHistory(8, 1, LocalDate.now().minus(Period.ofMonths(36)), 44.0));


        return new Gson().toJson(metersHistory.stream().filter(x -> x.getMeterId() == meterId)
                .sorted((x,y)-> y.getMeterReadingDate().compareTo(x.getMeterReadingDate()))
                .collect(Collectors.toList()));
    }

}
