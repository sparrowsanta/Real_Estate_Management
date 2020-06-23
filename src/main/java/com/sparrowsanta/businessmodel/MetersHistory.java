package com.sparrowsanta.businessmodel;

import lombok.Data;

import java.time.LocalDate;

@Data
public class MetersHistory {
    private long id;
    private long meterId;
    private LocalDate meterReadingDate;
    private double readingValue;
}
