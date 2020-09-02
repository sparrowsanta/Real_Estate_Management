package com.sparrowsanta.utils;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

public class Templates {
    public static String getRequest(String token, String url) throws HttpClientErrorException {

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        HttpEntity request = new HttpEntity<String>(headers);

        try {
            ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
            return responseEntity.getBody();
        } catch (HttpClientErrorException e) {
            return "401";
        }
    }
}
