package com.sparrowsanta.utils;

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

public class BasicRestTemplate {

    public static ResponseEntity<String> postForEntity(String data, String url) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(data, headers);

        return restTemplate.postForEntity(url, request, String.class);
    }

    public static ResponseEntity<String> getForEntity(String url) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        return restTemplate.getForEntity(url, String.class);
    }

    public static void deleteForEntity(String url, Long id) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        restTemplate.delete(url + id);
    }


//POST FOR ENTITY https://attacomsian.com/blog/spring-boot-resttemplate-post-request-json-headers
//    https://www.baeldung.com/spring-boot-json
//    https://springframework.guru/using-resttemplate-in-spring/

}
