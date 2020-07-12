<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<head>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
</head>
<div class="modal fade" id="meterDataModal" data-backdrop="static">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header bg-darker-blue text-white">
                <h4 class="modal-title" id="meterDataTitle"></h4>
                <button class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>
            <form id="metersDataForm">
                <div class="modal-body">
                    <div id="userForm">
                        <div class="form-group required">
                            <div class="col-sm-12">
                                <label class="control-label" for="meterType"><strong><spring:message
                                        code='meters.label.meterType'/></strong></label>
                                <div class="input-group mb-3">

                                    <select class="form-control js-example-basic-single is-valid" style="width: 90%;"
                                            id="meterType">
                                        <option></option>
                                    </select>
                                    <div class="input-group-prepend">
                                        <span class="input-group-text required-field"
                                              title="<spring:message code='common.tooltip.requiredField'/>">★</span>
                                    </div>

                                    <div class="alert bg-dark-blue invalid-feedback">
                                        <span><stromg><em class="fas fa-exclamation-triangle text-orange"></em>
                                             <spring:message code='common.error.field.required'/></stromg>
                                        </span>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div class="form-group required">
                            <div class="col-md-12">
                                <label class="control-label" for="meterDescription"><strong><spring:message
                                        code='meters.label.meterDescription'/></strong></label>

                                <input class="form-control" id="meterDescription" type="text" autocomplete="off"
                                       required/>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnSave">
                        <em class="fas fa-save"></em>
                        <spring:message code="common.button.save"/></button>
                </div>
            </form>
        </div>
    </div>
</div>
<input id="meterSelectTypePlaceholder" type="hidden" value="<spring:message code='meters.selectType.placeholder'/>"/>
<input id="meterDataTitleEdit" type="hidden" value="<spring:message code='meters.header.dataWindow.edit'/>"/>
<input id="meterDataTitleNew" type="hidden" value="<spring:message code='meters.header.dataWindow.new'/>"/>
<input id="meterTooltipRequiredField" type="hidden" value="<spring:message code='common.tooltip.requiredField'/>"/>
