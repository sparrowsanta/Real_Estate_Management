package com.sparrowsanta.utils;

public class RestUrls {
    private static final String SERVER_URL = "http://realestatemanagementrest-env.eba-u4wqr2f3.eu-central-1.elasticbeanstalk.com/";
    private static final String GET_ALL_FLATS = SERVER_URL + "getAllFlats";
    private static final String GET_METERS_BY_FLAT_ID = SERVER_URL + "meters/getAll";
    private static final String ADD_METER = SERVER_URL + "meters/add";
    private static final String GET_METER_READINGS_BY_METER_ID = SERVER_URL + "meters/history";
    private static final String GET_METER_READING_BY_READING_ID = SERVER_URL + "meters/reading/";
    private static final String ADD_METER_READING_BY_METER_ID = SERVER_URL + "meters/reading/add";
    private static final String EDIT_METER_READING_BY_READING_ID = SERVER_URL + "meters/reading/edit";
    private static final String DELETE_METER_READING_BY_READING_ID = SERVER_URL + "meters/history/delete";

    public static String getGetAllFlats() {
        return GET_ALL_FLATS;
    }

    public static String getGetMetersByFlatId() {
        return GET_METERS_BY_FLAT_ID;
    }

    public static String getGetMeterReadingsByMeterId() {
        return GET_METER_READINGS_BY_METER_ID;
    }

    public static String getGetMeterReadingByReadingId() {
        return GET_METER_READING_BY_READING_ID;
    }

    public static String getAddMeterReadingByMeterId() {
        return ADD_METER_READING_BY_METER_ID;
    }

    public static String getEditMeterReadingByReadingId() {
        return EDIT_METER_READING_BY_READING_ID;
    }

    public static String getDeleteMeterReadingByReadingId() {
        return DELETE_METER_READING_BY_READING_ID;
    }

    public static String getAddMeter() {
        return ADD_METER;
    }
}

