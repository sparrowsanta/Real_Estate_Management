package com.sparrowsanta.controllers.client;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Client;
import com.sparrowsanta.utils.BasicRestTemplate;
import com.sparrowsanta.utils.RestUrls;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("clients")
public class ClientController {

    private List<Client> clientList = new ArrayList<>();

    public ClientController() {
        Client client = new Client(1L, "Jakub", "Wróbel", 30, "jakubw.rrw@wm.pl", "Krakow", "Zlota", 73893987L);
        Client client2 = new Client(2L, "Marek", "Mikołajczak", 30, "Mikołaj.rrw@wm.pl", "Zabierzów", "Srebrna", 2323222L);

        clientList.add(client);
        clientList.add(client2);
    }

    @GetMapping("/addClient")
    public String addClient() {
        return "client/addClient";
    }

    @PostMapping(value = "/addClient", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String saveClient(@RequestBody String data) {
        ResponseEntity<String> jsonTemplate = BasicRestTemplate.postForEntity(data, RestUrls.getAddClient());
        if (jsonTemplate.getStatusCodeValue() == 200) {
            System.out.println("Request Successful");
        }
        return new Gson().toJson("OK");
    }

    @PutMapping(value = "/addClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String editClient(@PathVariable(name = "id") long id, @RequestBody String data) {
        ResponseEntity<String> jsonTemplate = BasicRestTemplate.postForEntity(data, RestUrls.getAddClient() + id);
        return new Gson().toJson("OK");
    }

    @GetMapping(value = "/showClients", produces = "text/plain;charset=UTF-8")
    public String showClients(Model model) {
        return "client/showClients";
    }

    @GetMapping(value = "/showClientsAll", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String showAllClients() {
        ResponseEntity<String> jsonTemplate = BasicRestTemplate.getForEntity(RestUrls.getGetAllClients());
        if (jsonTemplate.getStatusCodeValue() == 200) {
            System.out.println("Request Successful");
        }
        return jsonTemplate.getBody();
    }

    @GetMapping(value = "/getClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getClientById(@PathVariable(name = "id") long id) {
        ResponseEntity<String> jsonTemplate = BasicRestTemplate.getForEntity(RestUrls.getGetClient() + id);
        return jsonTemplate.getBody();
    }

    @DeleteMapping(value = "/deleteClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteClient(@PathVariable(name = "id") long id) {
        BasicRestTemplate.deleteForEntity(RestUrls.getDeleteClient(), id);
        return new Gson().toJson("Ok");
    }
}
