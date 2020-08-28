package com.sparrowsanta.controllers.meters;

import com.google.gson.Gson;
import com.sparrowsanta.utils.RestUrls;
import com.sparrowsanta.utils.TestData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("meters")
public class MetersController {
    @Autowired
    private TestData testData;

    @GetMapping(value = "/getAll/{flatId}", produces = "text/plain;charset=UTF-8")
    public String getMeters(@PathVariable(name = "flatId") long flatId) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(RestUrls.getGetMetersByFlatId() + flatId, String.class);
    }

    @GetMapping(value = "/{meterId}", produces = "text/plain;charset=UTF-8")
    public String getMeterById(@PathVariable(name = "meterId") long meterId) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(RestUrls.getGetMeterById() + meterId, String.class);
    }

    @GetMapping(value = "/reading/{readingId}", produces = "text/plain;charset=UTF-8")
    public String getMeterReadingById(@PathVariable(name = "readingId") long readingId) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(RestUrls.getGetMeterReadingByReadingId() + readingId, String.class);
    }

    @DeleteMapping(value = "/delete/{meterId}", produces = "text/plain;charset=UTF-8")
    public String delMeter(@PathVariable(name = "meterId") long meterId) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(RestUrls.getDeleteMeterByMeterId()+meterId);
        return new Gson().toJson("Ok");
    }

    @PutMapping(value = "/edit/{meterId}", produces = "text/plain;charset=UTF-8")
    public String editMeter(@RequestBody String meter, @PathVariable(name = "meterId") long meterId) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(meter, headers);
        restTemplate.exchange(RestUrls.getEditMeterByMeterId() + meterId, HttpMethod.PUT, request, Void.class);
        return new Gson().toJson("Ok");
    }

    @PutMapping(value = "/reading/edit/{readingId}", produces = "text/plain;charset=UTF-8")
    public String editMeterReading(@RequestBody String reading, @PathVariable(name = "readingId") long readingId) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(reading, headers);
        restTemplate.exchange(RestUrls.getEditMeterReadingByReadingId() + readingId, HttpMethod.PUT, request, Void.class);
        return new Gson().toJson("Ok");
    }

    @PostMapping(value = "/add", produces = "text/plain;charset=UTF-8")
    public String addMeter(@RequestBody String meter) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(meter, headers);
        restTemplate.postForEntity(RestUrls.getAddMeter(), request, String.class);
        return new Gson().toJson("Ok");
    }

    @GetMapping(value = "/history/{meterId}", produces = "text/plain;charset=UTF-8")
    public String getMeterHistory(@PathVariable(name = "meterId") long meterId) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(RestUrls.getGetMeterReadingsByMeterId() + meterId, String.class);
    }

    @DeleteMapping(value = "/history/delete/{readingId}", produces = "text/plain;charset=UTF-8")
    public String delMeterReading(@PathVariable(name = "readingId") long readingId) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(RestUrls.getDeleteMeterReadingByReadingId()+readingId);
        return new Gson().toJson("Ok");
    }

    @PostMapping(value = "/reading/add", produces = "text/plain;charset=UTF-8")
    public String addMeterReading(@RequestBody String reading) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(reading, headers);
        restTemplate.postForEntity(RestUrls.getAddMeterReadingByMeterId(), request, String.class);
        return new Gson().toJson("Ok");

    }
}
