package com.sparrowsanta.businessmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.util.Arrays;

@Data
public class Room {
    private long id;
    private long flatId;
    private RoomType roomType;
    private String description;
    private double roomSquareMeters;
    private double expectedPrice;


    @AllArgsConstructor
    @Getter
    public enum RoomType {
        ROOM(1),
        BATHROOM(2),
        TOILET(3),
        KITCHEN(4),
        HALL(5),
        BALCONY(6),
        GARDEN(7),
        GARAGE(8),
        BASEMENT(9);

        int value;

        public static RoomType valueOf(int value) {
            return Arrays.stream(values())
                    .filter(roomType -> roomType.value == value)
                    .findFirst()
                    .orElse(null);
        }
    }

}
