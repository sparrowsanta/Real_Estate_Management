<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
<div class="container text-center">
    <div class="modal fade " id="addFurnitureModal" tabindex="-1" role="dialog" aria-labelledby="addFurnitureModal"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-90 w-90" role="document" id="modalDialogFurniture">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="furniture-title" id="myFurnitureLabel"><span><em class="fa fa-couch"> </em></span>
                        <spring:message code="furniture.add.furniture"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modalContainer" id="furniture">
                        <h4><spring:message code="furniture.add.furnitureParameter"/></h4>
                        <div class="modaContainerDiv" id="furnitureContainerDiv">
                            <form method="post" class="form" id="furnitureCreateForm">
                                <div class="form-row mr-5" id="furnitureFormRow">
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span id="furnitureSpan"><em class="fas fa-file-alt em"></em> <spring:message
                                                    code="common.general.description"/></span>
                                        </h5>
                                        <div class="custom-file" id="customFurnitureDescription">
                                            <input type="text" name="furnitureDescription" id="furnitureDescription"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-square"></em> <spring:message code="furniture.show.dateOfPurchase"/></span>
                                        </h5>
                                        <div class="custom-file" id="customDateOfPurchase">
                                            <input type="date" name="dateOfPurchase"
                                                   id="dateOfPurchase"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-dollar-sign"> </em> <spring:message
                                                    code="furniture.show.value"/></span>
                                        </h5>
                                        <div class="custom-file" id="customValue">
                                            <input type="number" step='1.0' placeholder='0.00' name="value"
                                                   id="value"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnAddFurnitureModal">
                        <em class="fas fa-save"></em>
                        <spring:message code="common.button.save"/></button>
                    <button type="button" class="btn btn-orange" id="btnBackFurniture">
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
