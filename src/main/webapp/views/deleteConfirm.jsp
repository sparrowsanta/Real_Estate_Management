<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<div class="modal fade" id="modalDelete" tabindex="-1" role="dialog" data-backdrop="static">
    <div class="modal-dialog modal-sm modal-notify modal-dialog-centered" role="document">
        <div class="modal-content text-center">
            <input id="deleteMessage" type="hidden" value="<spring:message code='common.message.confirm.delete'/>"/>
            <div class="modal-header d-flex justify-content-center bg-orange text-white">
                <p id="delTitle" class="heading"><strong></strong></p>
            </div>
            <div class="modal-body">
                <em class="fas fa-times fa-4x animated rotateIn text-orange"></em>
            </div>

            <div class="modal-footer justify-content-center">
                <a id="deleteYes" class="btn btn-lg btn-orange-outline">Yes</a>
                <a id="deleteNo" class="btn btn-lg btn-orange waves-effect" data-dismiss="modal">No</a>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="js/deleteConfirm.js"></script>
