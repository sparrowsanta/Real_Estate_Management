package com.sparrowsanta.businessmodel;

import lombok.Data;

import java.time.LocalDate;

@Data
public class FlatBillsDefinitions {
    private long id;
    private long flatId;
    private String billDescription;
    private double billAmount;
    private String currency;
    private int billFrequencyInMonths;
    private LocalDate lastPaymentDone;
    private int paymentTillDayOfMonth;
}
