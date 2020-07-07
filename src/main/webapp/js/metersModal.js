document.addEventListener("DOMContentLoaded", function () {
        let buttonBack = $("#btnBack");
        let buttonAddMeter = $("#btnAddMeter");
        let formMetersList = $("#metersListForm");
        let formMetersHistory = $("#metersHistoryForm");
        let formMetersAddReading = $("#metersAddReadingsForm");
        let metersList = $('#metersList');
        let meterHistoryList = $('#meterHistoryList');

        let currentFlat = -1;
        let currentMeter = -1;
        let currentMeterName = {};

        buttonBack.on("click", backToMetersList);
        initModalOpenButtons();

        // Init buttons opening modal for flats
        function initModalOpenButtons() {
            let openButtons = $(".OpenMeters");
            openButtons.on("click", openMetersModal);
            console.log(openButtons);
        }

        //    Meters management
        function openMetersModal() {
            currentFlat = $(this).attr("value");
            getMeters(currentFlat);
            $('#ModalMeters').modal();
            backToMetersList();
        }

        function backToMetersList() {
            formMetersHistory.hide();
            formMetersList.show();
            formMetersAddReading.hide();
            buttonBack.hide();
            buttonAddMeter.show();
        }

        function getMeters(flatId) {
            $.ajax({
                type: 'get',
                url: 'meters/' + flatId,
                dataType: 'json',
                data: {},
            })
                .done(function (data) {
                    createMetersList(data);
                })
                .fail(function (xhr, status, err) {
                    console.log(xhr.statusText);
                    console.log(status);
                    console.log(err);
                });
        }


        function createMetersList(data) {
            metersList.empty();
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

                    newEm.addClass(getIconForMeter(data[i].meterType));
                    newH5.append(newEm);
                    newH5.append(" " + getMeterType(data[i].meterType));
                    newP.addClass("pmd-list-subtitle");
                    newP.text(data[i].description);
                    btnHisEm.addClass("fas fa-history");
                    btnAddReadingEm.addClass("fas fa-plus");
                    btnEditMeterEm.addClass("fas fa-pencil-alt");
                    btnDeleteEm.addClass("fas fa-trash-alt");

                    btnDelete.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterDeleteTooltip").val()).on("click", function () {
                        deleteEntity(data[i].description, deleteMeter, data[i].id)
                    });
                    btnEditMeter.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterEditTooltip").val()).on("click", editMeter);
                    btnAddReading.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterAddReadingTooltip").val()).on("click", addNewReading);
                    btnHistory.addClass("btn btn-xs pull-right btn-mixed-outline").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterHistoryTooltip").val()).on("click", showMetersHistory);


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
                    metersList.append(newLi);
                }

            } else {
                let newLi = $("<li>");
                let newDiv = $("<div>");
                let newH5 = $("<h5>");
                newLi.addClass("d-flex flex-row");
                newH5.text($('#noMetersMessage').val());
                newDiv.append(newH5);
                newLi.append(newDiv);
                metersList.append(newLi);
            }
        }

        function editMeter() {
            let meterId = $(this).attr("value");
            console.log("editing meter id: " + meterId)
        }


        function deleteMeter(meterId) {
            console.log("Deleting meter id: " + meterId);
            $.ajax({
                type: "DELETE",
                url: 'meters/delete/' + meterId,
            })
                .done(function (data) {
                    getMeters(currentFlat);
                })
                .fail(function (xhr, status, err) {
                    console.log(xhr.statusText);
                    console.log(status);
                    console.log(err);
                });
        }


        function addNewReading() {
            let meterId = $(this).attr("value");
            console.log("adding readings for meter id: " + meterId);

            formMetersHistory.hide();
            formMetersList.hide();
            formMetersAddReading.show();
            buttonBack.show();
            buttonAddMeter.hide();
        }

        // History management

        function deleteReading(readingId) {
            console.log("Deleting reading id: " + readingId)
            $.ajax({
                type: "DELETE",
                url: 'meters/history/delete/' + readingId,
            })
                .done(function (data) {
                    getMeterHistory(currentMeter, currentMeterName);
                })
                .fail(function (xhr, status, err) {
                    console.log(xhr.statusText);
                    console.log(status);
                    console.log(err);
                });

        }

        function editReading() {

        }

        function showMetersHistory() {
            let clickedH5 = this.parentElement.parentElement.firstChild.firstChild;
            let newElem = clickedH5.cloneNode(true);
            let meterId = $(this).attr("value");
            currentMeterName = newElem;
            currentMeter = meterId;
            newElem.appendChild(clickedH5.nextSibling.cloneNode(true));

            console.log("history for meter id: " + meterId);
            getMeterHistory(currentMeter, currentMeterName);
            formMetersHistory.show();
            formMetersList.hide();
            formMetersAddReading.hide();
            buttonBack.show();
            buttonAddMeter.hide();
        }


        function getMeterHistory(meterId, meterName) {

            $.ajax({
                type: 'get',
                url: 'meters/history/' + meterId,
                dataType: 'json',
                data: {},
            })
                .done(function (data) {
                    createHistoryList(data, meterName);
                })
                .fail(function (xhr, status, err) {
                    console.log(xhr.statusText);
                    console.log(status);
                    console.log(err);
                });
        }

        function createHistoryList(data, meterName) {
            let meterHistoryTitle = $('#meterHistoryTitle');
            if (meterName !== null) {
                meterHistoryTitle.empty();
                meterHistoryTitle.append(meterName)
            }
            meterHistoryList.empty();

            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    let newLi = $("<li>");
                    let newDiv = $("<div>");
                    let newDiv2 = $("<div>");
                    let newH2 = $("<h2>");
                    let newEm = $("<em>");
                    let newP = $("<p>");
                    let btnDelete = $("<a>");
                    let btnDeleteEm = $("<em>");
                    let btnEdit = $("<a>");
                    let btnEditEm = $("<em>");

                    newLi.addClass("timeline-item bg-main-theme rounded ml-3 p-4 shadow");
                    newDiv.addClass("timeline-arrow");
                    newH2.addClass("h5 mb-0");
                    newEm.addClass("far fa-calendar-check mr-3");
                    newP.addClass("text-small mt-2 font-weight-light");
                    newH2.append(newEm);
                    let readingDate = data[i].meterReadingDate.year + "." +
                        (data[i].meterReadingDate.month > 9 ? data[i].meterReadingDate.month : "0" + data[i].meterReadingDate.month) + "." +
                        (data[i].meterReadingDate.day > 9 ? data[i].meterReadingDate.day : "0" + data[i].meterReadingDate.day);
                    newH2.append($("#readDateLabel").val() + ": " + readingDate);

                    newP.text($("#readValueLabel").val() + ": " + data[i].readingValue);

                    btnDeleteEm.addClass("fas fa-trash-alt");
                    btnEditEm.addClass("fas fa-pencil-alt");
                    btnDelete.addClass("btn btn-xs float-right btn-mixedBgTheme-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterDeleteTooltip").val()).on("click", function () {
                        deleteEntity("Reading done on: " + readingDate, deleteReading, data[i].id)
                    });
                    btnEdit.addClass("btn btn-xs float-right btn-mixedBgTheme-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterEditTooltip").val()).on("click", editReading);
                    btnEdit.append(btnEditEm);
                    btnDelete.append(btnDeleteEm);


                    newDiv2.append(btnEdit);
                    newDiv2.append(btnDelete);
                    newDiv2.append(newH2);
                    newLi.append(newDiv);
                    newLi.append(newDiv2);
                    newLi.append(newP);
                    meterHistoryList.append(newLi);

                }
            }
        }

    //    enums translations
    function getMeterType(meeterType) {
        switch (meeterType) {
            case "ELECTRICITY":
                return $("#meterElectricity").val();
            case "WATER_COLD":
                return $("#meterWaterCold").val();
            case "WATER_HOT":
                return $("#meterWaterHot").val();
            case "HEATING":
                return $("#meterHeat").val();
            case "GAS":
                return $("#meterGas").val();
            default:
                return $("#meterUndefined").val();
        }
    }

    function getIconForMeter(meeterType) {
        switch (meeterType) {
            case "ELECTRICITY":
                return "fas fa-bolt";
            case "WATER_COLD":
                return "fas fa-snowflake";
            case "WATER_HOT":
                return "fas fa-tint";
            case "HEATING":
                return "fas fa-temperature-high";
            case "GAS":
                return "fas fa-fire-alt";
            default:
                return "";
        }
    }

    }
);
