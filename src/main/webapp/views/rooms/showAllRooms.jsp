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
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/rooms/showRooms.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/rooms/addRooms.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>

    <title>Show Rooms</title>

</head>
<body>
<header>

</header>
<main>
    <div class="mainContainerRooms">
        <header>
            <h2 class="flats-header"><spring:message code="homepage.navbar.rooms"/></h2>
        </header>
        <div class="containerDivRooms">
        </div>

        <div class="containerDivRoomsNoOccupable">
                <h2 class="flats-header"><spring:message code="rooms.show.all"/></h2>
        </div>
    </div>
    <div class="toHide">
        <h4 id="infoForIcon" type="hidden" class="mt-2"><spring:message code="flats.show.header.info"/></h4>
        <p class="infoP" id="infoRoomType" type="hidden"><spring:message code="rooms.add.roomType"/></p>
        <p class="infoP" id="infoDescription" type="hidden"><spring:message code="common.general.description"/></p>
        <p class="infoP" id="infoRoomSquareMeters" type="hidden"><spring:message code="rooms.add.roomSQM"/></p>
        <p class="infoP" id="infoExpectedRentPrice" type="hidden"><spring:message code="common.general.income"/></p>
        <p class="infoP" id="infoNotOccupable" type="hidden"><spring:message code="rooms.show.all"/></p>
        <p class="infoPs" id="flatToShow" >${flat}</p>
        <p class="infoPs" id="furnitureToShow" >${furnitures}</p>
    </div>
</main>

</body>
<jsp:include page="../rooms/showRooms.jsp"/>
<jsp:include page="../util/deleteConfirm.jsp"/>
<jsp:include page="../furniture/furnitureModal.jsp"/>
<jsp:include page="../furniture/addFurnitureModal.jsp"/>
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
