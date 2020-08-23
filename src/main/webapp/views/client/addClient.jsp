<!DOCTYPE html>
<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
<head>
    <title>Add Client</title>

    <jsp:include page="/views/util/header.jsp"></jsp:include>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/client/addClients.js"></script>

</head>
<body>
<header>
    <%--    <script type="text/javascript" src="${pageContext.request.contextPath}/js/flats.js"></script>--%>
    <%--    <script type="text/javascript" src="${pageContext.request.contextPath}/js/metersModal.js"></script>--%>
</header>
<main>
    <div style="z-index: 1">
        <div class="mainContainerForClient" id="client">
            <header>
                <h2 class="flats-header"><spring:message code="clients.add.header"/></h2>
            </header>
            <div class="form-row" id="rowAddClientTable">
                <div class="form-group col-md-3 firstPage">
                    <h5 class="control-label" for="firstName">
                        <span class="input-group-addon"><em style="vertical-align: middle"
                                                            class="fas fa-dice-one fa-2x em"
                                                            aria-hidden="true"></em></span>
                        <spring:message code="client.add.firstName"/>
                    </h5>
                    <div class="custom-file ml-4">
                        <input type="text" id="firstName" name="firstName" required=""
                               class="form-control btn-dark-blue-outline is-valid"/>
                    </div>
                </div>
                <div class="form-group col-md-3 firstPage">
                    <h5 class="control-label" for="lastName">
                        <span class="input-group-addon"><em style="vertical-align: middle"
                                                            class="fas fa-dice-two fa-2x em"
                                                            aria-hidden="true"></em></span>
                        <spring:message code="client.add.lastName"/>
                    </h5>
                    <div class="custom-file ml-4">
                        <input type="text" id="lastName" name="lastName" required=""
                               class="form-control btn-dark-blue-outline is-valid"/>
                    </div>
                </div>
                <div class="form-group col-md-3 firstPage">
                    <h5 class="control-label" for="age">
                        <span class="input-group-addon"><em style="vertical-align: middle" class="fas fa-male fa-2x em"
                                                            aria-hidden="true"></em></span>
                        <spring:message code="client.add.age"/>
                    </h5>
                    <div class="custom-file ml-4">
                        <input type="number" id="age" step='1' name="age" required=""
                               class="form-control btn-dark-blue-outline is-valid"/>
                    </div>
                </div>
                <div class="form-group col-md-3 firstPage">
                    <h5 class="control-label" for="email">
                        <span class="input-group-addon"><em style="vertical-align: middle"
                                                            class="fas fa-envelope fa-2x em"
                                                            aria-hidden="true"></em></span>
                        <spring:message code="client.add.email"/>
                    </h5>
                    <div class="custom-file ml-4">
                        <input type="email" id="clientEmail" name="clientEmail" required=""
                               class="form-control btn-dark-blue-outline is-valid"/>
                    </div>
                </div>
            </div>
            <div class="form-row" id="rowAddClientTable2">
                <div class="form-group col-md-3 secPage">
                    <h5 class="control-label" for="telNumber">
                        <span class="input-group-addon"><em style="vertical-align: middle"
                                                            class="fas fa-phone fa-2x em"
                                                            aria-hidden="true"></em></span>
                        <spring:message code="client.add.telNumber"/>
                    </h5>
                    <div class="custom-file ml-4">
                        <input type="number" id="telNumber" name="telNumber" required=""
                               class="form-control btn-dark-blue-outline is-valid"/>
                    </div>
                </div>
                <div class="form-group col-md-3 secPage">
                    <h5 class="control-label" for="city">
                        <span class="input-group-addon"><em style="vertical-align: middle" class="fas fa-city fa-2x em"
                                                            aria-hidden="true"></em></span>
                        <spring:message code="client.add.city"/>
                    </h5>
                    <div class="custom-file ml-4">
                        <input type="text" id="city" name="city" required=""
                               class="form-control btn-dark-blue-outline is-valid"/>
                    </div>
                </div>
                <div class="form-group col-md-3">
                    <h5 class="control-label" for="street">
                        <span class="input-group-addon"><em style="vertical-align: middle" class="fas fa-road fa-2x em"
                                                            aria-hidden="true"></em></span>
                        <spring:message code="client.add.street"/>
                    </h5>
                    <div class="custom-file ml-4">
                        <input type="text" id="street" name="street" required=""
                               class="form-control btn-dark-blue-outline is-valid"/>
                    </div>
                </div>
            </div>
            <div class="form-row" id="rowAddClientTable3">
                <div class="form-group col-md-3 thirdPage">
                    <button class="btn btn-orange mt-4 ml-4" type="button" id="btnSubmitClient">Submit</button>
                </div>
            </div>

        </div>
        <div class="alert alert-success ml-4" style="display: none">
            <spring:message code="client.add.info.success"/>
        </div>
        <div class="alert alert-danger" style="display: none">
            <spring:message code="client.add.info.fail"/>
        </div>

    </div>
</main>
<footer>
    <jsp:include page="/views/util/footer.jsp"></jsp:include>
</footer>
<div class="toHide">
    <p class="infoP" id="infoFlatName" type="hidden"><spring:message code="flats.show.info.flatName"/></p>

</div>
</body>
</html>
