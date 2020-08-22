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
    <jsp:include page="/views/client/clientsModal.jsp"></jsp:include>

    <script type="text/javascript" src="${pageContext.request.contextPath}/js/client/showClients.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>

    <title>Show Clients</title>

</head>
<body>
<header>
</header>
<main>

    <div class="mainContainerClients">
        <header>
            <h2 class="client-header"><spring:message code="client.show.header"/></h2>
        </header>
        <div class="containerDivClients">
            <div class="form-row" id="rowShowClientsTable">

                <div class="row col-md-12 ml-4" id="dataClientsFeed">
                    <table class="table table-striped table-bordered table-md table-hover"
                           id="clientTableAdd">
                        <thead class="thead-own">
                        <tr class="table-ro" id="headersClientsShow">
                            <th scope="col"><spring:message code="common.general.hash"/></th>
                            <th scope="col"><spring:message code="client.add.firstName"/></th>
                            <th scope="col"><spring:message code="client.add.lastName"/></th>
                            <th scope="col"><spring:message code="client.add.age"/></th>
                            <th scope="col"><spring:message code="client.add.email"/></th>
                            <th scope="col"><spring:message code="client.add.telNumber"/></th>
                            <th scope="col"><spring:message code="client.add.city"/></th>
                            <th scope="col"><spring:message code="client.add.street"/></th>
                            <th scope="col"><spring:message code="client.show.edit"/></th>
                        </tr>
                        </thead>
                        <div id="tableDivToFeedClients">

                        </div>

                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="toHide">
        <h4 id="infoForIcon" type="hidden" class="mt-2"><spring:message code="flats.show.header.info"/></h4>
        <p class="infoP" id="infoStreet" type="hidden"><spring:message code="flats.show.info.street"/></p>
        <p class="infoP" id="infoZipCode" type="hidden"><spring:message code="flats.show.info.zipCode"/></p>
    </div>
    </div>
</main>

</body>
<jsp:include page="../util/deleteConfirm.jsp"/>
<footer>
    <jsp:include page="/views/util/footer.jsp"></jsp:include>
</footer>
</html>
