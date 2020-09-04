<!DOCTYPE html>
<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
    <title>MainPage</title>
    <!--    <link rel="stylesheet" href="../../resources/bootstrap-4.5.0-dist/css/bootstrap.css">
        <link rel="stylesheet" href="webapp/css/main.css">
        <link rel="stylesheet" href="../src/main/resources/gson-2.3.1.jar">-->
</head>
<body>
<section>
<%--Header--%>
    <header>
        <jsp:include page="/views/util/header.jsp"></jsp:include>
    </header>
</section>
<main>
    <section>
        <div class="chart" >
            <img src="img/logoNo1.png" width="400" height="400" style="display: block; margin: auto;;">
        </div>
    </section>
</main>

<!-- Footer -->
<footer class="page-footer font-small blue">
    <jsp:include page="/views/util/footer.jsp"></jsp:include>
</footer>
</body>
</html>