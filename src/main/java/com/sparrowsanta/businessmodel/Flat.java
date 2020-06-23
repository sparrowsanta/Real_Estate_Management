package com.sparrowsanta.businessmodel;

import lombok.*;

import java.util.List;

@Data
public class Flat {
    private long id;
    private String name;
    private String city;
    private String street;
    private String flatNumber;
    private String zipCode;
    private int roomsNumber;
    private List<Room> rooms;
    private int floorNumber;
    private String flatDescription;
    private double flatSquareMeters;
    private int yearOfConstruction;
    private double flatPrice;
    private double expectedIncome;
    private List<Meters> meters;

}
