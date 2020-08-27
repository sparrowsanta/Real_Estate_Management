package com.sparrowsanta.controllers.bills;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.FlatBills;
import com.sparrowsanta.businessmodel.FlatBillsDefinitions;
import com.sparrowsanta.utils.TestData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping("bills")
public class BillsController {

    @Autowired
    private TestData testData;

    @GetMapping(value = "/getAll/{flatId}", produces = "text/plain;charset=UTF-8")
    public String getBills(@PathVariable(name = "flatId") long flatId) {
        return new Gson().toJson(testData.getFlatBillsDefinitions().stream()
                .filter(bill -> bill.getFlatId() == flatId)
                .collect(Collectors.toList()));
    }

    @GetMapping(value = "/{billId}", produces = "text/plain;charset=UTF-8")
    public String getBillById(@PathVariable(name = "billId") long billId) {
        FlatBillsDefinitions bill = testData.getFlatBillsDefinitions().stream()
                .filter(m -> m.getId() == billId)
                .findFirst()
                .orElse(null);
        return new Gson().toJson(bill);
    }

    @GetMapping(value = "/payment/all/{flatId}/{filter}", produces = "text/plain;charset=UTF-8")
    public String getPaymentByFlatId(@PathVariable(name = "flatId") long flatId,
                                     @PathVariable(name = "filter") String filter) {

        boolean onlyPayed = filter.equals("paid");
        boolean onlyNotPayed = filter.equals("notPaid");
        return new Gson().toJson(testData.getFlatBills().stream().filter(x -> x.getFlatId() == flatId)
                .filter(onlyPayed ? FlatBills::isPaid : x -> true)
                .filter(onlyNotPayed ? x-> !x.isPaid() : x -> true)
                .sorted((x, y) -> y.getPaymentDate().compareTo(x.getPaymentDate()))
                .collect(Collectors.toList()));

//        return new Gson().toJson("Ok");
    }

    @GetMapping(value = "/payment/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String getPaymentByPaymentId(@PathVariable(name = "paymentId") long paymentId) {
//        MetersHistory reading = testData.getMetersHistory().stream()
//                .filter(m -> m.getId() == readingId)
//                .findFirst()
//                .orElse(null);
//
//        return new GsonBuilder()
//                .setDateFormat("MM-dd-yyyy")
//                .create()
//                .toJson(reading);
        return new Gson().toJson("Ok");
    }

    @DeleteMapping(value = "/delete/{billId}", produces = "text/plain;charset=UTF-8")
    public String delBill(@PathVariable(name = "billId") long billId) {
//        testData.deleteMeter(paymentId);
        return new Gson().toJson("Ok");
    }

    @PutMapping(value = "/edit/{billId}", produces = "text/plain;charset=UTF-8")
    public String editBill(@RequestBody String bill) {
//        testData.editMeter(bill);
//        return new Gson().toJson("Ok");
        return new Gson().toJson("Ok");
    }

    @PutMapping(value = "/payment/edit/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String editPayment(@RequestBody String payment) {
//        testData.editReading(payment);
//        return new Gson().toJson("Ok");
        return new Gson().toJson("Ok");
    }

    @PostMapping(value = "/add", produces = "text/plain;charset=UTF-8")
    public String addBill(@RequestBody String bill) {
//        testData.addMeter(bill);
        return new Gson().toJson("Ok");
    }

    @GetMapping(value = "/payment/{billId}", produces = "text/plain;charset=UTF-8")
    public String getBillPayments(@PathVariable(name = "billId") long billId) {

//        return new Gson().toJson(testData.getMetersHistory().stream().filter(x -> x.getMeterId() == billId)
//                .sorted((x, y) -> y.getMeterReadingDate().compareTo(x.getMeterReadingDate()))
//                .collect(Collectors.toList()));
        return new Gson().toJson("Ok");
    }

    @DeleteMapping(value = "/payment/delete/{paymentId}", produces = "text/plain;charset=UTF-8")
    public String delPayment(@PathVariable(name = "paymentId") long paymentId) {
//        testData.deleteMeterReading(paymentId);
        return new Gson().toJson("Ok");
    }

    @PostMapping(value = "/payment/add", produces = "text/plain;charset=UTF-8")
    public String addBillPayment(@RequestBody String payment) {
//        testData.addReading(payment);
        return new Gson().toJson("Ok");
    }
}
