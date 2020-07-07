document.addEventListener("DOMContentLoaded", function () {
        let buttonBack = $("#btnBack");
        let buttonAddMeter = $("#btnAddMeter");
        let formMetersList = $("#metersListForm");
        let formMetersHistory = $("#metersHistoryForm");
        let metersList = $('#metersList');
        let meterHistoryList = $('#meterHistoryList');
        let currentFlat = -1;
        let currentMeter = -1;
        let currentMeterName = {};
        let meterTypes = [];
        let buttonSave = $("#btnSave");




        buttonBack.on("click", backToMetersList);
        initAddMeterButtons();
        initModalOpenButtons();

        $('.required-icon').tooltip({
            placement: 'left',
            title: $('#meterTooltipRequiredField').val()
        });

        // create select with meter types
        createMeterTypes();
        $('.js-example-basic-single').select2({
            placeholder: $("#meterSelectTypePlaceholder").val(),
            data: meterTypes,
            escapeMarkup: function (markup) {
                return markup;
            }
        });
        $('.select2-selection__rendered').hover(function () {
            $(this).removeAttr('title');
        });

        // Init buttons opening modal for flats
        function initModalOpenButtons() {
            let openButtons = $(".openMeters");
            openButtons.on("click", openMetersModal);
            let containerDiv = $(".containerDiv")
            containerDiv.bind('DOMSubtreeModified', function(){
                console.log("Aaaaa")
                let openButtons = $(".openMeters");
                openButtons.on("click", openMetersModal);
            });

        }

        function openMetersModal() {
            currentFlat = $(this).attr("value");
            getMeters(currentFlat);
            $('#ModalMeters').modal();
            backToMetersList();
        }

        function backToMetersList() {
            formMetersHistory.hide();
            formMetersList.show();
            buttonBack.hide();
            buttonAddMeter.show();
        }

        function getMeters(flatId) {
            $.ajax({
                type: 'get',
                url: 'meters/getAll/' + flatId,
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
            resetErrorsMeter();
            $('#meterDataTitle').text($('#meterDataTitleEdit').val());
            let meterId = $(this).attr("value");
            getMeterById(meterId);

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
            // resetReadingErrors();
            $('#meterReadingDataTitle').text($('#meterReadingDataTitleNew').val());
            $('#readingDate').val("");
            $("#readingValue").val('')
            buttonSave.prop("onclick", null).off("click");
            buttonSave.on("click", saveNewReading);
            $('#meterReadingDataModal').modal();

        }

    function saveNewReading() {
        if (checkRequiredFieldsReading() !== true) return;
        let reading = {};
        reading.meterId = currentMeter;
        reading.meterReadingDate = $('#readingDate').val();
        reading.readingValue = $('#readingValue').val();
        $.ajax({
            type: 'post',
            url: 'meters/reading/add/',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(reading),
        })
            .done(function (data) {
                $('#meterReadingDataModal').modal('hide');
                getMeters(currentFlat);
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }


    // History management

        function deleteReading(readingId) {
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
            getMeterHistory(currentMeter, currentMeterName);
            formMetersHistory.show();
            formMetersList.hide();
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
                        .attr("value", data[i].id).prop('title', $("#meterDeleteReadingTooltip").val()).on("click", function () {
                        deleteEntity($("#readDeleteMessage").val() + " " + readingDate, deleteReading, data[i].id)
                    });
                    btnEdit.addClass("btn btn-xs float-right btn-mixedBgTheme-outline mr-2").attr("data-toggle", "tooltip")
                        .attr("value", data[i].id).prop('title', $("#meterEditReadingTooltip").val()).on("click", editReading);
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

        function saveNewMeter() {
            if (checkRequiredFieldsMeter() !== true) return;
            let meter = {};
            meter.flatId = currentFlat;
            meter.meterType = $('#meterType').val();
            meter.description = $('#meterDescription').val();
            $.ajax({
                type: 'post',
                url: 'meters/add/',
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(meter),
            })
                .done(function (data) {
                    $('#meterDataModal').modal('hide');
                    getMeters(currentFlat);
                })
                .fail(function (xhr, status, err) {
                    console.log(xhr.statusText);
                    console.log(status);
                    console.log(err);
                });
        }

        function initAddMeterButtons() {
            let openButtons = $(".addMeter");
            openButtons.on("click", addNewMeter);
        }

        function addNewMeter() {
            resetErrorsMeter();
            $('#meterDataTitle').text($('#meterDataTitleNew').val());
            $('#meterDescription').val("");
            buttonSave.prop("onclick", null).off("click");
            buttonSave.on("click", saveNewMeter);
            $("#meterType").val('').trigger('change');
            $('#meterDataModal').modal();
        }


        function createMeterTypes() {
            meterTypes.push({
                "id": "ELECTRICITY", "text": '<em class="' + getIconForMeter("ELECTRICITY") + '"></em>' + " " +
                    $("#meterElectricity").val()
            });
            meterTypes.push({
                "id": "WATER_COLD", "text": '<em class="' + getIconForMeter("WATER_COLD") + '"></em>' + " " +
                    $("#meterWaterCold").val()
            });
            meterTypes.push({
                "id": "WATER_HOT", "text": '<em class="' + getIconForMeter("WATER_HOT") + '"></em>' + " " +
                    $("#meterWaterHot").val()
            });
            meterTypes.push({
                "id": "HEATING", "text": '<em class="' + getIconForMeter("HEATING") + '"></em>' + " " +
                    $("#meterHeat").val()
            });
            meterTypes.push({
                "id": "GAS", "text": '<em class="' + getIconForMeter("GAS") + '"></em>' + " " +
                    $("#meterGas").val()
            });
        }

        function getMeterById(meterId) {
            $.ajax({
                type: 'get',
                url: 'meters/' + meterId,
                dataType: "json",
                data: {},
            })
                .done(function (data) {
                    $('#meterType').val(data.meterType).trigger('change');
                    $('#meterDescription').val(data.description);
                    currentMeter = data.id;
                    buttonSave.prop("onclick", null).off("click");
                    buttonSave.on("click", function () {
                        saveMeterChanges(currentMeter)
                    });

                    $('#meterDataModal').modal();

                })
                .fail(function (xhr, status, err) {
                    console.log(xhr.statusText);
                    console.log(status);
                    console.log(err);
                });
        }

        function saveMeterChanges(meterId) {
            if (checkRequiredFieldsMeter() !== true) return;
            let meter = {};
            meter.id = meterId;
            meter.flatId = currentFlat;
            meter.meterType = $('#meterType').val();
            meter.description = $('#meterDescription').val();
            $.ajax({
                type: 'put',
                url: 'meters/edit/' + meterId,
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(meter),
            })
                .done(function (data) {
                    $('#meterDataModal').modal('hide');
                    getMeters(currentFlat);
                })
                .fail(function (xhr, status, err) {
                    console.log(xhr.statusText);
                    console.log(status);
                    console.log(err);
                });
        }

        function checkRequiredFieldsMeter() {
            let passedValidation = true;
            let meterType = $('#meterType');
            resetErrorsMeter();
            if (meterType.val() === "") {
                meterType.removeClass("is-valid").addClass("is-invalid");
                passedValidation = false;
            }
            return passedValidation;
        }

        function checkRequiredFieldsReading() {
            let passedValidation = true;
            let readingDate = $('#readingDate');
            let readingValue = $('#readingValue');
            resetErrorsReading();
            if (readingDate.val() === "") {
                readingDate.removeClass("is-valid").addClass("is-invalid");
                passedValidation = false;
            }
            if (readingValue.val() === "") {
                readingValue.removeClass("is-valid").addClass("is-invalid");
                passedValidation = false;
            }
            return passedValidation;

        }

        function resetErrorsMeter() {
            let meterType = $('#meterType');
            meterType.addClass("is-valid").removeClass("is-invalid");
        }

        function resetErrorsReading() {
            let readingDate = $('#readingDate');
            let readingValue = $('#readingValue');
            readingDate.addClass("is-valid").removeClass("is-invalid");
            readingValue.addClass("is-valid").removeClass("is-invalid");
        }

    }
)
;
