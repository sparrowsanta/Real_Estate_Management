package com.sparrowsanta.controllers;

import com.google.gson.Gson;
import com.sparrowsanta.utils.TestData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping("meters")
public class MetersController {
    @Autowired
    private TestData testData;

    @GetMapping(value = "/{flatId}", produces = "text/plain;charset=UTF-8")
    public String getMeters(@PathVariable(name = "flatId") long flatId) {
        return new Gson().toJson(testData.getFlatMeters().stream()
        .filter(meter -> meter.getFlatId()==flatId)
        .collect(Collectors.toList()));
    }

    @DeleteMapping(value = "/delete/{meterId}", produces = "text/plain;charset=UTF-8")
    public String delMeter(@PathVariable(name = "meterId") long meterId) {
        testData.deleteMeter(meterId);
        return new Gson().toJson("Ok");
    }

    @GetMapping(value = "/history/{meterId}", produces = "text/plain;charset=UTF-8")
    public String getMeterHistory(@PathVariable(name = "meterId") long meterId) {


        return new Gson().toJson(testData.getMetersHistory().stream().filter(x -> x.getMeterId() == meterId)
                .sorted((x, y) -> y.getMeterReadingDate().compareTo(x.getMeterReadingDate()))
                .collect(Collectors.toList()));
    }

    @DeleteMapping(value = "/history/delete/{readingId}", produces = "text/plain;charset=UTF-8")
    public String delMeterReading(@PathVariable(name = "readingId") long readingId) {
        testData.deleteMeterReading(readingId);
        return new Gson().toJson("Ok");
    }

}
