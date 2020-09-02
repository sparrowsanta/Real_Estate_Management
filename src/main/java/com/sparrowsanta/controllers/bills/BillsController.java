package com.sparrowsanta.controllers.bills;

import com.google.gson.Gson;
import com.sparrowsanta.utils.RestUrls;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("bills")
public class BillsController {


    @GetMapping(value = "/getAll/{flatId}", produces = "text/plain;charset=UTF-8")
    public String getBillsDefinitions(@PathVariable(name = "flatId") long flatId) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(RestUrls.GET_BILLS_DEFINITIONS_BY_FLAT_ID + flatId, String.class);
    }

    @GetMapping(value = "/{billId}", produces = "text/plain;charset=UTF-8")
    public String getBillDefinitionById(@PathVariable(name = "billId") long billId) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(RestUrls.GET_BILL_DEFINITIONS_BY_BILL_DEFINITION_ID + billId, String.class);
    }

    @GetMapping(value = "/payment/all/{flatId}/{paidFilter}/{typeFilter}/{dateFromFilter}/{dateToFilter}", produces = "text/plain;charset=UTF-8")
    public String getPaymentsByFlatId(@PathVariable(name = "flatId") long flatId,
                                      @PathVariable(name = "paidFilter") String paidFilter,
                                      @PathVariable(name = "typeFilter") String typeFilter,
                                      @PathVariable(name = "dateFromFilter") String dateFromFilter,
                                      @PathVariable(name = "dateToFilter") String dateToFilter) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(RestUrls.GET_BILLS_BY_FLAT_ID_AND_FILTER + flatId + "/" + paidFilter
                + "/" + typeFilter+ "/" + dateFromFilter+ "/" + dateToFilter, String.class);


    }

    @GetMapping(value = "/payment/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String getPaymentByPaymentId(@PathVariable(name = "paymentId") long paymentId) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(RestUrls.GET_BILLS_BY_BILL_ID + paymentId, String.class);

    }

    @DeleteMapping(value = "/delete/{billId}", produces = "text/plain;charset=UTF-8")
    public String delBill(@PathVariable(name = "billId") long billId) {
        return new Gson().toJson("Ok");
    }

    @PutMapping(value = "/edit/{billId}", produces = "text/plain;charset=UTF-8")
    public String editBill(@RequestBody String bill) {
        return new Gson().toJson("Ok");
    }


    @PostMapping(value = "/add", produces = "text/plain;charset=UTF-8")
    public String addBill(@RequestBody String bill) {
        return new Gson().toJson("Ok");
    }
//
//    @GetMapping(value = "/payments/{billId}", produces = "text/plain;charset=UTF-8")
//    public String getBillPayments(@PathVariable(name = "billId") long billId) {
//
//        return new Gson().toJson("Ok");
//    }


    @PostMapping(value = "/payment/add", produces = "text/plain;charset=UTF-8")
    public String addBillPayment(@RequestBody String payment) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(payment, headers);
        restTemplate.postForEntity(RestUrls.ADD_PAYMENT, request, String.class);
        return new Gson().toJson("Ok");

    }

    @PutMapping(value = "/payment/edit/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String editPayment(@RequestBody String payment, @PathVariable(name = "paymentId") long paymentId) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<String>(payment, headers);
        restTemplate.exchange(RestUrls.EDIT_PAYMENT + paymentId, HttpMethod.PUT, request, Void.class);
        return new Gson().toJson("Ok");

    }

    @DeleteMapping(value = "/payment/delete/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String deletePayment(@PathVariable(name = "paymentId") long paymentId) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(RestUrls.DELETE_PAYMENT_BY_PAYMENT_ID + paymentId);
        return new Gson().toJson("Ok");
    }



}
