<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
<div class="container text-center">
    <div class="modal fade " id="modalRooms" tabindex="-1" role="dialog" aria-labelledby="ModalRoom"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-90 w-90" role="document" id="modalDialogRoom">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="room-title" id="myRoomLabel"><span><em class="fas fa-th-large"> </em></span>
                        <spring:message code="rooms.add.header"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modalContainer" id="room">
                        <h4><spring:message code="rooms.add.roomsParameter"/></h4>
                        <div class="modaContainerDiv" id="roomContainerDiv">
                            <form method="post" class="form" id="roomCreateForm">
                                <div class="form-row mr-5" id="roomFormRow">
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span id="roomSpan"><em class="fas fa-file-alt em"></em> <spring:message
                                                    code="rooms.add.description"/></span>
                                        </h5>
                                        <div class="custom-file" id="customRoomDescription">
                                            <input type="text" name="roomDescription" id="roomDescription"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-square"></em> <spring:message code="rooms.add.sqm"/></span>
                                        </h5>
                                        <div class="custom-file" id="customRoomSquareMeters">
                                            <input type="number" step='0.01' placeholder='0.00' name="roomSquareMeters"
                                                   id="roomSquareMeters"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-dollar-sign"> </em> <spring:message
                                                    code="rooms.add.rentPrice"/></span>
                                        </h5>
                                        <div class="custom-file" id="customExpectedRentPrice">
                                            <input type="number" step='1.0' placeholder='0.00' name="expectedRentPrice"
                                                   id="expectedRentPrice"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mr-5" id="roomFormRow2">
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                                                            <span id="occupiableIdSpan"><em
                                                                                    class="fas fa-map-pin em"></em> <spring:message
                                                                                    code="rooms.show.all.occupiable"/></span>
                                        </h5>
                                        <div class="custom-control form-control-lg custom-checkbox" id="customOccupiable">
                                            <input readonly type="checkbox" name="occupiable" id="roomOccupiable"
                                                   class="form-control custom-control-input">
                                            <label class="custom-control-label ml-3" for="roomOccupiable"><label class="ml-4 mb-0 mt-1"><spring:message code="common.button.yes"></spring:message></label></label>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-border-style"></em> <spring:message
                                                    code="rooms.add.roomType"/></span>
                                        </h5>

                                        <select class='form-control js-example-basic' name='flatType[]'
                                                aria-hidden="true"
                                                id='roomTypeSelect'></select>

                                        <%--                                            class="form-control btn-dark-blue-outline is-valid">--%>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnAddFlat">
                        <em class="fas fa-plus"></em>
                        <spring:message code="rooms.add.header"/></button>
                    <button type="button" class="btn btn-orange" id="btnBackRooms">
                        <em class="fas fa-backward"></em>
                        <spring:message code="common.button.back"/></button>
                </div>
            </div>
        </div>
    </div>

</div>
<div id="roomsDelete">
    <jsp:include page="../util/deleteConfirm.jsp"/>
</div>
<%--<script type="text/javascript" src="js/meters/metersModal.js"></script>--%>