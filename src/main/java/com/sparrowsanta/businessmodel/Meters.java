package com.sparrowsanta.businessmodel;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

public class Meters {
    private long id;
    private long flatId;
    private MeterType meterType;
    private String description;


    @AllArgsConstructor
    @Getter
    public enum MeterType {
        ELECTRICITY(1),
        WATER_COLD(2),
        WATER_HOT(3),
        GAS(4),
        HEATING(5);

        int value;

        public static MeterType valueOf(int value) {
            return Arrays.stream(values())
                    .filter(meterType -> meterType.value == value)
                    .findFirst()
                    .orElse(null);
        }
    }

}
