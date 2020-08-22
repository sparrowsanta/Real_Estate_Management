<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<div class="container text-center">
    <div class="modal fade " id="modalBills" tabindex="-1" role="dialog" aria-labelledby="modalBills" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg mw-75 w-75" role="document">
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
                        <h4><spring:message code="bills.header.list"/></h4>
                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: left;  height: 600px">
                            <ul class="list-group pmd-list pmd-modal-list" id="billsList">
                            </ul>

                        </div>
                    </div>
                    <div id="billsHistoryForm">
                        <h4><spring:message code="bills.header.history"/></h4>
                        <h4 id="billsHistoryTitle"></h4>

                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: left;  height: 600px">
                            <ul class="timeline" id="billsHistoryList">
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange" id="btnAddBill">
                        <em class="fas fa-plus"></em>
                        <spring:message code="bills.button.addBill"/></button>
                    <button type="button" class="btn btn-orange" id="btnBackBill">
                        <em class="fas fa-backward"></em>
                        <spring:message code="common.button.back"/></button>
                </div>
            </div>
        </div>
    </div>

    <input id="noBillsMessage" type="hidden" value="<spring:message code='bills.bill.message.noBills'/>"/>
    <input id="billDeleteTooltip" type="hidden" value="<spring:message code='bills.button.deleteBill'/>"/>
    <input id="billHistoryTooltip" type="hidden" value="<spring:message code='bills.button.history'/>"/>
    <input id="billAddPaymentTooltip" type="hidden" value="<spring:message code='bills.button.addPayment'/>"/>
    <input id="billDeletePaymentTooltip" type="hidden" value="<spring:message code='bills.button.deletePayment'/>"/>
    <input id="billEditPaymentTooltip" type="hidden" value="<spring:message code='bills.button.editPayment'/>"/>
    <input id="billEditTooltip" type="hidden" value="<spring:message code='bills.button.editBill'/>"/>
    <input id="paymentDateLabel" type="hidden" value="<spring:message code='bills.payments.paymentDate'/>"/>
    <input id="paymentAmountLabel" type="hidden" value="<spring:message code='bills.payments.paymentAmount'/>"/>
    <input id="paymentDeleteMessage" type="hidden" value="<spring:message code='bills.payments.delete.message'/>"/>
</div>

<script type="text/javascript" src="js/bills/billsModal.js"></script>