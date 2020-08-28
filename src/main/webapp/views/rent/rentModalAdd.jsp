<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
<div class="container text-center">
    <div class="modal fade " id="modalRentAdd" tabindex="-1" role="dialog" aria-labelledby="modalRentAdd"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-90 w-90" role="document" id="modalDialogRent">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="rent-title-add" id="myRentLabelAdd"><span><em class="fas fa-handshake"> </em></span>
                        <spring:message code="rent.show.rent"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modalContainerRent" id="assignRentViewModalAdd">
                        <h4><spring:message code="rent.add.details"/></h4>
                        <div class="modalContainerDivRent" id="rentContainerDiv">
                            <form method="post" class="form" id="rentEditForm">
                                <div class="form-row mr-5" id="rentFormRow">

                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-male"></em> <spring:message
                                                    code="rent.add.client"/></span>
                                        </h5>
                                        <select class='form-control js-example-basic' required  name='clients'
                                                aria-hidden="true"
                                                id='clientTypeSelect'></select>
                                        <%--                                           class="form-control btn-dark-blue-outline is-valid">--%>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-calendar-day"></em> <spring:message
                                                    code="rent.add.rentDateFrom"/></span>
                                        </h5>
                                        <div class="custom-file" id="customRentDateFrom">
                                            <input type="date" name="rentDateFrom" id="rentDateFrom" required
                                                   class="form-control btn-dark-blue-outline required">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-calendar-check"></em> <spring:message
                                                    code="rent.add.rentDateTo"/></span>
                                        </h5>
                                        <div class="custom-file" id="customRentDateTo">
                                            <input type="date" name="rentDateTo" id="rentDateTo"
                                                   class="form-control btn-dark-blue-outline">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mr-5" id="rentFormRow2">
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span id="rentSpan2"><em class="fas fa-hand-holding-usd em"></em> <spring:message
                                                    code="rent.add.amount"/></span>
                                        </h5>
                                        <div class="custom-file" id="customRentAmount">
                                            <input type="number" step="1.0" name="rentAmount" id="rentAmount"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-th-large"></em> <spring:message
                                                    code="rent.add.room"/></span>
                                        </h5>
                                        <div class="custom-file" id="customRentRoom">
                                            <input type="text" name="room" id="rentRoom" disabled
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <%--                                    <div class="form-group col-md-4">
                                                                            <h5 class="modalH5">
                                                                                <span><em class="fas fa-city"> </em> <spring:message
                                                                                        code="client.add.city"/></span>
                                                                            </h5>
                                                                            <div class="custom-file" id="customClientCity">
                                                                                <input type="text" step='1.0' name="city" id="city"
                                                                                       class="form-control btn-dark-blue-outline is-valid">
                                                                            </div>
                                                                        </div>--%>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnSaveRent">
                        <em class="fas fa-save"></em>
                        <spring:message code="rent.add.save"/></button>
                    <button type="button" class="btn btn-orange" id="btnBackRoomsRent">
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

