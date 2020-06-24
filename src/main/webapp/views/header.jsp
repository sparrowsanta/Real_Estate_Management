<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%--
  Created by IntelliJ IDEA.
  User: kuba
  Date: 24.06.2020
  Time: 12:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Header</title>
    <!--    <link rel="stylesheet" href="../../resources/bootstrap-4.5.0-dist/css/bootstrap.css">
        <link rel="stylesheet" href="webapp/css/main.css">
        <link rel="stylesheet" href="../src/main/resources/gson-2.3.1.jar">-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossorigin="anonymous"></script>

    <link rel="stylesheet" href="css/main.css" type="text/css">

    <script src="js/jquery.js"></script>
    <script src="js/popper.min.js"></script>
</head>
<body>
<header>
    <nav class="navbar navbar-custom  navbar-expand-lg" id="mainNavbar">
        <a class="navbar-brand mx-4 p-0" href="main.html"><img src="img/home-sign.jpg" width="55" height="55"
                                                               class="d-inline-block float-left mr-2 align-bottom p-0"
                                                               alt=""> Real Estate<br>Management
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"
                aria-controls="mainmenu" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainmenu">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="mainpage.jsp">Start</a>
                </li>
                <li class="nav-item dropdown" id="something">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button"
                       aria-expanded="false" id="submenu1" aria-haspopup="true"><spring:message code="homepage.navbar.flats"/></a>
                    <div class="dropdown-menu" aria-labelledby="submenu1">
                        <a class="dropdown-item" href="#"><spring:message code="homepage.navbar.flats.addFlat"/></a>
                        <a class="dropdown-item" href="#"><spring:message code="homepage.navbar.flats.editFlat"/></a>
                    </div>
                </li>
                <li class="nav-item dropdown" id="something2">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button"
                       aria-expanded="false"><spring:message code="homepage.navbar.clients"/></a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><spring:message code="homepage.navbar.clients.addClient"/></a>
                        <a class="dropdown-item" href="#"><spring:message code="homepage.navbar.clients.editClient"/></a>
                    </div>
                </li>
            </ul>
            <form class="form-inline" id="searching">

                <input class="form-control" type="search" id="findBar" placeholder="Search" aria-label="Search">
                <button class="btn btn-custom" id="findBtn" type="submit"><spring:message code="common.general.find"/></button>

            </form>
        </div>
    </nav>
</header>
</body>
</html>
