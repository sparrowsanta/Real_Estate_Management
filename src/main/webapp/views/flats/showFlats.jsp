<!DOCTYPE html>
<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>

    <jsp:include page="/views/util/header.jsp"></jsp:include>

    <script type="text/javascript" src="js/flats.js"></script>


    <title>Show Flats</title>

</head>
<body>
<header>

</header>
<main>
    <div class="mainContainer haveOpenMeterButtons">
        <header>
            <h2 class="flats-header"><spring:message code="flats.show.header"/></h2>
        </header>
        <div class="containerDiv">
        </div>
    </div>
    <div class="toHide">
        <h4 id="infoForIcon" type="hidden" class="mt-2"><spring:message code="flats.show.header.info"/></h4>
        <p class="infoP" id="infoStreet" type="hidden"><spring:message code="flats.show.info.street"/></p>
        <p class="infoP" id="infoZipCode" type="hidden"><spring:message code="flats.show.info.zipCode"/></p>
        <p class="infoP" id="infoYearOfConstruction" type="hidden"><spring:message
                code="flats.show.info.yearOfConstruction"/></p>
        <p class="infoP" id="infoFlatSquareMeters" type="hidden"><spring:message code="flats.show.info.flatSquareMeters"/></p>
        <p class="infoP" id="infoRoomsNumber" type="hidden"><spring:message code="flats.show.info.roomsNumber"/></p>
        <p class="infoP" id="infoFlatDescription" type="hidden"><spring:message code="flats.show.info.flatDescription"/></p>
        <input id="readDeleteMessage" type="hidden" value="<spring:message code='meters.history.delete.message'/>"/>
    </div>
    </div>
</main>

</body>
<jsp:include page="../meters/metersModal.jsp"/>
<jsp:include page="../util/deleteConfirm.jsp"/>
<footer>
    <jsp:include page="/views/util/footer.jsp"></jsp:include>
</footer>


<%--<input id="infoStreet" type="hidden" value="<spring:message code="flats.show.info.street"/>"/>
<input id="infoZipCode" type="hidden" value="<spring:message code="flats.show.info.zipCode"/>"/>
<input id="infoYearOfConstruction" type="hidden" value="<spring:message code="flats.show.info.yearOfConstruction"/>"/>
<input id="infoFlatSquareMeters" type="hidden" value="<spring:message code="flats.show.info.flatSquareMeters"/>"/>
<input id="infoRoomsNumber" type="hidden" value="<spring:message code="flats.show.info.roomsNumber"/>"/>
<input id="infoFlatDescription" type="hidden" value="<spring:message code='common.meterType.undefined'/>"/>
<input id="infoForIcon" class="mt-2" type="hidden" value="<spring:message code="flats.show.header.info"/>"/>--%>

</html>
