<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%--
  Created by IntelliJ IDEA.
  User: kuba
  Date: 24.06.2020
  Time: 17:07
  To change this template use File | Settings | File Templates.
--%>
<html>
<head>
    <title>Show Flats</title>
    <script defer src="css/FA/js/all.js"></script> <!--load all styles -->
    <link href="css/FA/css/all.css" rel="stylesheet"> <!--load all styles -->
</head>
<body>
<header>
    <jsp:include page="/views/util/header.jsp"></jsp:include>
    <script type="text/javascript" src="js/flats.js"></script>
    <script type="text/javascript" src="js/metersModal.js"></script>

</header>
<main>
    <div class="mainContainer">
        <header>
            <h2 class="flats-header"><spring:message code="flats.show.header"/></h2>
        </header>
        <div class="containerDiv">
        </div>
    </div>

</main>
<jsp:include page="../meters/metersModal.jsp"/>
<footer>
    <jsp:include page="/views/util/footer.jsp"></jsp:include>
</footer>

<div class="toHide">
<h4 id="infoForIcon" type="hidden" class="mt-2"><spring:message code="flats.show.header.info"/></h4>
<p class="infoP" id="infoStreet" type="hidden"><spring:message code="flats.show.info.street"/></p>
<p class="infoP" id="infoZipCode" type="hidden"><spring:message code="flats.show.info.zipCode"/></p>
<p class="infoP" id="infoYearOfConstruction" type="hidden"><spring:message
        code="flats.show.info.yearOfConstruction"/></p>
<p class="infoP" id="infoFlatSquareMeters" type="hidden"><spring:message code="flats.show.info.flatSquareMeters"/></p>
<p class="infoP" id="infoRoomsNumber" type="hidden"><spring:message code="flats.show.info.roomsNumber"/></p>
<p class="infoP" id="infoFlatDescription" type="hidden"><spring:message code="flats.show.info.flatDescription"/></p>
</div>
<%--<input id="infoStreet" type="hidden" value="<spring:message code="flats.show.info.street"/>"/>
<input id="infoZipCode" type="hidden" value="<spring:message code="flats.show.info.zipCode"/>"/>
<input id="infoYearOfConstruction" type="hidden" value="<spring:message code="flats.show.info.yearOfConstruction"/>"/>
<input id="infoFlatSquareMeters" type="hidden" value="<spring:message code="flats.show.info.flatSquareMeters"/>"/>
<input id="infoRoomsNumber" type="hidden" value="<spring:message code="flats.show.info.roomsNumber"/>"/>
<input id="infoFlatDescription" type="hidden" value="<spring:message code='common.meterType.undefined'/>"/>
<input id="infoForIcon" class="mt-2" type="hidden" value="<spring:message code="flats.show.header.info"/>"/>--%>
</body>
</html>
