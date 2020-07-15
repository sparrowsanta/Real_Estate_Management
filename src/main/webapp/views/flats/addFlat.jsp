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
    <title>Add Flat</title>
    <script defer src="${pageContext.request.contextPath}/css/FA/js/all.js"></script> <!--load all styles -->
    <link href="${pageContext.request.contextPath}/css/FA/css/all.css" rel="stylesheet"> <!--load all styles -->
</head>
<body>
<header>
    <jsp:include page="/views/util/header.jsp"></jsp:include>
    <%--    <script type="text/javascript" src="${pageContext.request.contextPath}/js/flats.js"></script>--%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/addFlat.js"></script>
    <%--    <script type="text/javascript" src="${pageContext.request.contextPath}/js/metersModal.js"></script>--%>
</header>
<main>
    <div class="mainContainer" id="flat">
        <header>
            <h2 class="flats-header"><spring:message code="flats.add.header"/></h2>
        </header>
        <div class="containerDiv"></div>
    </div>
    <div class="alert alert-success">
        File Uploaded Successfully
    </div>
    <div class="alert alert-danger">
        File is not uploaded
    </div>

</main>
<footer>
    <jsp:include page="/views/util/footer.jsp"></jsp:include>
</footer>
<div class="toHide">
    <p class="infoP" id="infoFlatName" type="hidden"><spring:message code="flats.show.info.flatName"/></p>
    <p class="infoP" id="infoChooseFile" type="hidden"><spring:message code="flats.show.info.chooseFile"/></p>
    <p class="infoP" id="infoCity" type="hidden"><spring:message code="flats.show.info.city"/></p>
    <p class="infoP" id="infoStreet" type="hidden"><spring:message code="flats.show.add.street"/></p>
    <p class="infoP" id="infoFlatNumber" type="hidden"><spring:message code="flats.show.info.flatNumber"/></p>
    <p class="infoP" id="infoZipCode" type="hidden"><spring:message code="flats.show.info.zipCode"/></p>
    <p class="infoP" id="infoNumberOfRooms" type="hidden"><spring:message code="flats.show.info.numberOfRooms"/></p>
    <p class="infoP" id="infoFloorNumber" type="hidden"><spring:message code="flats.show.info.floorNumber"/></p>
    <p class="infoP" id="infoPicUrl" type="hidden"><spring:message code="flats.show.info.picUrl"/></p>
    <p class="infoP" id="infoFlatPrice" type="hidden"><spring:message code="flats.show.info.flatPrice"/></p>
    <p class="infoP" id="infoExpectedIncome" type="hidden"><spring:message code="flats.show.info.expectedIncome"/></p>
    <p class="infoP" id="infoListOfMeters" type="hidden"><spring:message code="flats.show.info.listOfMeters"/></p>
    <p class="infoP" id="infoListOfRooms" type="hidden"><spring:message code="flats.show.info.listOfRooms"/></p>
    <p class="infoP" id="infoYearOfConstruction" type="hidden"><spring:message code="flats.show.info.yearOfConstruction"/></p>
    <p class="infoP" id="infoFlatSquareMeters" type="hidden"><spring:message code="flats.show.info.flatSquareMeters"/></p>
    <p class="infoP" id="infoRoomsNumber" type="hidden"><spring:message code="flats.show.info.roomsNumber"/></p>
    <p class="infoP" id="infoFlatDescription" type="hidden"><spring:message code="flats.show.info.flatDescription"/></p>
    <p class="infoP" id="infoCurrency" type="hidden"><spring:message code="common.general.currency"/></p>
    <p class="infoP" id="infoArea" type="hidden"><spring:message code="common.general.area"/></p>
<%--    Missing--%>
    <p class="infoP" id="infoMissingName" type="hidden"><spring:message code="flats.show.missing.name"/></p>
    <p class="infoP" id="infoMissingCity" type="hidden"><spring:message code="flats.show.missing.city"/></p>
    <p class="infoP" id="infoMissingStreet" type="hidden"><spring:message code="flats.show.missing.street"/></p>
    <p class="infoP" id="infoMissingFlatNumber" type="hidden"><spring:message code="flats.show.missing.flatNumber"/></p>
    <p class="infoP" id="infoMissingFoto" type="hidden"><spring:message code="flats.show.missing.foto"/></p>

</div>
</body>
</html>
