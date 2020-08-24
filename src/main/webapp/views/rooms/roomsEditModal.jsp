<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
<div class="container text-center">
    <div class="modal fade " id="modalEditRooms" tabindex="-1" role="dialog" aria-labelledby="modalEditRooms"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-90 w-90" role="document" id="modalDialogRoom">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="roomEdit-title" id="myRoomEditLabel"><span><em class="fas fa-th-large"> </em></span>
                        <spring:message code="rooms.edit.rooms"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modalContainer" id="room">
                        <h4><spring:message code="rooms.add.roomsParameter"/></h4>
                        <div class="modaContainerDiv" id="roomContainerDiv">
                            <form method="post" class="form" id="roomCreateFormEdit">
                                <div class="form-row mr-5" id="roomFormRow">
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span id="roomSpan"><em class="fas fa-file-alt em"></em> <spring:message
                                                    code="rooms.add.description"/></span>
                                        </h5>
                                        <div class="custom-file" id="customRoomDescription">
                                            <input type="text" name="roomDescription" id="roomDescriptionEdit"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-square"></em> <spring:message code="rooms.add.sqm"/></span>
                                        </h5>
                                        <div class="custom-file" id="customRoomSquareMeters">
                                            <input type="number" step='0.01' placeholder='0.00' name="roomSquareMeters"
                                                   id="roomSquareMetersEdit"
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
                                                   id="expectedRentPriceEdit"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mr-5" id="roomFormRow2">
                                    <%--                                <div class="form-group col-md-4">
                                                                        <h5 class="modalH5">
                                                                            <span id="roomFlatIdSpan"><em class="fas fa-flag em"></em> <spring:message
                                                                                    code="rooms.add.flatId"/></span>
                                                                        </h5>
                                                                        <div class="custom-file" id="customRoomFlatId">
                                                                            <input readonly type="text" name="roomDescription" id="roomFlatId"
                                                                                   value="Flat ID VALUE"
                                                                                   class="form-control btn-dark-blue-outline is-valid">
                                                                        </div>
                                                                    </div>--%>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-border-style"></em> <spring:message
                                                    code="rooms.add.roomType"/></span>
                                        </h5>

                                        <select class='form-control js-example-basic' name='flatType[]'
                                                aria-hidden="true"
                                                id='roomTypeSelectEdit'></select>

                                        <%--                                            class="form-control btn-dark-blue-outline is-valid">--%>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnConfirmFlat">
                        <em class="fas fa-save"></em>
                        <spring:message code="common.button.save"/></button>
                    <button type="button" class="btn btn-orange" id="btnBackRoomsEdit">
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