<!DOCTYPE html>
<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script
            src="http://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
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
    <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="css/default.css" type="text/css">
    <script defer src="css/FA/js/all.js"></script> <!--load all styles -->
    <link href="css/FA/css/all.css" rel="stylesheet"> <!--load all styles -->
    <title>Real Estate Management</title>
</head>
<body>

<button type="button" id="btnModalMeters" class="btn btn-orange btn-lg OpenMeters" value="1">
    <spring:message code="meters.button.view.meters"/> Flat 1
</button>
<button type="button" id="btnModalMeters2" class="btn btn-orange btn-lg OpenMeters" value="2">
    <spring:message code="meters.button.view.meters"/> Flat 2
</button>
<br><br><br>

<button type="button" class="btn btn-orange-outline">
Test button outline
</button>
</body>
<jsp:include page="metersModal.jsp"/>
<footer class="page-footer font-small blue">
    <jsp:include page="/views/footer.jsp"></jsp:include>
</footer>
</html>
