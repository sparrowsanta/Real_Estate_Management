package com.sparrowsanta.businessmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.util.Arrays;

@Data
@AllArgsConstructor
public class Room {
    private long id;
    private long flatId;
    private RoomType roomType;
    private String description;
    private int occupable;
    private double roomSquareMeters;
    private double expectedRentPrice;

//Testowy
    public Room(long id, String description, double roomSquareMeters, double expectedRentPrice, RoomType roomType) {
        this.id = id;
        this.roomType = roomType;
        this.description = description;
        this.roomSquareMeters = roomSquareMeters;
        this.expectedRentPrice = expectedRentPrice;
    }
    public Room(long id, String description, double roomSquareMeters, double expectedRentPrice, RoomType roomType, int occupable) {
        this.id = id;
        this.roomType = roomType;
        this.description = description;
        this.roomSquareMeters = roomSquareMeters;
        this.expectedRentPrice = expectedRentPrice;
        this.occupable = occupable;
    }
    public Room(long id, String description, double roomSquareMeters, double expectedRentPrice, RoomType roomType, int occupable, long flatId) {
        this.id = id;
        this.roomType = roomType;
        this.description = description;
        this.roomSquareMeters = roomSquareMeters;
        this.expectedRentPrice = expectedRentPrice;
        this.occupable = occupable;
        this.flatId = flatId;
    }
    public Room(long id, String description, double roomSquareMeters, double expectedRentPrice, RoomType roomType, int occupable, long flatId, byte[] roomPicture) {
        this.id = id;
        this.roomType = roomType;
        this.description = description;
        this.roomSquareMeters = roomSquareMeters;
        this.expectedRentPrice = expectedRentPrice;
        this.occupable = occupable;
        this.flatId = flatId;

    }

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

