package com.sparrowsanta.businessmodel;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class Rent {
    private long id;
    private LocalDate rentDateFrom;
    private LocalDate rentDateTo;
    private long rentAmount;
    private Client client;
    private Room room;
}
