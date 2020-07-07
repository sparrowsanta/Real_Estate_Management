<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<div class="modal fade" id="meterReadingDataModal" data-backdrop="static">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header bg-darker-blue text-white">
                <h4 class="modal-title" id="meterReadingDataTitle"></h4>
                <button class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>
            <form id="metersReadingDataForm">
                <div class="modal-body">
                    <div id="userForm">
                        <div class="form-group">
                            <div class="col-sm-12">
                                <label class="control-label" for="readingDate"><strong><spring:message
                                        code='meters.label.readingDate'/></strong></label>

                                <div class="input-group mb-3">

                                    <input class="form-control" id="readingDate" type="date" autocomplete="off"/>
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
                        <div class="form-group">
                            <div class="col-md-12">
                                <label class="control-label" for="readingValue"><strong><spring:message
                                        code='meters.label.readingValue'/></strong></label>
                                <div class="input-group mb-3">

                                    <input class="form-control" id="readingValue" type="number" autocomplete="off"/>
                                    <div class="input-group-prepend">
                                        <span class="input-group-text required-field"
                                              title="<spring:message code='common.tooltip.requiredField'/>">★</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnSaveReading">
                        <em class="fas fa-save"></em>
                        <spring:message code="common.button.save"/></button>
                </div>
            </form>
        </div>
    </div>
</div>
<input id="meterReadingDataTitleEdit" type="hidden"
       value="<spring:message code='meters.header.readingDataWindow.edit'/>"/>
<input id="meterReadingDataTitleNew" type="hidden"
       value="<spring:message code='meters.header.readingDataWindow.new'/>"/>
<input id="meterTooltipRequiredField" type="hidden" value=""/>
