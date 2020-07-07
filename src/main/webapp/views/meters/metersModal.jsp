<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link rel="stylesheet" href="css/metersHistory.css" type="text/css">
<div class="container text-center">
    <div class="modal fade " id="ModalMeters" tabindex="-1" role="dialog" aria-labelledby="ModalMeters"  data-backdrop="static">
        <div class="modal-dialog modal-lg mw-75 w-75" role="document">
            <div class="modal-content">
                <div class="modal-header bg-dark-blue">
                    <h4 class="modal-title" id="myModalLabel"><span><em class="fas fa-tachometer-alt"> </em></span>
                        <spring:message code="meters.header.text"/></h4>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="metersListForm">
                        <h4><spring:message code="meters.header.list"/></h4>
                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: left;  height: 600px">
                            <ul class="list-group pmd-list pmd-modal-list" id="metersList">
                            </ul>

                        </div>
                    </div>
                    <div class="item" id="metersHistoryForm">
                        <h4><spring:message code="meters.header.history"/></h4>
                        <h4 id="meterHistoryTitle"></h4>

                        <div class="custom-scrollbar-blue p-2"
                             style="text-align: left;  height: 600px">
                        <ul class="timeline" id="meterHistoryList">

                        </ul>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange addMeter" id="btnAddMeter">
                        <em class="fas fa-plus"></em>
                        <spring:message code="meters.button.addMeeter"/></button>
                    <button type="button" class="btn btn-orange" id="btnBack">
                        <em class="fas fa-backward"></em>
                        <spring:message code="common.button.back"/></button>
                </div>
            </div>
        </div>
    </div>
    <input id="meterElectricity" type="hidden" value="<spring:message code='common.meterType.electricity'/>"/>
    <input id="meterWaterHot" type="hidden" value="<spring:message code='common.meterType.water.hot'/>"/>
    <input id="meterWaterCold" type="hidden" value="<spring:message code='common.meterType.water.cold'/>"/>
    <input id="meterGas" type="hidden" value="<spring:message code='common.meterType.gas'/>"/>
    <input id="meterHeat" type="hidden" value="<spring:message code='common.meterType.heat'/>"/>
    <input id="meterUndefined" type="hidden" value="<spring:message code='common.meterType.undefined'/>"/>
    <input id="noMetersMessage" type="hidden" value="<spring:message code='meters.meter.message.noMeters'/>"/>
    <input id="meterDeleteTooltip" type="hidden" value="<spring:message code='meters.button.deleteMeter'/>"/>
    <input id="meterHistoryTooltip" type="hidden" value="<spring:message code='meters.button.history'/>"/>
    <input id="meterAddReadingTooltip" type="hidden" value="<spring:message code='meters.button.addReading'/>"/>
    <input id="meterDeleteReadingTooltip" type="hidden" value="<spring:message code='meters.button.deleteReading'/>"/>
    <input id="meterEditReadingTooltip" type="hidden" value="<spring:message code='meters.button.editReading'/>"/>
    <input id="meterEditTooltip" type="hidden" value="<spring:message code='meters.button.editMeeter'/>"/>
    <input id="lastReadDate" type="hidden" value="<spring:message code='meters.badge.lastRead.tooltip'/>"/>
    <input id="readDateLabel" type="hidden" value="<spring:message code='meters.history.readDate'/>"/>
    <input id="readValueLabel" type="hidden" value="<spring:message code='meters.history.readValue'/>"/>
    <input id="readDeleteMessage" type="hidden" value="<spring:message code='meters.history.delete.message'/>"/>
</div>
<jsp:include page="../util/deleteConfirm.jsp"/>
<jsp:include page="metersData.jsp"/>
<jsp:include page="meterReadingData.jsp"/>
<script type="text/javascript" src="js/meters/metersModal.js"></script>