package com.sparrowsanta.businessmodel;

import lombok.Data;

import java.time.LocalDate;

@Data
public class FlatBills {
    private long id;
    private long billDefinitionId;
    private double amount;
    private boolean paid;
    private LocalDate paymentDate;
}
