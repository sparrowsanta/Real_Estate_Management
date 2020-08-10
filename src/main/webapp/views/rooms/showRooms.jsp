<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="css/metersHistory.css" type="text/css">
<div class="container text-center">
    <div class="modal fade " id="modalRoomsEdit" tabindex="-1" role="dialog" aria-labelledby="modalRoomsEdit"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-75 w-75" role="document">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="modal-title" id="myModalLabel"><span><em class='fab fa-buromobelexperte'></em></span>
                        <spring:message code="rooms.edit.rooms"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="roomTable">
                        <h4><spring:message code="flats.show.rooms.info"/></h4>
                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: center;  height: 600px">
                            <div class="divForRooms">
                                <div class="row col-md-12 mr-2" id="dataRoomFeedForFlat">
                                    <table class="table table-striped table-bordered table-md table-hover"
                                           id="flatTableAdd">
                                        <thead class="thead-own">
                                        <tr class="table-ro">
                                            <th scope="col"><spring:message code="common.general.hash"/></th>
                                            <th scope="col"><spring:message code="common.general.description"/></th>
                                            <th scope="col"><spring:message code="rooms.add.roomSQM"/></th>
                                            <th scope="col"><spring:message code="common.general.income"/></th>
                                            <th scope="col"><spring:message code="rooms.add.roomType"/></th>
                                            <th scope="col"><spring:message code="common.button.delete"/></th>

                                        </tr>
                                        </thead>
                                        <div id="tableDivToFeed">

                                        </div>

                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnModalRoom">
                        <em class="fas fa-plus"></em>
                        <spring:message code="rooms.add.header"/></button>
                    <button type="button" class="btn btn-orange" id="btnSubmitRoomChange">
                        <em class="fas fa-plus"></em>
                        <spring:message code="common.button.submit"/></button>
                    <button type="button" class="btn btn-orange" id="btnBack">
                        <em class="fas fa-backward"></em>
                        <spring:message code="common.button.back"/></button>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
<div id="meterForms">
    <jsp:include page="../util/deleteConfirm.jsp"/>
    <jsp:include page="../rooms/roomsModal.jsp"/>

</div>
<script type="text/javascript" src="js/flats.js"></script>
<script type="text/javascript" src="js/rooms/addRooms.js"></script>
