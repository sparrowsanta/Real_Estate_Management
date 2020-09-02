package com.sparrowsanta.app;

import com.google.gson.Gson;
import com.sparrowsanta.businessmodel.AjaxRedirect;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
@WebFilter(filterName = "LogUserAgentAndProcessTimeFilter", urlPatterns = {"/*"})
public class SecurityFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        Cookie c = WebUtils.getCookie(httpServletRequest, "token");
        String url = httpServletRequest.getRequestURI();
        if (!(c == null)) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
        } else if (!url.equals("/Real_Estate_Management/") && !url.equals("/Real_Estate_Management/login") && !url.endsWith(".css")
                && !url.endsWith(".jpg") && !url.endsWith(".png")) {
            String requestedWithHeader = httpServletRequest.getHeader("X-Requested-With");
            if ("XMLHttpRequest".equals(requestedWithHeader)) {
                AjaxRedirect ajaxRedirect = new AjaxRedirect("Authentication needed", "/Real_Estate_Management/login");
                StringBuilder sb = new StringBuilder();
                sb.append(new Gson().toJson(ajaxRedirect));
                httpServletResponse.setContentType("text/plain;charset=UTF-8");
                PrintWriter pw = httpServletResponse.getWriter();
                pw.println(sb.toString());
                pw.flush();
                return;
            }
            httpServletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
        } else {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
        }
    }
}

