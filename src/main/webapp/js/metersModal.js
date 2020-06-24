document.addEventListener("DOMContentLoaded", function () {
        let buttonOpenModalMeters = $("#btnModalMeters");
        let buttonShowMetersHistory = $("#btnShowMetersHistory");
        let buttonAddReading = $("#btnAddReading");
        let buttonBack = $("#btnBack");
        let formMetersList = $("#metersListForm");
        let formMetersHistory = $("#metersHistoryForm");
        let formMetersAddReading = $("#metersAddReadingsForm");
        let metersList = $('#metersList');

        buttonOpenModalMeters.on("click", openMetersModal);
        buttonAddReading.on("click", addNewReading);
        buttonShowMetersHistory.on("click", showMetersHistory);
        buttonBack.on("click", backToMetersList);

        backToMetersList();


        function addNewReading() {
            formMetersHistory.hide();
            formMetersList.hide();
            formMetersAddReading.show();
            buttonBack.show();
            buttonShowMetersHistory.hide();
            buttonAddReading.hide();
        }

        function backToMetersList() {
            formMetersHistory.hide();
            formMetersList.show();
            formMetersAddReading.hide();
            buttonBack.hide();
            buttonShowMetersHistory.show();
            buttonAddReading.show()
        }

        function showMetersHistory() {
            formMetersHistory.show();
            formMetersList.hide();
            formMetersAddReading.hide();
            buttonBack.show();
            buttonShowMetersHistory.hide()
            buttonAddReading.hide();
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
                    newLi.addClass("list-group-item d-flex flex-row");
                    newDiv.addClass("media-body");
                    newH5.addClass("pmd-list-title");

                    let newP = $("<p>");
                    let newDiv2 = $("<div>");
                    let newInput = $("<input>");
                    let newLabel = $("<label>");
                    let newEm = $("<em>");

                    newEm.addClass(getIconForMeter(data[i].meterType));
                    newH5.append(newEm);
                    newH5.append(" "+ getMeterType(data[i].meterType));


                    newP.addClass("pmd-list-subtitle");
                    newP.text(data[i].description);

                    newDiv2.addClass("custom-control custom-checkbox pmd-checkbox");

                    newInput.addClass("custom-control-input");
                    newInput.val(data[i].id);
                    newInput.attr("type", "checkbox");
                    newInput.attr("id", "meeterId_" + data[i].id);

                    newLabel.addClass("custom-control-label");
                    newLabel.attr("for", "meeterId_" + data[i].id);

                    newDiv2.append(newInput);
                    newDiv2.append(newLabel);
                    newDiv.append(newH5);
                    newDiv.append(newP);
                    newLi.append(newDiv);
                    newLi.append(newDiv2);
                    metersList.append(newLi);
                    buttonShowMetersHistory.prop('disabled', true)
                    metersList.on('click', 'input[type="checkbox"]', function () {
                        let checkboxes = metersList.find(':checkbox').not($(this));
                        checkboxes.prop('checked', false);
                        let checked = metersList.find(':checkbox:checked');
                        if (checked.length === 0) {
                            buttonShowMetersHistory.prop('disabled', true)
                        } else {
                            buttonShowMetersHistory.prop('disabled', false)
                        }
                    });
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
