document.addEventListener("DOMContentLoaded", function () {
        let buttonOpenModalMeters = $("#btnModalMeters");
        let buttonBack = $("#btnBack");
        let buttonAddMeter = $("#btnAddMeter");
        let formMetersList = $("#metersListForm");
        let formMetersHistory = $("#metersHistoryForm");
        let formMetersAddReading = $("#metersAddReadingsForm");
        let metersList = $('#metersList');

        buttonOpenModalMeters.on("click", openMetersModal);
        buttonBack.on("click", backToMetersList);
        backToMetersList();

        function addNewReading() {
            let meterId = $(this).attr("value");
            console.log("adding readings for meter id: " + meterId);

            formMetersHistory.hide();
            formMetersList.hide();
            formMetersAddReading.show();
            buttonBack.show();
            buttonAddMeter.hide();
        }

        function backToMetersList() {
            formMetersHistory.hide();
            formMetersList.show();
            formMetersAddReading.hide();
            buttonBack.hide();
            buttonAddMeter.show();
        }

        function showMetersHistory() {
            let meterId = $(this).attr("value");
            console.log("history for meter id: " + meterId);
            formMetersHistory.show();
            formMetersList.hide();
            formMetersAddReading.hide();
            buttonBack.show();
            buttonAddMeter.hide();
        }

        function getMeters() {
            $.ajax({
                type: 'get',
                url: 'getmeters/' + "1",
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

        function openMetersModal() {
            getMeters();
            $('#ModalMeters').modal();
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
                    let btnDeleteRm = $("<em>");
                    let spanPill = $("<span>");
                    spanPill.addClass("badge bg-dark-blue badge-pill mr-5 float-right");
                    spanPill.text("2020-01-01").attr("data-toggle", "tooltip").prop('title', $("#lastReadDate").val());

                    newEm.addClass(getIconForMeter(data[i].meterType));
                    newH5.append(newEm);
                    newH5.append(" " + getMeterType(data[i].meterType));

                    newP.addClass("pmd-list-subtitle");
                    newP.text(data[i].description);
                    newP.append(spanPill);


                    btnHisEm.addClass("fas fa-history");
                    btnAddReadingEm.addClass("fas fa-plus");
                    btnEditMeterEm.addClass("fas fa-edit");
                    btnDeleteRm.addClass("fas fa-trash-alt");

                    btnDelete.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterDeleteTooltip").val()).on("click", deleteMeter);
                    btnEditMeter.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterEditTooltip").val()).on("click", editMeter);
                    btnAddReading.addClass("btn btn-xs pull-right btn-mixed-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterAddReadingTooltip").val()).on("click", addNewReading);
                    btnHistory.addClass("btn btn-xs pull-right btn-mixed-outline").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterHistoryTooltip").val()).on("click", showMetersHistory);


                    btnDelete.append(btnDeleteRm);
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

        function deleteMeter() {
            let meterId = $(this).attr("value");
            console.log("deleting meter id: " + meterId)
        }

        function editMeter() {
            let meterId = $(this).attr("value");
            console.log("editing meter id: " + meterId)
        }


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
