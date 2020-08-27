package com.sparrowsanta.businessmodel;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class FlatBillsDefinitions {
    private long id;
    private long flatId;
    private String billDescription;
    private double billAmount;
    private String currency;
    private int billFrequencyInMonths;
    private int paymentTillDayOfMonth;

}
