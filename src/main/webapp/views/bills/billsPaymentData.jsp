<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<div class="modal fade" id="billsPaymentDataModal" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-darker-blue text-white">
                <h4 class="modal-title" id="billsPaymentDataTitle"></h4>
                <a class="close" data-dismiss="modal">
                    <span>&times;</span>
                </a>
            </div>
            <form id="billsPaymentDataForm">
                <div class="modal-body">


                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label class="control-label" for="paymentDate"><strong><spring:message
                                    code='bills.payment.label.paymentDate'/></strong></label>
                            <div class="input-group mb-3">

                                <input class="form-control input-white col-md-11" id="paymentDate" type="date"
                                       autocomplete="off"/>
                                <div class="input-group-append">
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
                            <label class="control-label" for="paymentDescription"><strong><spring:message
                                    code='bills.payment.label.description'/></strong></label>
                            <div class="input-group mb-3">
                                <input class="form-control input-white col-md-11" id="paymentDescription" type="text"
                                       autocomplete="off"/>
                                <div class="input-group-append" id="paymentDescriptionAppend">
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


                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label class="control-label" for="paymentAmount"><strong><spring:message
                                    code='bills.payment.label.amount'/></strong></label>
                            <div class="input-group mb-3">
                                <input class="form-control input-white col-md-11" id="paymentAmount" type="number"
                                       autocomplete="off"/>
                                <div class="input-group-append" id="paymentAmountAppend">
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
                            <label class="control-label" for="paymentCurrency"><strong><spring:message
                                code='bills.payment.label.currency'/></strong></label>
                            <input class="form-control input-white col-md-11" id="paymentCurrency" type="text"
                                   autocomplete="off"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label class="control-label" for="paymentType"><strong><spring:message
                                    code='bills.payment.label.incomeOutcome'/></strong></label>
                            <div class="input-group mb-3">
                                <select class="form-control is-valid input-white " style="width: 100%;"
                                        id="paymentType">
                                    <option value="income" selected="selected"><spring:message
                                            code='bills.payment.label.incomeOutcome.income'/></option>
                                    <option value="outcome"><spring:message
                                            code='bills.payment.label.incomeOutcome.outcome'/></option>

                                </select>
                            </div>
                        </div>

                        <div class="col-sm-6">

                            <div class="custom-control custom-checkbox pmd-checkbox mt-4 pt-2">
                                <input id="paymentPaid" name="paymentPaid" type="checkbox"
                                       class="form-control input-white col-md-11 custom-control-input"/>
                                <label for="paymentPaid" class="custom-control-label"></label>
                                <br>
                                <label class="ml-3"><strong><spring:message code='bills.payment.label.paid'/></strong></label>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnSavePayment">
                        <em class="fas fa-save"></em>
                        <spring:message code="common.button.save"/></button>
                </div>
            </form>
        </div>
    </div>
</div>
<input id="paymentDataTitleEdit" type="hidden"
       value="<spring:message code='bills.header.paymentDataWindow.edit'/>"/>
<input id="paymentDataTitleNew" type="hidden"
       value="<spring:message code='bills.header.paymentDataWindow.new'/>"/>
<input id="meterTooltipRequiredField" type="hidden" value=""/>
