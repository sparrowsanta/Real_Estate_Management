<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" type="text/css">
<div class="container text-center">
    <div class="modal fade " id="modalClients" tabindex="-1" role="dialog" aria-labelledby="modalClient"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-90 w-90" role="document" id="modalDialogRoom">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="client-title" id="myClientLabel"><span><em class="fas fa-user"> </em></span>
                        <spring:message code="client.edit.header"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modalContainerClient" id="client">
                        <h4><spring:message code="client.edit.details"/></h4>
                        <div class="modaContainerDiv" id="clientContainerDiv">
                            <form method="post" class="form" id="clientEditForm">
                                <div class="form-row mr-5" id="clientFormRow">
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span id="clientSpan"><em class="fas fa-dice-one em"></em> <spring:message
                                                    code="client.add.firstName"/></span>
                                        </h5>
                                        <div class="custom-file" id="customClientFirstName">
                                            <input type="text" name="firstName" id="firstName"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-dice-two"></em> <spring:message
                                                    code="client.add.lastName"/></span>
                                        </h5>
                                        <div class="custom-file" id="customClientLastName">
                                            <input type="text" name="lastName" id="lastName"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-male"> </em> <spring:message
                                                    code="client.add.age"/></span>
                                        </h5>
                                        <div class="custom-file" id="customClientAge">
                                            <input type="number" step='1.0' name="age" id="age"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mr-5" id="clientFormRow2">
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span id="clientSpan2"><em class="fas fa-envelope em"></em> <spring:message
                                                    code="client.add.email"/></span>
                                        </h5>
                                        <div class="custom-file" id="customClientEmail">
                                            <input type="email" name="email" id="email"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-phone"></em> <spring:message
                                                    code="client.add.telNumber"/></span>
                                        </h5>
                                        <div class="custom-file" id="customClientTelNumber">
                                            <input type="number" step="1" name="telNumber" id="telNumber"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span><em class="fas fa-city"> </em> <spring:message
                                                    code="client.add.city"/></span>
                                        </h5>
                                        <div class="custom-file" id="customClientCity">
                                            <input type="text" step='1.0' name="city" id="city"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row mr-5" id="clientFormRow3">
                                    <div class="form-group col-md-4">
                                        <h5 class="modalH5">
                                            <span id="clientSpan3"><em class="fas fa-road  em"></em> <spring:message
                                                    code="client.add.street"/></span>
                                        </h5>
                                        <div class="custom-file" id="customClientStreet">
                                            <input type="text" name="street" id="street"
                                                   class="form-control btn-dark-blue-outline is-valid">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnEditClient">
                        <em class="fas fa-save"></em>
                        <spring:message code="common.button.save"/></button>
                    <button type="button" class="btn btn-orange" id="btnBackClients">
                        <em class="fas fa-backward"></em>
                        <spring:message code="common.button.back"/></button>
                </div>
            </div>
        </div>
    </div>

</div>

<script type="text/javascript" src="../js/client/addClient.js"></script>