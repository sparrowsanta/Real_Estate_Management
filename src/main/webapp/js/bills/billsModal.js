document.addEventListener("DOMContentLoaded", function () {
    let buttonBack = $("#btnBackBill");
    let buttonAddBillDefinition = $("#btnAddBillDefinition");
    let buttonShowBillDefinition = $("#btnShowBillsDefinition");
    let buttonAddManualPayment = $("#btnAddManualPayment");
    let buttonClearDateFrom = $("#clearDateFrom");
    let buttonClearDateTo = $("#clearDateTo");
    let filterPaid = $("#billsType");
    let filterType = $("#billsIncomeOutcome");
    let filterDateFrom = $("#dateFrom");
    let filterDateTo = $("#dateTo");


    let currentFlat = -1;
    let currentBill = -1;
    let currentPayment = -1;
    let formPaymentsForm = $("#billsListForm");
    let formPaymentsList = $("#paymentsList");
    let billsDefinitionForm = $("#billsDefinitionForm");
    let billsList = $('#billsList');
    let paymentsList = $('#paymentsList');
    let btnaaaa = $('#btnaaaa');

    btnaaaa.on("click", addNewPayment);

    buttonClearDateFrom.on("click", function () {
        filterDateFrom.val("")
        filterPayments();
    });
    buttonClearDateTo.on("click", function () {
        filterDateTo.val("")
        filterPayments();
    });


    buttonBack.on("click", backToPaymentsList);
    buttonShowBillDefinition.on("click", showBillsDefinition);
    buttonAddManualPayment.on("click", addNewPayment);
    buttonAddBillDefinition.on("click", addNewBillDef);
    let buttonSavePayment = $("#btnSavePayment");
    let buttonSaveBillDef = $("#btnSaveBillDef");
    filterPaid.on("change", filterPayments);
    filterType.on("change", filterPayments);
    filterDateFrom.on("change", filterPayments);
    filterDateTo.on("change", filterPayments);


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

    function opentmpDef() {
        $('#billsDefinitionsDataModal').modal();

    }



    function openBillsModal() {
        $('#modalBills').modal();
        currentFlat = $(this).attr("value");
        getBills(currentFlat);
        filterPaid.val("all");
        filterType.val("all");
        filterDateFrom.val("");
        filterDateTo.val("");

        filterPayments();
        backToPaymentsList();
    }

    function addNewBillDef() {
        resetErrorsDefinitions();
        $('#billsDefinitionsDataTitle').text($('#billDataTitleNew').val());
        $('#billDescription').val('');
        $('#billCurrency').val('');
        $("#billType").val('outcome').trigger('change');
        $('#billAmount').val('');
        $('#billFrequency').val('');
        $('#billPayTill').val('');
        buttonSaveBillDef.prop("onclick", null).off("click");
        buttonSaveBillDef.on("click", saveNewDef);

        $('#billsDefinitionsDataModal').modal();
    }


    function addNewPayment() {
        resetErrorsPayment();
        $('#billsPaymentDataTitle').text($('#paymentDataTitleNew').val());
        let currentDate = new Date();
        let currentDateString = currentDate.getFullYear()
            + "-" + (currentDate.getMonth() + 1 < 10 ? "0" + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1))
            + "-" + (currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate());
        $('#paymentDate').val(currentDateString);
        $('#paymentAmount').val('');
        $("#paymentType").val('income').trigger('change');
        $('#paymentDescription').val('');
        $('#paymentCurrency').val('');
        document.getElementById("paymentPaid").checked = false
        buttonSavePayment.prop("onclick", null).off("click");
        buttonSavePayment.on("click", saveNewPayment);

        $('#billsPaymentDataModal').modal();
    }

    function editPayment() {
        resetErrorsPayment();
        $('#billsPaymentDataTitle').text($('#paymentDataTitleEdit').val());
        let paymentId = $(this).attr("value");
        getPaymentById(paymentId);
    }

    function editDefinition() {
        resetErrorsDefinitions()
        $('#billsDefinitionsDataTitle').text($('#billDataTitleEdit').val());
        let definitionId = $(this).attr("value");
        getDefinitionById(definitionId);
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
        getPayments(currentFlat, filterPaid.val(), filterType.val(),
            filterDateFrom.val().length === 0 ? "-" : filterDateFrom.val(),
            filterDateTo.val().length === 0 ? "-" : filterDateTo.val());

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
                let newEm2 = $("<em>");
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
                let paymentDate = data[i].paymentDate.replace("-/g", ".")
                divLedBox.append(divLed);
                divLed.addClass(data[i].paid ? "led-green" : getLedForNotPayedPayment(paymentDate));
                divLed.attr("data-toggle", "tooltip").prop('title', getLedTooltipText(divLed))


                newDiv.addClass("timeline-arrow");
                newH2.addClass("h5 mb-0");
                newEm.addClass("far fa-calendar-check mr-3");
                newEm2.addClass(data[i].incomeOutcome === ("income") ?
                    "fas fa-plus mr-3 text-success" : "fas fa-minus mr-3 text-danger");
                newP.addClass("text-small mt-2 font-weight-light");
                newP2.addClass("text-small mt-2 font-weight-light");
                newH2.append(newEm);

                newH2.append($("#paymentDateLabel").val() + ": " + paymentDate);
                newP.append(newEm2);
                newP.append($("#paymentAmountLabel").val() + ": " + data[i].amount + " " + data[i].currency);
                newP2.text(data[i].description);

                btnDeleteEm.addClass("fas fa-trash-alt");
                btnDeleteEm.addClass("fas fa-trash-alt");
                btnEditEm.addClass("fas fa-pencil-alt");


                btnPayEm.addClass("fas fa-money-check-alt");
                btnPay.addClass("btn btn-xs float-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billPayTooltip").val())
                btnPay.append(btnPayEm);

                btnDelete.addClass("btn btn-xs float-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#paymentDeleteTooltip").val())
                    .on("click", function () {
                        deleteEntity($("#paymentDeleteMessage").val() + " " + data[i].description + " - " +
                            data[i].amount + data[i].currency, deletePayment, data[i].id)
                    });
                btnEdit.addClass("btn btn-xs float-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#paymentEditTooltip").val())
                    .on("click", editPayment);
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
                .on("click", function () {
                deleteEntity(data[i].billDescription, deletePaymentDef, data[i].id)
                });
                btnEditPaymentDefinition.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                    .attr("value", data[i].id).prop('title', $("#billEditTooltip").val()).on("click", editDefinition);


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
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    createBillsList(data);
                }
            })
            .fail(function (xhr, status, err) {
                // logFailedAjax(xhr, status, err)
            });
    }

    function getPayments(flatId, filterPaid, filterType, fiterDateFrom, filterDateTo) {
        let filters = {};
        $.ajax({
            type: 'get',
            url: 'bills/payment/all/' + flatId + "/" + filterPaid + "/" + filterType + "/" + fiterDateFrom + "/" + filterDateTo,
            dataType: 'json',

        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    createPaymentsList(data);
                }
            })
            .fail(function (xhr, status, err) {
                // logFailedAjax(xhr, status, err)
            });
    }

    function getPaymentById(paymentId) {
        $.ajax({
            type: 'get',
            url: 'bills/payment/' + paymentId,
            dataType: "json",
            data: {},
        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    $('#paymentDate').val(data.paymentDate);
                    $('#paymentAmount').val(data.amount);
                    $('#paymentType').val(data.incomeOutcome);
                    $('#paymentDescription').val(data.description);
                    $('#paymentCurrency').val(data.currency);
                    document.getElementById("paymentPaid").checked = data.paid;
                    currentPayment = data.id;
                    buttonSavePayment.prop("onclick", null).off("click");
                    buttonSavePayment.on("click", function () {
                        savePaymentChanges(currentPayment)
                    });

                    $('#billsPaymentDataModal').modal();
                }
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function getDefinitionById(definitionId) {
        $.ajax({
            type: 'get',
            url: 'bills/' + definitionId,
            dataType: "json",
            data: {},
        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    $('#billDescription').val(data.billDescription);
                    $('#billAmount').val(data.billAmount);
                    $('#billCurrency').val(data.currency);
                    $('#billFrequency').val(data.billFrequencyInMonths);
                    $('#billPayTill').val(data.paymentTillDayOfMonth);
                    $('#billType').val(data.incomeOutcome);
                    currentBill = data.id;
                    buttonSaveBillDef.prop("onclick", null).off("click");
                    buttonSaveBillDef.on("click", function () {
                        saveDefinitionChanges(currentBill)
                    });

                    $('#billsDefinitionsDataModal').modal();
                }
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }



    function saveNewPayment() {
        if (checkRequiredFieldsPayment() !== true) return;
        let payment = {};
        payment.flatId = currentFlat;
        payment.amount = $('#paymentAmount').val();
        payment.paymentDate = $('#paymentDate').val();
        payment.incomeOutcome = $('#paymentType').val();
        payment.description = $('#paymentDescription').val();
        payment.currency = $('#paymentCurrency').val();
        payment.paid = document.getElementById("paymentPaid").checked ? true : false;
        $.ajax({
            type: 'post',
            url: 'bills/payment/add/',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(payment),
        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    $('#billsPaymentDataModal').modal('hide');
                    filterPayments();
                }
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function saveNewDef() {
        console.log("check errors")
        if (checkRequiredFieldsDefinition() !== true) return;
        console.log("after check  errors")
        let billDefinition = {};
        billDefinition.flatId = currentFlat;
        billDefinition.billDescription = $('#billDescription').val();
        billDefinition.billAmount = $('#billAmount').val();
        billDefinition.currency = $('#billCurrency').val();
        billDefinition.billFrequencyInMonths = $('#billFrequency').val();
        billDefinition.paymentTillDayOfMonth = $('#billPayTill').val();
        billDefinition.incomeOutcome =  $('#billType').val();
        console.log(billDefinition)
        $.ajax({
            type: 'post',
            url: 'bills/add/',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(billDefinition),
        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    $('#billsDefinitionsDataModal').modal('hide');
                    getBills(currentFlat);
                }
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }


    function saveDefinitionChanges(definitionId) {
        if (checkRequiredFieldsDefinition() !== true) return;
        let billDefinition = {};
        billDefinition.id = definitionId;
        billDefinition.flatId = currentFlat;
        billDefinition.billDescription = $('#billDescription').val();
        billDefinition.billAmount = $('#billAmount').val();
        billDefinition.currency = $('#billCurrency').val();
        billDefinition.billFrequencyInMonths = $('#billFrequency').val();
        billDefinition.paymentTillDayOfMonth = $('#billPayTill').val();
        billDefinition.incomeOutcome =  $('#billType').val();
        $.ajax({
            type: 'put',
            url: 'bills/edit/' + definitionId,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(billDefinition),
        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    $('#billsDefinitionsDataModal').modal('hide');
                    getBills(currentFlat);
                }
            })
            .fail(function (xhr, status, err) {
                logFailedAjax(xhr, status, err)
            });
    }

    function savePaymentChanges(paymentId) {
        if (checkRequiredFieldsPayment() !== true) return;
        let payment = {};
        payment.id = paymentId;
        payment.flatId = currentFlat;
        payment.amount = $('#paymentAmount').val();
        payment.paymentDate = $('#paymentDate').val();
        payment.incomeOutcome = $('#paymentType').val();
        payment.description = $('#paymentDescription').val();
        payment.currency = $('#paymentCurrency').val();
        payment.paid = document.getElementById("paymentPaid").checked ? true : false;
        $.ajax({
            type: 'put',
            url: 'bills/payment/edit/' + paymentId,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(payment),
        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    $('#billsPaymentDataModal').modal('hide');
                    filterPayments();
                }
            })
            .fail(function (xhr, status, err) {
                logFailedAjax(xhr, status, err)
            });
    }

    function deletePayment(paymentId) {
        $.ajax({
            type: "DELETE",
            url: 'bills/payment/delete/' + paymentId,
        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    filterPayments();
                }
            })
            .fail(function (xhr, status, err) {
                logFailedAjax(xhr, status, err)
            });
    }

    function deletePaymentDef(paymentId) {
        $.ajax({
            type: "DELETE",
            url: 'bills/delete/' + paymentId,
        })
            .done(function (data) {
                if (data.message === "Authentication needed") {
                    window.location.replace(data.redirectUrl);
                } else {
                    getBills(currentFlat);
                }
            })
            .fail(function (xhr, status, err) {
                logFailedAjax(xhr, status, err)
            });
    }

    function logFailedAjax(xhr, status, err) {
        console.log(xhr.statusText);
        console.log(status);
        console.log(err);
    }

    function getLedForNotPayedPayment(paymentDateString) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let dateArray = paymentDateString.split("-");
        let paymentDate = new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) - 1, parseInt(dateArray[2]), 0, 0, 0, 0);
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

    function checkRequiredFieldsPayment() {
        let passedValidation = true;
        let paymentDate = $('#paymentDate');
        let paymentAmount = $('#paymentAmount');
        let paymentDescription = $('#paymentDescription');
        resetErrorsPayment();
        if (paymentDate.val() === "") {
            paymentDate.removeClass("is-valid").addClass("is-invalid");
            passedValidation = false;
        }
        if (paymentAmount.val().length === 0) {
            paymentAmount.removeClass("is-valid").addClass("is-invalid");
            passedValidation = false;
        }
        if (paymentDescription.val().length === 0) {
            paymentDescription.removeClass("is-valid").addClass("is-invalid");
            passedValidation = false;
        }
        return passedValidation;
    }



    function checkRequiredFieldsDefinition() {
        let passedValidation = true;
        let billDesc = $('#billDescription');
        let billAmount = $('#billAmount');
        let billFreq = $('#billFrequency');
        let billPayTill = $('#billPayTill');
        resetErrorsDefinitions();
        if (billDesc.val() === "") {
            billDesc.removeClass("is-valid").addClass("is-invalid");
            passedValidation = false;
        }
        if (billAmount.val().length === 0) {
            billAmount.removeClass("is-valid").addClass("is-invalid");
            passedValidation = false;
        }
        if (billFreq.val().length === 0) {
            billFreq.removeClass("is-valid").addClass("is-invalid");
            passedValidation = false;
        }
        if (billPayTill.val().length === 0) {
            billPayTill.removeClass("is-valid").addClass("is-invalid");
            passedValidation = false;
        }
        return passedValidation;
    }

    function resetErrorsPayment() {
        let paymentDate = $('#paymentDate');
        let paymentAmount = $('#paymentAmount');
        let paymentDescription = $('#paymentDescription');
        paymentDate.addClass("is-valid").removeClass("is-invalid");
        paymentAmount.addClass("is-valid").removeClass("is-invalid");
        paymentDescription.addClass("is-valid").removeClass("is-invalid");
    }

    function resetErrorsDefinitions() {
        let billDesc = $('#billDescription');
        let billAmount = $('#billAmount');
        let billFreq = $('#billFrequency');
        let billPayTill = $('#billPayTill');
        billDesc.addClass("is-valid").removeClass("is-invalid");
        billAmount.addClass("is-valid").removeClass("is-invalid");
        billFreq.addClass("is-valid").removeClass("is-invalid");
        billPayTill.addClass("is-valid").removeClass("is-invalid");
    }
});