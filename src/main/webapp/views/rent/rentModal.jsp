<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
<div class="container text-center">
    <div class="modal fade " id="modalRent" tabindex="-1" role="dialog" aria-labelledby="modalRent"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-90 w-90" role="document" id="modalDialogRent">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="rent-title" id="myRentLabel"><span><em class="fas fa-people-arrows"> </em></span>
                        <spring:message code="rent.show.rent"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="item" id="rentHistoryForm">
                        <h4><spring:message code="rent.show.history"/></h4>
                        <h4 id="rentHistoryTitle"></h4>

                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: left;  height: 600px">
                            <ul class="timeline" id="rentHistoryList">

                            </ul>
                        </div>
                    </div>
                <div class="modal-footer">

                    <button type="button" class="btn btn-orange" id="btnAssignRent">
                        <em class="fas fa-handshake"></em>
                        <spring:message code="rent.add.header"/></button>
                    <button type="button" class="btn btn-orange" id="btnBackRoomsRentAssign">
                        <em class="fas fa-backward"></em>
                        <spring:message code="common.button.back"/></button>
                </div>
            </div>
        </div>
    </div>
    <div class="toHide">
        <h4 id="infoForIcon" type="hidden" class="mt-2"><spring:message code="flats.show.header.info"/></h4>
        <p class="infoP" id="infoHistoryRentHeader" type="hidden"><spring:message code="rent.show.history"/></p>
        <p class="infoP" id="infoRentDateFrom" type="hidden"><spring:message code="rent.add.rentDateFrom"/></p>
        <p class="infoP" id="infoRentDateTo" type="hidden"><spring:message code="rent.add.rentDateTo"/></p>
        <p class="infoP" id="infoRentAmount" type="hidden"><spring:message code="rent.add.amount"/></p>
        <p class="infoP" id="infoRentClient" type="hidden"><spring:message code="rent.show.client"/></p>

    </div>

</div>

