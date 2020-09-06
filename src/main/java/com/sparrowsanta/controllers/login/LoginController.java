package com.sparrowsanta.controllers.login;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.sparrowsanta.businessmodel.User;
import com.sparrowsanta.utils.RestUrls;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Locale;

@Controller
public class LoginController {

    @Autowired
    private MessageSource messageSource;


    @GetMapping({"/", "/login"})
    public String getLoginPage() {
        return "login/login";

    }

    @PostMapping({"/logout"})
    public String logOff(HttpServletResponse servletResponse, HttpSession session) {
        Cookie cookie = new Cookie("token", null);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        session.invalidate();
        servletResponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        servletResponse.setHeader("Pragma", "no-cache");
        servletResponse.setDateHeader("Expires", -1);
        servletResponse.addCookie(cookie);
        return "redirect:/login";
    }


    @PostMapping({"/login"})
    public String authenticateUser(WebRequest request, HttpServletResponse servletResponse, Model model,
                                   @CookieValue("myLangCookie") String langCookie) {
        User user = new User(request.getParameter("username"), request.getParameter("password"));
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        String gson = new Gson().toJson(user);
        HttpEntity<String> authenticationRequest = new HttpEntity<>(gson, headers);
        Locale myLocale;
        switch (langCookie) {
            case "pl":
                myLocale = new Locale("pl");
                break;
            case "en":
                myLocale = new Locale("en");
                break;
            default:
                myLocale = new Locale("en");
        }
        MessageSourceAccessor accessor = new MessageSourceAccessor(messageSource,myLocale);
        try {
            ResponseEntity<?> response = restTemplate.postForEntity(RestUrls.AUTHENTICATE, authenticationRequest, String.class);
            JsonObject jobj = new Gson().fromJson(response.getBody().toString(), JsonObject.class);
            Cookie cookie1 = new Cookie("token", jobj.get("token").getAsString());
            cookie1.setPath("/");
            servletResponse.addCookie(cookie1);
            return "main/mainpage";
        } catch (HttpClientErrorException e) {
            if (e.getMessage().equals("401 null")) {
                model.addAttribute("loginMessage",  accessor.getMessage("login.message.wrong.credentials"));
                return "login/login";
            } else {
                model.addAttribute("loginMessage",  accessor.getMessage("login.message.wrong.something"));
            }
        }
        return "login/login";
    }
}
