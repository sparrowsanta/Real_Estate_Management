package com.sparrowsanta.controllers.bills;

import com.google.gson.Gson;
import com.sparrowsanta.utils.RestUrls;
import com.sparrowsanta.utils.Templates;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("bills")
public class BillsController {


    @GetMapping(value = "/getAll/{flatId}", produces = "text/plain;charset=UTF-8")
    public String getBillsDefinitions(@PathVariable(name = "flatId") long flatId, @CookieValue("token") String token,
                                      HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.getRequest(token, RestUrls.GET_BILLS_DEFINITIONS_BY_FLAT_ID + flatId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @GetMapping(value = "/{billId}", produces = "text/plain;charset=UTF-8")
    public String getBillDefinitionById(@PathVariable(name = "billId") long billId, @CookieValue("token") String token,
                                        HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.getRequest(token, RestUrls.GET_BILL_DEFINITIONS_BY_BILL_DEFINITION_ID + billId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");

    }

    @GetMapping(value = "/payment/all/{flatId}/{paidFilter}/{typeFilter}/{dateFromFilter}/{dateToFilter}", produces = "text/plain;charset=UTF-8")
    public String getPaymentsByFlatId(@PathVariable(name = "flatId") long flatId,
                                      @PathVariable(name = "paidFilter") String paidFilter,
                                      @PathVariable(name = "typeFilter") String typeFilter,
                                      @PathVariable(name = "dateFromFilter") String dateFromFilter,
                                      @PathVariable(name = "dateToFilter") String dateToFilter, @CookieValue("token") String token,
                                      HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {

        String response = Templates.getRequest(token, RestUrls.GET_BILLS_BY_FLAT_ID_AND_FILTER + flatId + "/" + paidFilter
                + "/" + typeFilter + "/" + dateFromFilter + "/" + dateToFilter);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @GetMapping(value = "/payment/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String getPaymentByPaymentId(@PathVariable(name = "paymentId") long paymentId, @CookieValue("token") String token,
                                        HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.getRequest(token, RestUrls.GET_BILLS_BY_BILL_ID + paymentId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");

    }


    @PutMapping(value = "/edit/{billId}", produces = "text/plain;charset=UTF-8")
    public String editBill(@RequestBody String bill, @PathVariable(name = "billId") long billId, @CookieValue("token") String token,
                           HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.putRequest(token, RestUrls.EDIT_BILL + billId, bill);
        if (!response.equals("401")) {
            return new Gson().toJson("Ok");
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }


    @PostMapping(value = "/add", produces = "text/plain;charset=UTF-8")
    public String addBill(@RequestBody String bill, @CookieValue("token") String token,
                          HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.postRequest(token, RestUrls.ADD_BILL_DEFINITION, bill);
        if (!response.equals("401")) {
            return new Gson().toJson("Ok");
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }
//
//    @GetMapping(value = "/payments/{billId}", produces = "text/plain;charset=UTF-8")
//    public String getBillPayments(@PathVariable(name = "billId") long billId) {
//
//        return new Gson().toJson("Ok");
//    }


    @PostMapping(value = "/payment/add", produces = "text/plain;charset=UTF-8")
    public String addBillPayment(@RequestBody String payment, @CookieValue("token") String token,
                                 HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.postRequest(token, RestUrls.ADD_PAYMENT, payment);
        if (!response.equals("401")) {
            return new Gson().toJson("Ok");
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");

    }

    @PutMapping(value = "/payment/edit/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String editPayment(@RequestBody String payment, @PathVariable(name = "paymentId") long paymentId, @CookieValue("token") String token,
                              HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.putRequest(token, RestUrls.EDIT_PAYMENT + paymentId, payment);
        if (!response.equals("401")) {
            return new Gson().toJson("Ok");
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @DeleteMapping(value = "/payment/delete/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String deletePayment(@PathVariable(name = "paymentId") long paymentId, @CookieValue("token") String token,
                                HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.delRequest(token, RestUrls.DELETE_PAYMENT_BY_PAYMENT_ID + paymentId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

    @DeleteMapping(value = "/delete/{billId}", produces = "text/plain;charset=UTF-8")
    public String deletePaymentDef(@PathVariable(name = "billId") long billId, @CookieValue("token") String token,
                                HttpServletResponse servletResponse, HttpServletRequest httpServletRequest) throws IOException {
        String response = Templates.delRequest(token, RestUrls.DELETE_BILL_BY_BILL_ID + billId);
        if (!response.equals("401")) {
            return response;
        } else {
            servletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        }
        return new Gson().toJson("Ok");
    }

}
