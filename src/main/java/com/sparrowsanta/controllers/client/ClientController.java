package com.sparrowsanta.controllers.client;

import com.google.gson.Gson;
import com.sparrowsanta.utils.BasicRestTemplate;
import com.sparrowsanta.utils.RestUrls;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("clients")
public class ClientController {

    @GetMapping("/addClient")
    public String addClient() {
        return "client/addClient";
    }

    @PostMapping(value = "/addClient", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String saveClient(@RequestBody String data) {
        ResponseEntity<String> jsonTemplate = BasicRestTemplate.postForEntity(data, RestUrls.ADD_CLIENT);
        if (jsonTemplate.getStatusCodeValue() == 200) {
            System.out.println("Request Successful");
        }
        return new Gson().toJson("OK");
    }

    @PutMapping(value = "/addClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String editClient(@PathVariable(name = "id") long id, @RequestBody String data) {
        ResponseEntity<String> jsonTemplate = BasicRestTemplate.postForEntity(data, RestUrls.ADD_CLIENT + id);
        return new Gson().toJson("OK");
    }

    @GetMapping(value = "/showClients", produces = "text/plain;charset=UTF-8")
    public String showClients(Model model) {
        return "client/showClients";
    }

    @GetMapping(value = "/showClientsAll", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String showAllClients() {
        ResponseEntity<String> jsonTemplate = BasicRestTemplate.getForEntity(RestUrls.GET_ALL_CLIENTS);
        if (jsonTemplate.getStatusCodeValue() == 200) {
            System.out.println("Request Successful");
        }
        return jsonTemplate.getBody();
    }

    @GetMapping(value = "/getClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getClientById(@PathVariable(name = "id") long id) {
        ResponseEntity<String> jsonTemplate = BasicRestTemplate.getForEntity(RestUrls.GET_CLIENT + id);
        return jsonTemplate.getBody();
    }

    @DeleteMapping(value = "/deleteClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteClient(@PathVariable(name = "id") long id) {
        BasicRestTemplate.deleteForEntity(RestUrls.DELETE_CLIENT, id);
        return new Gson().toJson("Ok");
    }
}
