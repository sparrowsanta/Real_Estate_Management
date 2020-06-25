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
</head>
<body>
<header>
    <jsp:include page="/views/header.jsp"></jsp:include>
    <script type="text/javascript" src="js/flats.js"></script>
</header>
<main>
    <div class="mainContainer">
        <header>
            <h2><spring:message code="flats.show.header"/></h2>
        </header>
        <div class="containerDiv">
 <%--           <div class="row-border">
                <div class="row">
                    <div class="col-sm-3 col3">
                    </div>
                    <div class="col-sm-2">
                        <div class="infoRow">
                            &lt;%&ndash;                        <h4 id="infoForIcon" class="mt-2"><spring:message code="flats.show.header.info"/></h4>&ndash;%&gt;
                            <p class="infoP"><spring:message code="flats.show.info.street"/></p>
                        </div>
                        <div class="infoRow2">
                            <p class="infoP"><spring:message code="flats.show.info.zipCode"/></p>
                        </div>
                        <div class="infoRow3">
                            <p class="infoP"><spring:message code="flats.show.info.yearOfConstruction"/></p>
                        </div>
                    </div>--%>

<%--                    <div class="col-sm-2">
                        <div class="infoRowThree1">
                            <p class="infoP"><spring:message code="flats.show.info.flatSquareMeters"/></p>
                        </div>
                        <div class="infoRowThree2">
                            <p class="infoP"><spring:message code="flats.show.info.roomsNumber"/></p>
                        </div>
                        <div class="infoRowThree3">
                            <p class="infoP"><spring:message code="flats.show.info.flatDescription"/></p>
                        </div>
                    </div>
                </div>
            </div>--%>

<%--            <div class="row-border">
                <div class="row">
                    <div class="col-sm-3">
                        <figure class="img-fluid">
                            <a href="#"><img src="img/flat.jpg" class="img-fluid"></a>
                        </figure>
                    </div>
                </div>
            </div>--%>
        </div>
    </div>

</main>
<footer>
    <jsp:include page="/views/footer.jsp"></jsp:include>
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
