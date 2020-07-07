package com.sparrowsanta.controllers.login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @GetMapping({"/", "/login"})
    public String login() {
        logger.info("Test loggera");
        logger.error("Test loggera file");
        return "login/login";

    }
}
