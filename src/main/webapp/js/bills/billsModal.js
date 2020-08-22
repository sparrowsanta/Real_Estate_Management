document.addEventListener("DOMContentLoaded", function () {
    let buttonBack = $("#btnBackBill");
    let buttonAddBill = $("#btnAddBill");
    let currentFlat = -1;
    let currentBill = -1;
    let currentPayment = -1;
    let formBillsList = $("#billsListForm");
    let formBillsHistory = $("#billsHistoryForm");
    let billsList = $('#billsList');

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
        getBills(currentFlat);
        $('#modalBills').modal();
        backToBillsList();


    }

    function backToBillsList() {
        formBillsHistory.hide();
        formBillsList.show();
        buttonBack.hide();
        buttonAddBill.show();
    }

    //  ---------------  Create and display list of meters for flat
    function createBillsList(data) {
        billsList.empty();
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let newLi = $("<li>");
                let newDiv = $("<div>");
                let newH5 = $("<h5>");
                newLi.addClass("list-group-item d-flex flex-row align-items-center");
                newDiv.addClass("media-body");
                newH5.addClass("pmd-list-title");

                let newP = $("<p>");
                let newDiv2 = $("<div>");

                let btnAddReading = $("<a>");
                let btnHistory = $("<a>");
                let btnEditMeter = $("<a>");
                let btnDelete = $("<a>");

                let newLabel = $("<label>");

                let newEm = $("<em>");
                let btnHisEm = $("<em>");
                let btnAddReadingEm = $("<em>");
                let btnEditMeterEm = $("<em>");
                let btnDeleteEm = $("<em>");

                newEm.addClass("fas fa-hand-holding-usd");
                newH5.append(newEm);
                newH5.append(" - " + data[i].billAmount + " " + data[i].currency);

                newP.addClass("pmd-list-subtitle");
                newP.text(data[i].billDescription);
                btnHisEm.addClass("fas fa-history");
                btnAddReadingEm.addClass("fas fa-plus");
                btnEditMeterEm.addClass("fas fa-pencil-alt");
                btnDeleteEm.addClass("fas fa-trash-alt");
                newDiv2.addClass("buttonsHolder");

                btnDelete.addClass("btn btn-xs pull-right btn-mixed-outline mr-2 btn-square").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billDeleteTooltip").val()).on("click", function () {
                    // deleteEntity(data[i].description, deleteMeter, data[i].id)
                });
                btnEditMeter.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billEditTooltip").val()).on("click", null);
                btnAddReading.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billAddPaymentTooltip").val()).on("click", null);
                btnHistory.addClass("btn btn-xs pull-right btn-mixed-outline").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billHistoryTooltip").val()).on("click", null);


                btnDelete.append(btnDeleteEm);
                btnAddReading.append(btnAddReadingEm);
                btnHistory.append(btnHisEm);
                btnEditMeter.append(btnEditMeterEm);

                newDiv2.append(btnDelete);
                newDiv2.append(btnEditMeter);
                newDiv2.append(btnAddReading);
                newDiv2.append(btnHistory);
                newDiv2.append(newLabel);
                newDiv.append(newH5);
                newDiv.append(newP);
                newLi.append(newDiv);
                newLi.append(newDiv2);
                billsList.append(newLi);
            }
        } else {
            let newLi = $("<li>");
            let newDiv = $("<div>");
            let newH5 = $("<h5>");
            newLi.addClass("d-flex flex-row");
            newH5.text($('#noMetersMessage').val());
            newDiv.append(newH5);
            newLi.append(newDiv);
            billsList.append(newLi);
        }
    }


    // --------------- Ajax calls for Bills
    function getBills(flatId) {
        $.ajax({
            type: 'get',
            url: 'bills/getAll/' + flatId,
            dataType: 'json',
            data: {},
        })
            .done(function (data) {
                createBillsList(data);
            })
            .fail(function (xhr, status, err) {
                // logFailedAjax(xhr, status, err)
            });
    }
});