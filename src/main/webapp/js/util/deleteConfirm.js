function deleteEntity(message, functionToCall, idToDelete) {
    let modal = $('#modalDelete');
    let delTitle = $('#delTitle');
    let delMessage = $('#deleteMessage');
    let buttonDeleteYes = $("#deleteYes");
    buttonDeleteYes.prop("onclick", null).off("click");
    buttonDeleteYes.on("click", function () {
        functionToCall(idToDelete);
        modal.modal('hide');
    });
    delTitle.text(delMessage.val() + " " + message + " ?")
    modal.modal();

}


