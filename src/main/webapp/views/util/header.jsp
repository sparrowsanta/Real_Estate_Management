<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<title>Header</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
        src="http://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"
></script>
<script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"
></script>
<script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
        integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"
></script>
<link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossorigin="anonymous"
/>
<script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.3/js/bootstrap-select.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">


<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/default.css" type="text/css">

<script
        src="https://kit.fontawesome.com/86100016c3.js"
        crossorigin="anonymous"
></script>
<%--<script defer src="css/FA/js/all.js"></script>--%>
<%--<link href="css/FA/css/all.css" rel="stylesheet">--%>

<nav class="navbar navbar-custom  navbar-expand-lg" id="mainNavbar">
    <a class="navbar-brand mx-4 p-0" href="${pageContext.request.contextPath}/flats"><img
            src="${pageContext.request.contextPath}/img/FF_White_full_back.png" width="55" height="55"
            class="d-inline-block float-left mr-2 align-bottom p-0"
            alt="">Flat<br>Flats
    </a>
    <button class="navbar-toggler btn-orange" type="button" data-toggle="collapse" data-target="#mainmenu"
            aria-controls="mainmenu" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainmenu">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="${pageContext.request.contextPath}/flats">Start</a>
            </li>
            <li class="nav-item dropdown" id="flatsNav">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button"
                   aria-expanded="false" id="submenu1" aria-haspopup="true"><spring:message code="homepage.navbar.flats"/></a>
                <div class="dropdown-menu" aria-labelledby="submenu1">
                    <a class="dropdown-item" href="${pageContext.request.contextPath}/flats/addFlat"><spring:message code="homepage.navbar.flats.addFlat"/></a>
                    <a class="dropdown-item" href="${pageContext.request.contextPath}/flats/flatCharts"><spring:message code="homepage.navbar.flats.editFlat"/></a>
                    <a class="dropdown-item" href="${pageContext.request.contextPath}/flats"><spring:message code="homepage.navbar.flats.showFlats"/></a>
                </div>
            </li>
            <li class="nav-item dropdown" id="roomsNav">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button"
                   aria-expanded="false"><spring:message code="homepage.navbar.rooms"/></a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="${pageContext.request.contextPath}/rooms/addRoom"><spring:message code="homepage.navbar.rooms.addRoom"/></a>
                    <a class="dropdown-item" href="${pageContext.request.contextPath}/rooms"><spring:message code="homepage.navbar.rooms.showRooms"/></a>
                </div>
            </li>
            <li class="nav-item dropdown" id="clientNav">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button"
                   aria-expanded="false"><spring:message code="homepage.navbar.clients"/></a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="${pageContext.request.contextPath}/clients/addClient"><spring:message code="homepage.navbar.clients.addClient"/></a>
                    <a class="dropdown-item" href="${pageContext.request.contextPath}/clients/showClients"><spring:message code="homepage.navbar.clients.showClients"/></a>
                </div>
            </li>
        </ul>
        <form class="form-inline" id="searching">

            <input class="form-control" type="search" id="findBar" placeholder="Search" aria-label="Search">
            <button class="btn btn-custom" id="findBtn" type="submit"><spring:message code="common.general.find"/></button>

        </form>
    </div>
</nav>

