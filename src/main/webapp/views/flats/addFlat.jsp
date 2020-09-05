<!DOCTYPE html>
<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
<head>
    <title>Add Flat</title>

    <jsp:include page="/views/util/header.jsp"></jsp:include>
    <jsp:include page="/views/rooms/roomsModal.jsp"></jsp:include>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/flats/addFlat.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/rooms/addRooms.js"></script>

</head>
<body>
<header>

    <%--    <script type="text/javascript" src="${pageContext.request.contextPath}/js/flats.js"></script>--%>

    <%--    <script type="text/javascript" src="${pageContext.request.contextPath}/js/metersModal.js"></script>--%>
</header>
<main>
    <div style="z-index: 1">
        <div class="mainContainer" id="flat">
            <header>
                <h2 class="flats-header"><spring:message code="flats.add.header"/></h2>
            </header>
            <div class="containerDiv"></div>
        </div>
        <div id='alert-success-flat' class="alert alert-success">
            <spring:message code="flat.add.info.success"/>
        </div>
        <div id='alert-success-rooms' class="alert alert-success">
            <spring:message code="rooms.add.info.success"/>
        </div>
        <div class="alert alert-danger">
            <spring:message code="flat.add.info.fail"/>
        </div>
        <div class="form-row" id="rowAddFlatTable">

            <div class="row col-md-12 ml-4" id="dataRoomFeed">
                <table class="table table-striped table-bordered table-md table-hover"
                       id="flatTableAdd">
                    <thead class="thead-own">
                    <tr class="table-ro">
                        <th scope="col"><spring:message code="common.general.hash"/></th>
                        <th scope="col"><spring:message code="common.general.description"/></th>
                        <th scope="col"><spring:message code="rooms.add.roomSQM"/></th>
                        <th scope="col"><spring:message code="common.general.income"/></th>
                        <th scope="col"><spring:message code="rooms.show.all.occupiable"/></th>
                        <th scope="col"><spring:message code="rooms.add.roomType"/></th>
                        <th scope="col"><spring:message code="common.button.delete"/></th>

                    </tr>
                    </thead>
                    <div id="tableDivToFeed">

                    </div>

                </table>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-3 ml-4" id="addRoomBtnDiv">
                <button type="button" id="btnModalRoom" class="btn btn-orange addRoom" value="">
                    <spring:message code="rooms.add.header"/>
                </button>
                <button type="button" id="prevBtn" class="btn btn-orange-outline">
                    <spring:message code="common.button.back"/>
                </button>
            </div>
        </div>
    </div>
    <div style="text-align:center;margin-bottom:40px">
        <span class="step"></span>
        <span class="step"></span>
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
    <p class="infoP" id="infoYearOfConstruction" type="hidden"><spring:message
            code="flats.show.info.yearOfConstruction"/></p>
    <p class="infoP" id="infoFlatSquareMeters" type="hidden"><spring:message
            code="flats.show.info.flatSquareMeters"/></p>
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
    <p class="infoP" id="infoNext" type="hidden"><spring:message code="flats.add.save"/></p>
    <p class="infoP" id="flatToEdit" type="hidden">${flatEdited}</p>
</div>
</body>
</html>
