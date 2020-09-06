<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/metersHistory.css" type="text/css">
<div class="container text-center">
    <div class="modal fade " id="modalBills" tabindex="-1" role="dialog" aria-labelledby="modalBills"
         data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog mw-100 w-75" role="document">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="modal-title" id="modalBillsTitle"><span><em class="fas fa-credit-card"> </em></span>
                        <spring:message code="bills.header.text"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="billsListForm">
                        <h4><spring:message code="bills.header.history"/></h4>
                        <div class="form-group row">
                            <div class="col-sm-3">
                                <div class="input-group">
                                    <label class="control-label" for="billsType"
                                           style="width: 100%"><strong><spring:message
                                            code='bills.label.filter.paid'/></strong></label>
                                    <select class="form-control is-valid input-white "
                                            id="billsType">
                                        <option value="all" selected="selected"><spring:message
                                                code='bills.filer.all'/></option>
                                        <option value="paid"><spring:message code='bills.filer.paid'/></option>
                                        <option value="notPaid"><spring:message code='bills.filer.notPaid'/></option>

                                    </select>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="input-group">
                                    <label class="control-label" for="billsIncomeOutcome"
                                           style="width: 100%"><strong><spring:message
                                            code='bills.label.filter.incomeType'/></strong></label>
                                    <select class="form-control is-valid input-white "
                                            id="billsIncomeOutcome">
                                        <option value="all" selected="selected"><spring:message
                                                code='bills.filer.incomeOutcome.all'/></option>
                                        <option value="income"><spring:message
                                                code='bills.filer.incomeOutcome.income'/></option>
                                        <option value="outcome"><spring:message
                                                code='bills.filer.incomeOutcome.outcome'/></option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="input-group">
                                    <label class="control-label" for="dateFrom"
                                           style="width: 100%"><strong><spring:message
                                            code='bills.label.filter.dateFrom'/></strong></label>

                                    <input class="form-control input-white" id="dateFrom" type="date"
                                           autocomplete="off"/>
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-dark-blue-outline btn-sm"
                                                id="clearDateFrom">
                                            <em class="fas fa-times"></em></button>
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="input-group">
                                    <label class="control-label" for="dateTo"
                                           style="width: 100%"><strong><spring:message
                                            code='bills.label.filter.dateTo'/></strong></label>
                                    <input class="form-control input-white" id="dateTo" type="date"
                                           autocomplete="off"/>
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-dark-blue-outline btn-sm" id="clearDateTo">
                                            <em class="fas fa-times"></em></button>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: left;  height: 500px">
                            <ul class="timeline" id="paymentsList">

                            </ul>
                        </div>

                    </div>
                    <div id="billsDefinitionForm">
                        <h4><spring:message code="bills.header.definitionList"/></h4>
                        <h4 id="billsHistoryTitle"></h4>

                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: left;  height: 600px">
                            <ul class="list-group pmd-list pmd-modal-list" id="billsList">
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnAddBillDefinition">
                        <em class="fas fa-plus"></em>
                        <spring:message code="bills.button.addBillDefinition"/></button>
                    <button type="button" class="btn btn-orange" id="btnShowBillsDefinition">
                        <em class="fas fa-list-ul"></em>
                        <spring:message code="bills.button.BillDefinitions"/></button>
                    <button type="button" class="btn btn-orange" id="btnAddManualPayment">
                        <em class="fas fa-plus"></em>
                        <spring:message code="bills.button.addManualPayment"/></button>
                    <button type="button" class="btn btn-orange" id="btnBackBill">
                        <em class="fas fa-backward"></em>
                        <spring:message code="common.button.back"/></button>
                </div>
            </div>
        </div>
    </div>

    <input id="noBillsMessage" type="hidden" value="<spring:message code='bills.bill.message.noBills'/>"/>
    <input id="billDeleteTooltip" type="hidden" value="<spring:message code='bills.button.deleteBill'/>"/>
    <input id="paymentDeleteTooltip" type="hidden" value="<spring:message code='bills.button.deletePayment'/>"/>
    <input id="paymentEditTooltip" type="hidden" value="<spring:message code='bills.button.editPayment'/>"/>
    <input id="billHistoryTooltip" type="hidden" value="<spring:message code='bills.button.history'/>"/>
    <input id="billAddPaymentTooltip" type="hidden" value="<spring:message code='bills.button.addPayment'/>"/>
    <input id="billDeletePaymentTooltip" type="hidden" value="<spring:message code='bills.button.deletePayment'/>"/>
    <input id="billEditPaymentTooltip" type="hidden" value="<spring:message code='bills.button.editPayment'/>"/>
    <input id="billEditTooltip" type="hidden" value="<spring:message code='bills.button.editBill'/>"/>
    <input id="billPayTooltip" type="hidden" value="<spring:message code='bills.button.payPayment'/>"/>
    <input id="paymentDateLabel" type="hidden" value="<spring:message code='bills.payments.paymentDate'/>"/>
    <input id="paymentAmountLabel" type="hidden" value="<spring:message code='bills.payments.paymentAmount'/>"/>
    <input id="paymentDeleteMessage" type="hidden" value="<spring:message code='bills.payments.delete.message'/>"/>

    <input id="paymentLedGreenTooltip" type="hidden" value="<spring:message code='bills.filer.paymentLED.green'/>"/>
    <input id="paymentLedYellowTooltip" type="hidden" value="<spring:message code='bills.filer.paymentLED.yellow'/>"/>
    <input id="paymentLedWhiteTooltip" type="hidden" value="<spring:message code='bills.filer.paymentLED.white'/>"/>
    <input id="paymentLedRedTooltip" type="hidden" value="<spring:message code='bills.filer.paymentLED.red'/>"/>

    <input id="billsDefinitionFrequencyLabel" type="hidden"
           value="<spring:message code='bills.definition.label.frequency'/>"/>
    <input id="billsDefinitionPaymentTillLabel" type="hidden"
           value="<spring:message code='bills.definition.label.paymentTill'/>"/>


</div>
<div hidden="hidden">
    <jsp:include page="../bills/billsPaymentData.jsp"/>
    <jsp:include page="../bills/billsDefinitionsData.jsp"/>
</div>
<script type="text/javascript" src="js/bills/billsModal.js"></script>