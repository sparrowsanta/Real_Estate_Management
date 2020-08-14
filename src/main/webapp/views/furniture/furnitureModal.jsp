
<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>


<div class="container text-center">
    <div class="modal fade " id="modalFurniture" tabindex="-1" role="dialog" aria-labelledby="modalFurniture"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-75 w-75" role="document">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="modal-title" id="myModalLabel"><span><em class='fa fa-couch'></em></span>
                        <spring:message code="furniture.show.all"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="furnitureTable">
                        <h4><spring:message code="furniture.show.all"/></h4>
                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: center;  height: 600px">
                            <div class="firForFurniture">
                                <div class="row col-md-12 mr-2" id="dataRoomFeedForFurniture">
                                    <table class="table table-striped table-bordered table-md table-hover"
                                           id="furnitureTableAdd">
                                        <thead class="thead-own" id="furnitureTheadOwn">
                                        <tr class="table-ro">
                                            <th scope="col"><spring:message code="common.general.hash"/></th>
                                            <th scope="col"><spring:message code="common.general.description"/></th>
                                            <th scope="col"><spring:message code="furniture.show.room.id"/></th>
                                            <th scope="col"><spring:message code="furniture.show.dateOfPurchase"/></th>
                                            <th scope="col"><spring:message code="furniture.show.value"/></th>
                                            <th scope="col"><spring:message code="common.button.delete"/></th>

                                        </tr>
                                        </thead>
                                        <div id="tableDivToFeedFurniture">

                                        </div>

                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnModalFurniture">
                        <em class="fas fa-plus"></em>
                        <spring:message code="furniture.add.furniture"/></button>
                    <button type="button" class="btn btn-orange" id="btnSubmitFurnitureChange">
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
</div>


