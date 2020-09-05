package com.sparrowsanta.businessmodel;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@AllArgsConstructor
public class AjaxRedirect {
    private String message;
    private String redirectUrl;


}
