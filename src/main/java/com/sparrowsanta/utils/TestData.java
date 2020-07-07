package com.sparrowsanta.utils;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.Meters;
import com.sparrowsanta.businessmodel.MetersHistory;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Component
public class TestData {
    private final List<Meters> flatMeters = new ArrayList<>();
    private final List<MetersHistory> metersHistory = new ArrayList<>();
    private int nextMeterId;
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

        metersHistory.add(new MetersHistory(1, 1, LocalDate.now(), 345.0));
        metersHistory.add(new MetersHistory(2, 1, LocalDate.now().minus(Period.ofMonths(5)), 327.11));
        metersHistory.add(new MetersHistory(3, 1, LocalDate.now().minus(Period.ofMonths(7)), 300.0));
        metersHistory.add(new MetersHistory(4, 1, LocalDate.now().minus(Period.ofMonths(12)), 256.43));
        metersHistory.add(new MetersHistory(5, 1, LocalDate.now().minus(Period.ofMonths(18)), 200.41));
        metersHistory.add(new MetersHistory(6, 1, LocalDate.now().minus(Period.ofMonths(24)), 140.0));
        metersHistory.add(new MetersHistory(7, 1, LocalDate.now().minus(Period.ofMonths(31)), 90.54));
        metersHistory.add(new MetersHistory(8, 1, LocalDate.now().minus(Period.ofMonths(36)), 44.0));
        this.nextReadingId = metersHistory.size() + 1;
    }

    public List<Meters> getFlatMeters() {
        return flatMeters;
    }

    public List<MetersHistory> getMetersHistory() {
        return metersHistory;
    }


    public void addReading(String readingString) {
        Gson gson = new Gson();
        MetersHistory reading = gson.fromJson(readingString, MetersHistory.class);
        reading.setId(nextReadingId);
        nextReadingId++;
        metersHistory.add(reading);
    }

    public void editReading(String readingString) {
        Gson gson = new Gson();
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
