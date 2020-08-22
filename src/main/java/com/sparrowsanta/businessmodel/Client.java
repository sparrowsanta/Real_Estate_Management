package com.sparrowsanta.businessmodel;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Data
@AllArgsConstructor
public class Client   {
    private Long id;
    private String firstName;
    private String lastName;
    @Min(18)
    private int age;
    @Email
    private String email;
    private String city;
    private String street;
    private Long telNumber;
//    private String flatNumber;

    public Client() {
    }
}
