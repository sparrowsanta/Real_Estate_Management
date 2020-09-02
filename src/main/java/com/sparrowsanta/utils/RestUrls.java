package com.sparrowsanta.utils;

import lombok.Getter;
@Getter
public class RestUrls {
//        private static final String SERVER_URL = "http://realestatemanagementrest-env.eba-u4wqr2f3.eu-central-1.elasticbeanstalk.com/";
    private static final String SERVER_URL = "http://localhost:8081/";

    //Meters and Meters history

    public static final String GET_METERS_BY_FLAT_ID = SERVER_URL + "meters/getAll/";
    public static final String ADD_METER = SERVER_URL + "meters/add";
    public static final String GET_METER_READINGS_BY_METER_ID = SERVER_URL + "meters/history/";
    public static final String GET_METER_READING_BY_READING_ID = SERVER_URL + "meters/reading/";
    public static final String GET_METER_BY_ID = SERVER_URL + "meters/";
    public static final String EDIT_METER_BY_METER_ID = SERVER_URL + "meters/edit/";
    public static final String DELETE_METER_BY_METER_ID = SERVER_URL + "meters/delete/";
    public static final String ADD_METER_READING_BY_METER_ID = SERVER_URL + "meters/reading/add";
    public static final String EDIT_METER_READING_BY_READING_ID = SERVER_URL + "meters/reading/edit/";
    public static final String DELETE_METER_READING_BY_READING_ID = SERVER_URL + "meters/history/delete/";

    public static final String AUTHENTICATE = SERVER_URL + "authenticate";

    //Bills definitions and FlatBills
    public static final String GET_BILLS_DEFINITIONS_BY_FLAT_ID = SERVER_URL + "bills/getAll/";
    public static final String GET_BILL_DEFINITIONS_BY_BILL_DEFINITION_ID = SERVER_URL + "bills/";
    public static final String GET_BILLS_BY_FLAT_ID_AND_FILTER = SERVER_URL + "bills/payment/all/";
    public static final String GET_BILLS_BY_BILL_ID = SERVER_URL + "bills/payment/";
    public static final String ADD_PAYMENT = SERVER_URL + "bills/payment/add";
    public static final String EDIT_PAYMENT = SERVER_URL + "bills/payment/edit/";
    public static final String DELETE_PAYMENT_BY_PAYMENT_ID = SERVER_URL + "bills/payment/delete/";

    //Flats
    private static final String GET_ALL_FLATS = SERVER_URL + "getAllFlats";
    private static final String ADD_FLAT = SERVER_URL + "flats/addFlat";
    //Clients
    private static final String ADD_CLIENT = SERVER_URL + "clients/addClient/";
    private static final String GET_ALL_CLIENTS = SERVER_URL + "clients/showClientsAll/";
    private static final String GET_CLIENT = SERVER_URL + "clients/getClient/";
    private static final String DELETE_CLIENT = SERVER_URL + "clients/deleteClient/";

    public static String getGetAllFlats() {
        return GET_ALL_FLATS;
    }

    public static String getAddFlat() {
        return ADD_FLAT;
    }

    public static String getAddClient() {
        return ADD_CLIENT;
    }

    public static String getGetAllClients() {
        return GET_ALL_CLIENTS;
    }

    public static String getGetClient() {
        return GET_CLIENT;
    }

    public static String getDeleteClient() {
        return DELETE_CLIENT;
    }
}

