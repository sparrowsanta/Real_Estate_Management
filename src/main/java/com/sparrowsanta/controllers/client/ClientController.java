package com.sparrowsanta.controllers.client;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Client;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("clients")
public class ClientController {

    private List<Client> clientList = new ArrayList<>();

    public ClientController() {
        Client client = new Client(1L, "Jakub", "Wróbel", 30, "jakubw.rrw@wm.pl", "Krakow", "Zlota", 73893987L);
        Client client2 = new Client(2L, "Marek", "Mikołaczyk", 30, "Mikołaj.rrw@wm.pl", "Zabierzów", "Srebrna", 2323222L);

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
        System.out.println(data);
//        return "forward:RealEstateManagementRest-env.eba-u4wqr2f3.eu-central-1.elasticbeanstalk.com";
        return new Gson().toJson("OK");
    }

    @PutMapping(value = "/addClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String editClient(@PathVariable(name = "id") long id, @RequestBody String data) {
        System.out.println(data);
        return new Gson().toJson("OK");
    }

    @GetMapping(value = "/showClients", produces = "text/plain;charset=UTF-8")
    public String showClients(Model model) {
        return "client/showClients";
    }

    @GetMapping(value = "/showClientsAll", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String showAllClients() {
        return new Gson().toJson(clientList);
    }

    @GetMapping(value = "/getClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getClientById(@PathVariable(name = "id") long id) {
        Client client = clientList.stream()
                .filter(c -> c.getId() == id)
                .findFirst()
                .orElse(null);
        return new Gson().toJson(client);
    }

    @DeleteMapping(value = "/deleteClient/{id}", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String deleteClient(@PathVariable(name = "id") long id) {
        clientList.removeIf(c -> c.getId() == id);
        return new Gson().toJson("Ok");
    }
}
