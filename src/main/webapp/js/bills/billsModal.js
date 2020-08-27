document.addEventListener("DOMContentLoaded", function () {
    let buttonBack = $("#btnBackBill");
    let buttonAddBillDefinition = $("#btnAddBillDefinition");
    let buttonShowBillDefinition = $("#btnShowBillsDefinition");
    let buttonAddManualPayment = $("#btnAddManualPayment");
    let filterSelect = $("#billsType");


    let currentFlat = -1;
    let currentBill = -1;
    let currentPayment = -1;
    let formPaymentsForm = $("#billsListForm");
    let formPaymentsList = $("#paymentsList");
    let billsDefinitionForm = $("#billsDefinitionForm");
    let billsList = $('#billsList');
    let paymentsList = $('#paymentsList');

    buttonBack.on("click", backToPaymentsList);
    buttonShowBillDefinition.on("click", showBillsDefinition);
    filterSelect.on("change", filterPayments);

    initModalOpenButtons();

    function initModalOpenButtons() {
        //find existing buttons with class ".openBills" and add on click to open modal
        let openButtons = $(".openBills");
        openButtons.on("click", openBillsModal);

        //find containers with class "haveOpenBillsButtons" and bind listener tracking changes in subtree. Add function to search
        // for buttons "openBills" if container subtree dynamically changes, and and add onclick event to open billsModal to those buttons.
        let containerDiv = $(".haveOpenBillsButtons")
        containerDiv.bind('DOMNodeInserted', function (e) {
            let openBillsButtons = $(e.target).find($(".openBills"));
            openBillsButtons.on("click", openBillsModal);
            // e.target.on("click", openBillsModal);
        });
    }

    function openBillsModal() {
        $('#modalBills').modal();
        currentFlat = $(this).attr("value");
        getBills(currentFlat);
        getPayments(currentFlat, "all")
        backToPaymentsList();


    }

    function backToPaymentsList() {
        billsDefinitionForm.hide();
        formPaymentsForm.show();
        buttonBack.hide();
        buttonAddBillDefinition.hide();
        buttonShowBillDefinition.show();
        buttonAddManualPayment.show();
    }

    function showBillsDefinition() {
        formPaymentsForm.hide();
        billsDefinitionForm.show();
        buttonBack.show();
        buttonAddBillDefinition.show();
        buttonShowBillDefinition.hide();
        buttonAddManualPayment.hide();

    }

    function filterPayments() {
        getPayments(currentFlat, filterSelect.val());

    }

    //  ---------------  Create and display list of Payments History  for flat

    function createPaymentsList(data) {
        paymentsList.empty();

        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let newLi = $("<li>");
                let newDiv = $("<div>");
                let newDiv2 = $("<div>");
                let newH2 = $("<h2>");
                let newEm = $("<em>");
                let newP = $("<p>");
                let newP2 = $("<p>");
                let btnDelete = $("<a>");
                let btnDeleteEm = $("<em>");
                let btnEdit = $("<a>");
                let btnEditEm = $("<em>");
                let btnPay = $("<a>");
                let btnPayEm = $("<em>");
                let divLedBox = $("<div>");
                let divLed = $("<div>");


                newLi.addClass("timeline-item bg-main-theme rounded ml-3 p-4 shadow");
                divLedBox.addClass("led-box float-right inline-block");

                divLedBox.append(divLed);
                divLed.addClass(data[i].paid ? "led-green" :
                    getLedForNotPayedPayment(parseInt(data[i].paymentDate.year), parseInt(data[i].paymentDate.month), parseInt(data[i].paymentDate.day)));
                divLed.attr("data-toggle", "tooltip").prop('title', getLedTooltipText(divLed))


                newDiv.addClass("timeline-arrow");
                newH2.addClass("h5 mb-0");
                newEm.addClass("far fa-calendar-check mr-3");
                newP.addClass("text-small mt-2 font-weight-light");
                newP2.addClass("text-small mt-2 font-weight-light");
                newH2.append(newEm);
                let readingDate = data[i].paymentDate.year + "." +
                    (data[i].paymentDate.month > 9 ? data[i].paymentDate.month : "0" + data[i].paymentDate.month) + "." +
                    (data[i].paymentDate.day > 9 ? data[i].paymentDate.day : "0" + data[i].paymentDate.day);

                newH2.append("Payment date" + ": " + readingDate);
                newP.text("Payment amount" + ": " + data[i].amount + " " + data[i].currency);
                newP2.text(data[i].description);

                btnDeleteEm.addClass("fas fa-trash-alt");
                btnEditEm.addClass("fas fa-pencil-alt");


                btnPayEm.addClass("fas fa-money-check-alt");
                btnPay.addClass("btn btn-xs float-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billPayTooltip").val())
                btnPay.append(btnPayEm);

                btnDelete.addClass("btn btn-xs float-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#paymentDeleteTooltip").val())
                //     .on("click", function () {
                //     deleteEntity($("#readDeleteMessage").val() + " " + readingDate, deleteReading, data[i].id)
                // });
                btnEdit.addClass("btn btn-xs float-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#paymentEditTooltip").val())


                // .on("click", editReading);
                btnEdit.append(btnEditEm);
                btnDelete.append(btnDeleteEm);


                newDiv2.append(divLedBox);
                if (!data[i].paid) {
                    newDiv2.append(btnPay);
                }
                newDiv2.append(btnEdit);
                newDiv2.append(btnDelete);
                newDiv2.append(newH2);
                newLi.append(newDiv);
                newLi.append(newDiv2);
                newLi.append(newP);
                newLi.append(newP2);
                paymentsList.append(newLi);
            }
        }
    }

    //  ---------------  Create and display list of Payments Definitions for flat
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
                let newP2 = $("<p>");
                let newP3 = $("<p>");
                let newDiv2 = $("<div>");

                let btnEditPaymentDefinition = $("<a>");
                let btnDeletePaymentDefinition = $("<a>");

                let newLabel = $("<label>");

                let newEm = $("<em>");
                let btnEditEm = $("<em>");
                let btnDeleteEm = $("<em>");

                newEm.addClass("fas fa-hand-holding-usd");
                newH5.append(newEm);
                newH5.append(" - " + data[i].billAmount + " " + data[i].currency);

                newP.addClass("pmd-list-subtitle");
                newP.text(data[i].billDescription);
                newP2.addClass("pmd-list-subtitle");
                newP2.text($("#billsDefinitionFrequencyLabel").val() + data[i].billFrequencyInMonths);
                newP3.addClass("pmd-list-subtitle");
                newP3.text($("#billsDefinitionPaymentTillLabel").val() + data[i].paymentTillDayOfMonth);

                btnEditEm.addClass("fas fa-pencil-alt");
                btnDeleteEm.addClass("fas fa-trash-alt");
                newDiv2.addClass("buttonsHolder");

                btnDeletePaymentDefinition.addClass("btn btn-xs pull-right btn-mixed-outline mr-2 btn-square").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billDeleteTooltip").val())
                // .on("click", function () {
                // deleteEntity(data[i].description, deleteMeter, data[i].id)
                // });
                btnEditPaymentDefinition.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billEditTooltip").val()).on("click", null);


                btnDeletePaymentDefinition.append(btnDeleteEm);
                btnEditPaymentDefinition.append(btnEditEm);

                newDiv2.append(btnDeletePaymentDefinition);
                newDiv2.append(btnEditPaymentDefinition);
                newDiv2.append(newLabel);
                newDiv.append(newH5);
                newDiv.append(newP);
                newDiv.append(newP2);
                newDiv.append(newP3);
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

    function getPayments(flatId, filter) {
        $.ajax({
            type: 'get',

            url: 'bills/payment/all/' + flatId + "/" + filter,
            dataType: 'json',
            data: {},
        })
            .done(function (data) {
                createPaymentsList(data);
            })
            .fail(function (xhr, status, err) {
                // logFailedAjax(xhr, status, err)
            });
    }

    function getLedForNotPayedPayment(year, month, day) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let paymentDate = new Date(year, month - 1, day, 0, 0, 0, 0);
        let tempDate = new Date();
        let today = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate(), 0, 0, 0, 0);
        let diffDays = (today - paymentDate) / oneDay;
        switch (true) {
            case (diffDays <= -3):
                return "led-white"
            case (diffDays <= 0):
                return "led-yellow"
            case (diffDays > 0):
                return "led-red"
            default:
                return "led-blue"
        }
    }

    function getLedTooltipText(div) {
        switch (true) {
            case (div.hasClass("led-white")):
                return $('#paymentLedWhiteTooltip').val()
            case (div.hasClass("led-yellow")):
                return $('#paymentLedYellowTooltip').val()
            case (div.hasClass("led-red")):
                return $('#paymentLedRedTooltip').val()
            case (div.hasClass("led-green")):
                return $('#paymentLedGreenTooltip').val()
            default:
                return ""

        }

    }
});