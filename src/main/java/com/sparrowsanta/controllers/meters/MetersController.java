package com.sparrowsanta.controllers.meters;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Meters;
import com.sparrowsanta.utils.TestData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.Comparator;
import java.util.stream.Collectors;

@RestController
@RequestMapping("meters")
public class MetersController {
    @Autowired
    private TestData testData;

    @GetMapping(value = "/getAll/{flatId}", produces = "text/plain;charset=UTF-8")
    public String getMeters(@PathVariable(name = "flatId") long flatId) {
        return new Gson().toJson(testData.getFlatMeters().stream()
        .filter(meter -> meter.getFlatId()==flatId)
        .sorted(Comparator.comparing(Meters::getMeterType))
        .collect(Collectors.toList()));
    }

    @GetMapping(value = "/{meterId}", produces = "text/plain;charset=UTF-8")
    public String getMeterById(@PathVariable(name = "meterId") long meterId) {
        Meters meter = testData.getFlatMeters().stream()
                .filter(m -> m.getId()==meterId)
                .findFirst()
                .orElse(null);
        return new Gson().toJson(meter);
    }

    @DeleteMapping(value = "/delete/{meterId}", produces = "text/plain;charset=UTF-8")
    public String delMeter(@PathVariable(name = "meterId") long meterId) {
        testData.deleteMeter(meterId);
        return new Gson().toJson("Ok");
    }

    @PutMapping(value = "/edit/{meterId}", produces = "text/plain;charset=UTF-8")
    public String editMeter(@RequestBody String meter){
        testData.editMeter(meter);
        return new Gson().toJson("Ok");
    }

    @PostMapping(value = "/add", produces = "text/plain;charset=UTF-8")
    public String addMeter(@RequestBody String meter) {
        testData.addMeter(meter);
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

    @PostMapping(value = "/reading/add", produces = "text/plain;charset=UTF-8")
    public String addMeterReading(@RequestBody String reading) {
        testData.addReading(reading);
        return new Gson().toJson("Ok");
    }



}
