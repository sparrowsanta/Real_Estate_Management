document.addEventListener("DOMContentLoaded", function () {
    let buttonBack = $("#btnBackBill");
    let buttonAddBill = $("#btnAddBill");
    let currentFlat = -1;
    let formBillsList = $("#billsListForm");
    let formBillsHistory = $("#billsHistoryForm");

    // let buttonSave = $("#btnSave");
    initModalOpenButtons();

    function initModalOpenButtons() {
        //find existing buttons with class ".openBills" and add on click to open modal
        let openButtons = $(".openBills");
        openButtons.on("click", openBillsModal);

        //find containers with class "haveOpenBillsButtons" and bind listener tracking changes in subtree. Add function to search
        // for buttons "openBills" if container subtree dynamically changes, and and add onclick event to open billsModal to those buttons.
        let containerDiv = $(".haveOpenBillsButtons")
        containerDiv.bind('DOMSubtreeModified', function () {
            let openBillsButtons = $(".openBills");
            openBillsButtons.on("click", openBillsModal);
        });
    }

    function openBillsModal() {
        currentFlat = $(this).attr("value");
        // getBills(currentFlat);
        $('#modalBills').modal();
        backToBillsList();
    }

    function backToBillsList() {
        formBillsHistory.hide();
        formBillsList.show();
        buttonBack.hide();
        buttonAddBill.show();
    }
});