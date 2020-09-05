package com.sparrowsanta.controllers.meters;

import com.google.gson.Gson;
import com.sparrowsanta.utils.RestUrls;
import com.sparrowsanta.utils.Templates;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("meters")
public class MetersController {

    @GetMapping(value = "/getAll/{flatId}", produces = "text/plain;charset=UTF-8")
    public String getMeters(@PathVariable(name = "flatId") long flatId, @CookieValue("token") String token,
                            HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.getRequest(token, RestUrls.GET_METERS_BY_FLAT_ID + flatId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @GetMapping(value = "/{meterId}", produces = "text/plain;charset=UTF-8")
    public String getMeterById(@PathVariable(name = "meterId") long meterId, @CookieValue("token") String token,
                               HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {

        String response = Templates.getRequest(token, RestUrls.GET_METER_BY_ID + meterId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }


    @GetMapping(value = "/reading/{readingId}", produces = "text/plain;charset=UTF-8")
    public String getMeterReadingById(@PathVariable(name = "readingId") long readingId, @CookieValue("token") String token,
                                      HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {

        String response = Templates.getRequest(token, RestUrls.GET_METER_READING_BY_READING_ID + readingId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @DeleteMapping(value = "/delete/{meterId}", produces = "text/plain;charset=UTF-8")
    public String delMeter(@PathVariable(name = "meterId") long meterId, @CookieValue("token") String token,
                           HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.delRequest(token, RestUrls.DELETE_METER_BY_METER_ID + meterId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @PutMapping(value = "/edit/{meterId}", produces = "text/plain;charset=UTF-8")
    public String editMeter(@RequestBody String meter, @PathVariable(name = "meterId") long meterId, @CookieValue("token") String token,
                            HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {

        String response = Templates.putRequest(token, RestUrls.EDIT_METER_BY_METER_ID + meterId, meter);
        if (!response.equals("401")) {
            return new Gson().toJson("Ok");
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");

    }

    @PutMapping(value = "/reading/edit/{readingId}", produces = "text/plain;charset=UTF-8")
    public String editMeterReading(@RequestBody String reading, @PathVariable(name = "readingId") long readingId, @CookieValue("token") String token,
                                   HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {

        String response = Templates.putRequest(token, RestUrls.EDIT_METER_READING_BY_READING_ID + readingId, reading);
        if (!response.equals("401")) {
            return new Gson().toJson("Ok");
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @PostMapping(value = "/add", produces = "text/plain;charset=UTF-8")
    public String addMeter(@RequestBody String meter, @CookieValue("token") String token,
                           HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.postRequest(token, RestUrls.ADD_METER, meter);
        if (!response.equals("401")) {
            return new Gson().toJson("Ok");
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");

    }

    @GetMapping(value = "/history/{meterId}", produces = "text/plain;charset=UTF-8")
    public String getMeterHistory(@PathVariable(name = "meterId") long meterId, @CookieValue("token") String token,
                                  HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {

        String response = Templates.getRequest(token, RestUrls.GET_METER_READINGS_BY_METER_ID + meterId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @DeleteMapping(value = "/history/delete/{readingId}", produces = "text/plain;charset=UTF-8")
    public String delMeterReading(@PathVariable(name = "readingId") long readingId, @CookieValue("token") String token,
                                  HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {

        String response = Templates.delRequest(token, RestUrls.DELETE_METER_READING_BY_READING_ID + readingId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @PostMapping(value = "/reading/add", produces = "text/plain;charset=UTF-8")
    public String addMeterReading(@RequestBody String reading, @CookieValue("token") String token,
                                  HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.postRequest(token, RestUrls.ADD_METER_READING_BY_METER_ID, reading);
        if (!response.equals("401")) {
            return new Gson().toJson("Ok");
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");

//        RestTemplate restTemplate = new RestTemplate();
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//        HttpEntity<String> request = new HttpEntity<String>(reading, headers);
//        restTemplate.postForEntity(RestUrls.ADD_METER_READING_BY_METER_ID, request, String.class);
//        return new Gson().toJson("Ok");

    }
}
