package com.sparrowsanta.businessmodel;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class FlatBills {
    private long id;
    private long flatId;
    private long billDefinitionId;
    private double amount;
    private boolean paid;
    private boolean income;
    private String description;
    private String currency;
    private LocalDate paymentDate;

}
