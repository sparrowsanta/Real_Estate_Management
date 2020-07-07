<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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


    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/default.css" type="text/css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
<%--    <script src="${pageContext.request.contextPath}/js/jquery.js"></script>--%>
<%--    <script src="${pageContext.request.contextPath}/js/popper.min.js"></script>--%>
</head>
<body>
<header>
    <nav class="navbar navbar-custom  navbar-expand-lg" id="mainNavbar">
        <a class="navbar-brand mx-4 p-0" href="main.html"><img src="${pageContext.request.contextPath}/img/home-sign.jpg" width="55" height="55"
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
                    <a class="nav-link" href="../main/mainpage.jsp">Start</a>
                </li>
                <li class="nav-item dropdown" id="something">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button"
                       aria-expanded="false" id="submenu1" aria-haspopup="true"><spring:message code="homepage.navbar.flats"/></a>
                    <div class="dropdown-menu" aria-labelledby="submenu1">
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/flats/addFlat"><spring:message code="homepage.navbar.flats.addFlat"/></a>
                        <a class="dropdown-item" href="#"><spring:message code="homepage.navbar.flats.editFlat"/></a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/flats"><spring:message code="homepage.navbar.flats.showFlats"/></a>
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
