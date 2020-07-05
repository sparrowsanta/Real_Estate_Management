package com.sparrowsanta.businessmodel;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class MetersHistory {
    private long id;
    private long meterId;
    private LocalDate meterReadingDate;
    private double readingValue;
}
