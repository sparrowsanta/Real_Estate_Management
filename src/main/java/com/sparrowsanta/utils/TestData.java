package com.sparrowsanta.utils;

import com.google.gson.*;
import com.sparrowsanta.businessmodel.FlatBills;
import com.sparrowsanta.businessmodel.FlatBillsDefinitions;
import com.sparrowsanta.businessmodel.Meters;
import com.sparrowsanta.businessmodel.MetersHistory;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import static java.time.LocalDate.now;

@Component
public class TestData {
    private final List<Meters> flatMeters = new ArrayList<>();
    private final List<MetersHistory> metersHistory = new ArrayList<>();
    private final List<FlatBillsDefinitions> flatBillsDefinitions = new ArrayList<>();
    private final List<FlatBills> flatBills = new ArrayList<>();
    private int nextMeterId;
    private int nextBillId;
    private int nextReadingId;

    private TestData() {
        flatMeters.add(new Meters(1, 1, Meters.MeterType.ELECTRICITY, "Licznik prądu"));
        flatMeters.add(new Meters(2, 1, Meters.MeterType.WATER_COLD, "Licznik - woda zimna"));
        flatMeters.add(new Meters(3, 1, Meters.MeterType.WATER_HOT, "Licznik - woda ciepła"));
        flatMeters.add(new Meters(4, 1, Meters.MeterType.HEATING, "Licznik ciepła - pokój 1"));
        flatMeters.add(new Meters(5, 1, Meters.MeterType.HEATING, "Licznik ciepła - pokój 2"));
        flatMeters.add(new Meters(6, 1, Meters.MeterType.HEATING, "Licznik ciepła - pokój 3"));
        flatMeters.add(new Meters(7, 1, Meters.MeterType.GAS, "Licznik gazu"));
        this.nextMeterId = flatMeters.size() + 1;

        metersHistory.add(new MetersHistory(1, 1, now(), 345.0));
        metersHistory.add(new MetersHistory(2, 1, now().minus(Period.ofMonths(5)), 327.11));
        metersHistory.add(new MetersHistory(3, 1, now().minus(Period.ofMonths(7)), 300.0));
        metersHistory.add(new MetersHistory(4, 1, now().minus(Period.ofMonths(12)), 256.43));
        metersHistory.add(new MetersHistory(5, 1, now().minus(Period.ofMonths(18)), 200.41));
        metersHistory.add(new MetersHistory(6, 1, now().minus(Period.ofMonths(24)), 140.0));
        metersHistory.add(new MetersHistory(7, 1, now().minus(Period.ofMonths(31)), 90.54));
        metersHistory.add(new MetersHistory(8, 1, now().minus(Period.ofMonths(36)), 44.0));
        this.nextReadingId = metersHistory.size() + 1;

        flatBillsDefinitions.add(new FlatBillsDefinitions(1, 1, "Czynsz - spółdzielnia mieszkaniowa", 525.00, "PLN", 1, 5));
        flatBillsDefinitions.add(new FlatBillsDefinitions(2, 1, "Energia - Tauron", 125.00, "PLN", 1, 10));
        flatBillsDefinitions.add(new FlatBillsDefinitions(3, 1, "Internet T-mobile", 80.00, "PLN", 1, 10));
        flatBillsDefinitions.add(new FlatBillsDefinitions(4, 1, "TV - NC+", 95.50, "PLN", 1, 10));

        flatBills.add(new FlatBills(7, 1, 1, 525.00, false, false, "Czynsz - spółdzielnia mieszkaniowa", "PLN", now().plusDays(10)));
        flatBills.add(new FlatBills(6, 1, 1, 525.00, false, false, "Czynsz - spółdzielnia mieszkaniowa", "PLN", now().plusDays(2)));
        flatBills.add(new FlatBills(5, 1, 1, 525.00, false, false, "Czynsz - spółdzielnia mieszkaniowa", "PLN", now().minusDays(4)));
        flatBills.add(new FlatBills(4, 1, 1, 525.00, true, false, "Czynsz - spółdzielnia mieszkaniowa", "PLN", LocalDate.of(2020, 7, 10)));
        flatBills.add(new FlatBills(3, 1, 1, 525.00, true, false, "Czynsz - spółdzielnia mieszkaniowa", "PLN", LocalDate.of(2020, 6, 10)));
        flatBills.add(new FlatBills(2, 1, 1, 525.00, true, false, "Czynsz - spółdzielnia mieszkaniowa", "PLN", LocalDate.of(2020, 5, 7)));
        flatBills.add(new FlatBills(1, 1, 1, 525.00, true, false, "Czynsz - spółdzielnia mieszkaniowa", "PLN", LocalDate.of(2020, 4, 11)));

        flatBills.add(new FlatBills(8, 1, 2, 125.00, false, false, "Energia - Tauron", "PLN", now().plusDays(10)));
        flatBills.add(new FlatBills(9, 1, 2, 125.00, true, false, "Energia - Tauron", "PLN", LocalDate.of(2020, 2, 12)));
        flatBills.add(new FlatBills(10, 1, 2, 125.00, true, false, "Energia - Tauron", "PLN", LocalDate.of(2020, 3, 5)));

        flatBills.add(new FlatBills(11, 1, 3, 80.00, false, false, "Internet T-mobile", "PLN", now().plusDays(4)));
        flatBills.add(new FlatBills(12, 1, 3, 80.00, false, false, "Internet T-mobile", "PLN", now().plusDays(1)));
        flatBills.add(new FlatBills(13, 1, 3, 80.00, false, false, "Internet T-mobile", "PLN", now().minusDays(1)));
        flatBills.add(new FlatBills(14, 1, 3, 80.00, true, false, "Internet T-mobile", "PLN", LocalDate.of(2020, 4, 10)));

    }

