<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<%--
  Created by IntelliJ IDEA.
  User: kuba
  Date: 24.06.2020
  Time: 17:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Show Flats</title>
</head>
<body>
<header>
    <jsp:include page="/views/header.jsp"></jsp:include>
</header>
<main>
    <div class="mainContainer">
        <header>
            <h2><spring:message code="flats.show.header"/></h2>
        </header>
        <div class="row-border">
            <div class="row">
                <div class="col-sm-3">

                    <figure>
                        <a href="#"><img src="img/flat.jpg" class="img-fluid"></a>
                    </figure>
                </div>
                <div class="col-sm-2">
                    <div class="infoRow">
                        <h4 class="mt-2"><spring:message code="flats.show.header.info"/></h4>
                        <a href="#"><img class="img-thumbnail float-left mr-2" src="img/flat_mini.jpg" width="40" height="40" alt="address"></a><p class="infoP"><spring:message code="flats.show.info.address"/></p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="infoRow">
                        <a href="#"><img class="img-thumbnail float-left mt-6 mr-2" src="img/flat_mini.jpg" width="40" height="40" alt="address"></a><p class="infoP"><spring:message code="flats.show.info.address"/></p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="infoRow">
                        <a href="#"><img class="img-thumbnail float-left mt-6 mr-2" src="img/flat_mini.jpg" width="40" height="40" alt="address"></a><p class="infoP"><spring:message code="flats.show.info.address"/></p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="infoRowThree">
                        <a href="#"><img class="img-thumbnail float-left mr-2" src="img/flat_mini.jpg" width="40" height="40" alt="address"></a><p class="infoP"><spring:message code="flats.show.info.address"/></p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="infoRowThree">
                        <a href="#"><img class="img-thumbnail float-left mr-2" src="img/flat_mini.jpg" width="40" height="40" alt="address"></a><p class="infoP"><spring:message code="flats.show.info.address"/></p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="infoRowThree">
                        <a href="#"><img class="img-thumbnail float-left mr-2" src="img/flat_mini.jpg" width="40" height="40" alt="address"></a><p class="infoP"><spring:message code="flats.show.info.address"/></p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row-border">
            <div class="row">
                <div class="col-sm-3">
                    <figure class="img-fluid">
                        <a href="#"><img src="img/flat.jpg" class="img-fluid"></a>
                    </figure>
                </div>
            </div>
        </div>

    </div>

</main>
<footer>
    <jsp:include page="/views/footer.jsp"></jsp:include>
</footer>
</body>
</html>
