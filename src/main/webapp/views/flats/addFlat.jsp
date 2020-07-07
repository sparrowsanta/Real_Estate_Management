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
    <jsp:include page="/views/header.jsp"></jsp:include>
<%--    <script type="text/javascript" src="${pageContext.request.contextPath}/js/flats.js"></script>--%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/addFlat.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/metersModal.js"></script>
</header>
<main>
    <div class="mainContainer" id="flat">
        <header>
            <h2 class="flats-header"><spring:message code="flats.add.header"/></h2>
        </header>
        <div class="containerDiv">
        </div>
    </div>

</main>
<footer>
    <jsp:include page="/views/footer.jsp"></jsp:include>
</footer>
</body>
</html>
