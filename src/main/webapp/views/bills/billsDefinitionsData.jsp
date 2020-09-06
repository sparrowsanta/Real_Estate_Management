<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<div class="modal fade" id="billsDefinitionsDataModal" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-darker-blue text-white">
                <h4 class="modal-title" id="billsDefinitionsDataTitle"></h4>
                <a class="close" data-dismiss="modal">
                    <span>&times;</span>
                </a>
            </div>
            <form id="billsDefinitionDataForm">
                <div class="modal-body">

                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label class="control-label" for="billDescription"><strong><spring:message code='bills.payment.label.description'/></strong></label>
                            <div class="input-group mb-3">
                                <input class="form-control input-white col-md-11" id="billDescription" type="text"
                                       autocomplete="off"/>
                                <div class="input-group-append" id="billDescriptionAppend">
                                        <span class="input-group-text required-field"
                                              title="<spring:message code='common.tooltip.requiredField'/>">★</span>
                                </div>
                                <div class="alert invalid-feedback bg-dark-blue col-md-11">
                                        <span><strong><em class="fas fa-exclamation-triangle text-orange"></em>
                                             <spring:message code='common.error.field.required'/></strong>
                                        </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label class="control-label" for="billType"><strong><spring:message code='bills.label.filter.incomeType'/></strong></label>
                            <div class="input-group mb-3">
                                <select class="form-control is-valid input-white " style="width: 100%;"
                                        id="billType">
                                    <option value="income" selected="selected"><spring:message
                                            code='bills.payment.label.incomeOutcome.income'/></option>
                                    <option value="outcome"><spring:message
                                            code='bills.payment.label.incomeOutcome.outcome'/></option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label class="control-label" for="billAmount"><strong><spring:message code='bills.payment.label.amount'/></strong></label>
                            <div class="input-group mb-3">
                                <input class="form-control input-white col-md-11" id="billAmount" type="number"
                                       autocomplete="off"/>
                                <div class="input-group-append" id="billAmountAppend">
                                        <span class="input-group-text required-field"
                                              title="<spring:message code='common.tooltip.requiredField'/>">★</span>
                                </div>
                                <div class="alert invalid-feedback bg-dark-blue col-md-11">
                                        <span><strong><em class="fas fa-exclamation-triangle text-orange"></em>
                                             <spring:message code='common.error.field.required'/></strong>
                                        </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label class="control-label" for="billCurrency"><strong><spring:message code='bills.payment.label.currency'/></strong></label>
                            <input class="form-control input-white col-md-11" id="billCurrency" type="text"
                                   autocomplete="off"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label class="control-label" for="billFrequency"><strong><spring:message code='bills.definition.label.frequency'/></strong></label>
                            <div class="input-group mb-3">
                                <input class="form-control input-white col-md-11" id="billFrequency" type="number"
                                       autocomplete="off"/>
                                <div class="input-group-append" id="billFrequencyAppend">
                                        <span class="input-group-text required-field"
                                              title="<spring:message code='common.tooltip.requiredField'/>">★</span>
                                </div>
                                <div class="alert invalid-feedback bg-dark-blue col-md-11">
                                        <span><strong><em class="fas fa-exclamation-triangle text-orange"></em>
                                             <spring:message code='common.error.field.required'/></strong>
                                        </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label class="control-label" for="billPayTill"><strong><spring:message code='bills.definition.label.paymentTill'/></strong></label>
                            <div class="input-group mb-3">
                                <input class="form-control input-white col-md-11" id="billPayTill" type="number"
                                       autocomplete="off"/>
                                <div class="input-group-append" id="billPayTillAppend">
                                        <span class="input-group-text required-field"
                                              title="<spring:message code='common.tooltip.requiredField'/>">★</span>
                                </div>
                                <div class="alert invalid-feedback bg-dark-blue col-md-11">
                                        <span><strong><em class="fas fa-exclamation-triangle text-orange"></em>
                                             <spring:message code='common.error.field.required'/></strong>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnSaveBillDef">
                        <em class="fas fa-save"></em>
                        <spring:message code="common.button.save"/></button>
                </div>
            </form>
        </div>
    </div>
</div>
<input id="billDataTitleEdit" type="hidden"
       value="<spring:message code='bills.header.paymentDefinitionWindow.edit'/>"/>
<input id="billDataTitleNew" type="hidden"
       value="<spring:message code='bills.header.paymentDefinitionWindow.new'/>"/>
<input id="meterTooltipRequiredField" type="hidden" value=""/>