    public List<Meters> getFlatMeters() {
        return flatMeters;
    }

    public List<MetersHistory> getMetersHistory() {
        return metersHistory;
    }

    public List<FlatBillsDefinitions> getFlatBillsDefinitions() {
        return flatBillsDefinitions;
    }

    public List<FlatBills> getFlatBills() {
        return flatBills;
    }

    public void addReading(String readingString) {
        Gson gson = new GsonBuilder().registerTypeAdapter(LocalDate.class, new JsonDeserializer<LocalDate>() {
            @Override
            public LocalDate deserialize(JsonElement json, Type type, JsonDeserializationContext jsonDeserializationContext) {
                return LocalDate.parse(json.getAsJsonPrimitive().getAsString());
            }
        }).create();


        MetersHistory reading = gson.fromJson(readingString, MetersHistory.class);
        reading.setId(nextReadingId);
        nextReadingId++;
        metersHistory.add(reading);
    }

    public void editReading(String readingString) {
        Gson gson = new GsonBuilder().registerTypeAdapter(LocalDate.class, new JsonDeserializer<LocalDate>() {
            @Override
            public LocalDate deserialize(JsonElement json, Type type, JsonDeserializationContext jsonDeserializationContext) {
                return LocalDate.parse(json.getAsJsonPrimitive().getAsString());
            }
        }).create();
        MetersHistory reading = gson.fromJson(readingString, MetersHistory.class);
        Iterator<MetersHistory> itr = metersHistory.iterator();
        while (itr.hasNext()) {
            MetersHistory r = itr.next();
            if (r.getId() == reading.getId()) {
                itr.remove();
                metersHistory.add(reading);
                return;
            }
        }
    }

    public void deleteMeterReading(long id) {
        metersHistory.removeIf(reading -> reading.getId() == id);
    }

    public void addMeter(String meter) {
        Gson gson = new Gson();
        Meters meeter = gson.fromJson(meter, Meters.class);
        meeter.setId(nextMeterId);
        nextMeterId++;
        flatMeters.add(meeter);
    }

    public void editMeter(String meterString) {
        Gson gson = new Gson();
        Meters meter = gson.fromJson(meterString, Meters.class);
        Iterator<Meters> itr = flatMeters.iterator();
        while (itr.hasNext()) {
            Meters m = itr.next();
            if (m.getId() == meter.getId()) {
                itr.remove();
                flatMeters.add(meter);
                return;
            }
        }
    }

    public void deleteMeter(long id) {
        flatMeters.removeIf(meter -> meter.getId() == id);
    }

}
