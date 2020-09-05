package com.sparrowsanta.controllers.login;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.sparrowsanta.businessmodel.User;
import com.sparrowsanta.utils.RestUrls;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class LoginController {

    //    private String token = "";

    @GetMapping({"/", "/login"})
    public String getLoginPage() {
        return "login/login";

    }


    @PostMapping({"/login"})
    public void authenticateUser(WebRequest request, HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) {
        User user = new User(request.getParameter("username"), request.getParameter("password"));
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        String gson = new Gson().toJson(user);
        HttpEntity<String> authenticationRequest = new HttpEntity<>(gson, headers);

        try {
            ResponseEntity<?> response = restTemplate.postForEntity(RestUrls.AUTHENTICATE, authenticationRequest, String.class);
            JsonObject jobj = new Gson().fromJson(response.getBody().toString(), JsonObject.class);
            Cookie cookie1 = new Cookie("token", jobj.get("token").getAsString());
            cookie1.setPath("/");
            servletResponse.addCookie(cookie1);
            try {
                servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/test");
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (HttpClientErrorException e) {
            if (e.getMessage().equals("401 null")) {
                try {
                    servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");

                } catch (IOException ioException) {
                    ioException.printStackTrace();
                }
            } else {
                System.out.println(e.getMessage());
            }
        }

    }
}
