document.addEventListener("DOMContentLoaded", function () {
    let mainContainer = $(".mainContainer")
    let currentTab = 0;
    $("#alert-success-rooms").hide();
    $("#alert-success-flat").hide();
    $(".alert-danger").hide();


    //Language values(HIDDEN)

    let infoFlatName = $("#infoFlatName")
    let infoChooseFile = $("#infoChooseFile")
    let infoStreet = $("#infoStreet")
    let infoCity = $("#infoCity")
    let infoFlatNumber = $("#infoFlatNumber")
    let infoNumberOfRooms = $("#infoNumberOfRooms")
    let infoFloorNumber = $("#infoFloorNumber")
    let infoPicUrl = $("#infoPicUrl")
    let infoFlatPrice = $("#infoFlatPrice")
    let infoExpectedIncome = $("#infoExpectedIncome")
    let infoListOfMeters = $("#infoListOfMeters")
    let infoListOfRooms = $("#infoListOfRooms")
    let infoZipCode = $("#infoZipCode")
    let infoYearOfConstruction = $("#infoYearOfConstruction")
    let infoFlatSquareMeters = $("#infoFlatSquareMeters")
    let infoRoomsNumber = $("#infoRoomsNumber")
    let infoFlatDescription = $("#infoFlatDescription")
    let infoArea = $("#infoArea")
    let infoCurrency = $("#infoCurrency")
    let infoNext = $("#infoNext")
    //INFO
    let infoMissingName = $("#infoMissingName")
    let infoMissingCity = $("#infoMissingCity")
    let infoMissingStreet = $("#infoMissingStreet")
    let infoMissingFlatNumber = $("#infoMissingFlatNumber")

    //Flat received
    let flatEditedParsed;

    if (mainContainer.prop("id").length) {
        let formDiv = $("<div class='divForm' id='formDiv'>");
        mainContainer.append(formDiv)

        if (mainContainer.prop('id') == 'flat') {
            let flatForm = $("<form method='post' class='form' enctype='multipart/form-data' id='flatCreateForm'/>")
            let flatFormRow = $("<div class='form-row'>")
            let flatFormRowGroup = $("<div class='form-group col-md-3'>")
            let flatInputGroup = $("<div class='input-group'>")

            formDiv.append(flatForm)

            //FIRST ROW
            let flatFormRowFirst = flatFormRow.clone(true)
            flatForm.prepend(flatFormRowFirst);

            //Name
            let nameLabel = $("<h5 class='control-label'/>")
            let nameInput = $("<input type='text' id='name' name='name' required class='form-control btn-dark-blue-outline is-valid'>")

            let nameIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-home fa-2x em'></em></span>")
            let customDivForName = $("<div class='custom-file ml-4' id='customName'>")

            flatFormRowFirst.prepend(flatFormRowGroup.addClass("firstPage"))
            flatFormRowGroup.prepend(nameLabel.attr("for", "name").text(infoFlatName.clone(true).html()))

            nameLabel.prepend(nameIcon)
            flatFormRowGroup.append(customDivForName)
            customDivForName.append(nameInput)

            //Feedback
            let feedbackName = $("<span class='alert bg-dark-blue invalid-feedback p-1'><em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em>  Brak Pliku</span>")
            let feedbackNameEm = $("<em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em>")
            customDivForName.append(feedbackName)
            feedbackName.html(infoMissingName.html())
            feedbackName.prepend(feedbackNameEm)


            //City
            let cityLabel = $("<h5 class='control-label'/>")
            let cityInput = $("<input type='text' id='city' name='city' required class='form-control btn-dark-blue-outline is-valid'>")
            let cityIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-city fa-2x em'></em></span>")
            let flatFormRowGroupCity = flatFormRowGroup.clone(true).empty().attr("id", "cityGroup").addClass("firstPage");
            let customDivForCity = $("<div class='custom-file ml-4' id='customCity'>")

            flatFormRowFirst.append(flatFormRowGroupCity)
            flatFormRowGroupCity.prepend(cityLabel.attr("for", "city").text(infoCity.clone(true).html()))

            cityLabel.prepend(cityIcon)
            flatFormRowGroupCity.append(customDivForCity)
            customDivForCity.append(cityInput)


            //Feedback
            let feedbackCity = $("<span class='alert bg-dark-blue invalid-feedback p-1'><em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em></span>")
            let feedbackCityEm = $("<em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em>")
            feedbackCity.html(infoMissingCity.html())
            feedbackCity.prepend(feedbackCityEm)
            customDivForCity.append(feedbackCity)

            //Street
            let streetLabel = $("<h5 class='control-label'/>")
            let streetInput = $("<input type='text' id='street' name='street' required class='form-control btn-dark-blue-outline is-valid'>")
            let streetIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-road fa-2x em'></em></span>")
            let flatFormRowGroupStreet = flatFormRowGroup.clone(true).empty().attr("id", "streetGroup").addClass("firstPage");
            ;
            let customDivForStreet = $("<div class='custom-file ml-4' id='customStreet'>")

            flatFormRowFirst.append(flatFormRowGroupStreet)
            flatFormRowGroupStreet.prepend(streetLabel.attr("for", "street").text(infoStreet.clone(true).html()))
            streetLabel.prepend(streetIcon)
            flatFormRowGroupStreet.append(customDivForStreet)
            customDivForStreet.append(streetInput)


            //Feedback
            let feedbackStreet = $("<span class='alert bg-dark-blue invalid-feedback p-1'><em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em>  Brak Pliku</span>")
            let feedbackStreetEm = $("<em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em>")
            feedbackStreet.html(infoMissingStreet.html())
            feedbackStreet.prepend(feedbackStreetEm)
            customDivForStreet.append(feedbackStreet)


            //FlatNumber
            let flatLabel = $("<h5 class='control-label'/>")
            let flatInput = $("<input type='number' id='flatNumber' name='flatNumber' value='' required class='form-control btn-dark-blue-outline is-valid'>")
            let flatIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-list-ol fa-2x em'></em></span>")
            let flatFormRowGroupFlat = flatFormRowGroup.clone(true).empty().attr("id", "flatNumberGroup").addClass("firstPage");
            ;
            let customDivForFlatNumber = $("<div class='custom-file ml-4' id='customFlatNumber'>")

            flatFormRowFirst.append(flatFormRowGroupFlat)
            flatFormRowGroupFlat.prepend(flatLabel.attr("for", "flatNumber").text(infoFlatNumber.clone(true).html()))
            flatLabel.prepend(flatIcon)
            flatFormRowGroupFlat.append(customDivForFlatNumber)
            customDivForFlatNumber.append(flatInput)

            //Feedback
            let feedbackFlatNumber = $("<span class='alert bg-dark-blue invalid-feedback p-1'><em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em>  Brak Pliku</span>")
            let feedbackFlatNumberEm = $("<em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em>")
            customDivForFlatNumber.append(feedbackFlatNumber)
            feedbackFlatNumber.html(infoMissingFlatNumber.html())
            feedbackFlatNumber.prepend(feedbackFlatNumberEm)


            //SEC ROW
            let flatFormRowSec = flatFormRow.clone().empty().attr("id", "sec");
            flatForm.append(flatFormRowSec)

            //Zip Code
            let zipCodeLabel = $("<h5 class='control-label'/>")
            let zipCodeInput = $("<input type='text' id='zipCode' name='zipCode' class='form-control mx-4 btn-dark-blue-outline'>")
            let zipCodeIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-address-book fa-2x em'></em></span>")
            let flatFormRowGroupZipCode = flatFormRowGroup.clone(true).empty().attr("id", "zipCodeGroup").addClass("firstPage");

            flatFormRowSec.append(flatFormRowGroupZipCode)
            flatFormRowGroupZipCode.prepend(zipCodeLabel.attr("for", "zipCode").text(infoZipCode.clone(true).html()))
            zipCodeLabel.prepend(zipCodeIcon)
            flatFormRowGroupZipCode.append(zipCodeInput)

            //Rooms Number
            let roomsNumberLabel = $("<h5 class='control-label'/>")
            let roomsNumberInput = $("<input type='text' id='roomsNumber' name='roomsNumber' class='form-control mx-4 btn-dark-blue-outline'>")
            let roomsNumberIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-th-large fa-2x em'></em></span>")
            let flatFormRowGroupRoomsNumber = flatFormRowGroup.clone(true).empty().attr("id", "roomsNumberGroup");

            flatFormRowSec.append(flatFormRowGroupRoomsNumber)
            flatFormRowGroupRoomsNumber.prepend(roomsNumberLabel.attr("for", "roomsNumber").text(infoNumberOfRooms.clone(true).html()))
            roomsNumberLabel.prepend(roomsNumberIcon)
            flatFormRowGroupRoomsNumber.append(roomsNumberInput)

            //List Rooms
            let listRoomsLabel = $("<h5 class='control-label'/>")
            let listRoomsInput = $("<select class='form-control js-example-basic-multiple' multiple='multiple' name='flats' id='flatSelect'></select>")
            let listRoomsIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-list-ul fa-2x em'></em></span>")
            let flatFormRowGrouplistRooms = flatFormRowGroup.clone(true).empty().attr("id", "rooms")
            let flatFormRowGrouplistRoomsOnlyForSelect = $("<div class='form-control forInputSelect mx-4 p-0' >")
            let customDivForListRooms = $("<div class='custom-file' id='customListRooms'>")


            flatFormRowSec.append(flatFormRowGrouplistRooms)
            flatFormRowGrouplistRooms.prepend(listRoomsLabel.attr("for", "rooms").text(infoListOfRooms.clone(true).html()))
            listRoomsLabel.prepend(listRoomsIcon)
            flatFormRowGrouplistRooms.append(flatFormRowGrouplistRoomsOnlyForSelect)
            flatFormRowGrouplistRoomsOnlyForSelect.append(customDivForListRooms)
            customDivForListRooms.append(listRoomsInput)

            let testList = ["test " + " test22", "test2"];
            $("#flatSelect").select2({
                data: testList
            })

            //Floor Number
            let floorNumberLabel = $("<h5 class='control-label'/>")
            let floorNumberInput = $("<input type='number' id='floorNumber' name='floorNumber' class='form-control mx-4 btn-dark-blue-outline'>")
            let floorNumberIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-layer-group fa-2x em'></em></span>")
            let flatFormRowGroupfloorNumber = flatFormRowGroup.clone(true).empty().attr("id", "floorNumberGroup").addClass("firstPage");

            flatFormRowSec.append(flatFormRowGroupfloorNumber)
            flatFormRowGroupfloorNumber.prepend(floorNumberLabel.attr("for", "floorNumber").text(infoFloorNumber.clone(true).html()))
            floorNumberLabel.prepend(floorNumberIcon)
            flatFormRowGroupfloorNumber.append(floorNumberInput)

            //Expected Income
            let expectedIncomeLabel = $("<h5 class='control-label'/>")
            let expectedIncomeInput = $("<input type='number' step='1.00' placeholder='0.00' id='expectedIncome' name='expectedIncome' class='form-control btn-dark-blue-outline'>")
            let expectedIncomeIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-dollar-sign fa-2x em'></em></span>")
            let flatFormRowGroupexpectedIncome = flatFormRowGroup.clone(true).empty().attr("id", "expectedIncomeGroup").addClass("firstPage");
            ;

            //Appender for DIV
            let spanForAppenderExpectedIncome = $("<span class='input-group-text'></span>")
            let divWithIncome = $("<div class='input-group-append'></div>")
            let inputGroupIncome = $("<div class='input-group mx-4'>")
            inputGroupIncome.append(expectedIncomeInput)
            inputGroupIncome.append(divWithIncome.append(spanForAppenderExpectedIncome.text(infoCurrency.html())))

            flatFormRowSec.append(flatFormRowGroupexpectedIncome)
            flatFormRowGroupexpectedIncome.prepend(expectedIncomeLabel.attr("for", "expectedIncome").text(infoExpectedIncome.clone(true).html()))
            expectedIncomeLabel.prepend(expectedIncomeIcon)
            flatFormRowGroupexpectedIncome.append(inputGroupIncome)

            //Flat Price
            let flatPriceLabel = $("<h5 class='control-label'/>")
            let flatPriceInput = $("<input type='number' id='flatPrice' step='10.0' placeholder='0.00' name='flatPrice' class='form-control btn-dark-blue-outline'>")
            let flatPriceIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-tag fa-2x em'></em></span>")
            let flatFormRowGroupflatPrice = flatFormRowGroup.clone(true).empty().attr("id", "flatPriceGroup").addClass("firstPage");
            ;

            //Appender for DIV
            let spanForAppenderFlatPrice = $("<span class='input-group-text'></span>")
            let divWithCurrency = $("<div class='input-group-append'></div>")
            let inputGroupPrize = $("<div class='input-group mx-4'>")
            inputGroupPrize.append(flatPriceInput)
            inputGroupPrize.append(divWithCurrency.append(spanForAppenderFlatPrice.text(infoCurrency.html())))

            flatFormRowSec.append(flatFormRowGroupflatPrice)
            flatFormRowGroupflatPrice.prepend(flatPriceLabel.attr("for", "flatPrice").text(infoFlatPrice.clone(true).html()))
            flatPriceLabel.prepend(flatPriceIcon)
            flatFormRowGroupflatPrice.append(inputGroupPrize)
            //Third ROW
            let flatFormRowThird = flatFormRow.clone().empty();
            flatForm.append(flatFormRowThird)
            //PIC Url


            //FileName into the label function
            /*            $('input#file').on('change', function () {
                            let fileName = $(this).val().split('\\').pop();
                            $("#labelForFile").addClass("selected").html(fileName);
                        });*/

            //flatDescription
            let flatDescriptionLabel = $("<h5 class='control-label'/>")
            let flatDescriptionInput = $("<input type='freetext' id='flatDescription' name='flatDescription' class='form-control mx-4 btn-dark-blue-outline'>")
            let flatDescriptionIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-file-alt fa-2x em'></em></span>")
            let flatFormRowGroupflatDescription = flatFormRowGroup.clone(true).empty().attr("id", "flatDescriptionGroup").addClass("firstPage");
            ;

            flatFormRowThird.append(flatFormRowGroupflatDescription)
            flatFormRowGroupflatDescription.prepend(flatDescriptionLabel.attr("for", "flatDescription").text(infoFlatDescription.clone(true).html()))
            flatDescriptionLabel.prepend(flatDescriptionIcon)
            flatFormRowGroupflatDescription.append(flatDescriptionInput)

            //flatSquareMeters
            let flatSquareMetersLabel = $("<h5 class='control-label'/>")
            let flatSquareMetersInput = $("<input type='number' step='0.1' placeholder='0.00' id='flatSquareMeters' name='flatSquareMeters' class='form-control btn-dark-blue-outline'>")
            let flatSquareMetersIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-square fa-2x em'></em></span>")
            let flatFormRowGroupfflatSquareMeters = flatFormRowGroup.clone(true).empty().attr("id", "flatSquareMetersGroup").addClass("firstPage");
            ;

            //Appender for DIV
            let spanForAppenderflatSquareMeters = $("<span class='input-group-text'></span>")
            let divWithSqm = $("<div class='input-group-append'></div>")
            let inputGroupSQM = $("<div class='input-group mx-4'>")
            inputGroupSQM.append(flatSquareMetersInput)
            inputGroupSQM.append(divWithSqm.append(spanForAppenderflatSquareMeters.text(infoArea.html())))

            flatFormRowThird.append(flatFormRowGroupfflatSquareMeters)
            flatFormRowGroupfflatSquareMeters.prepend(flatSquareMetersLabel.attr("for", "flatSquareMeters").text(infoFlatSquareMeters.clone(true).html()))
            flatSquareMetersLabel.prepend(flatSquareMetersIcon)
            flatFormRowGroupfflatSquareMeters.append(inputGroupSQM)

            //yearOfConstruction
            let yearOfConstructionLabel = $("<h5 class='control-label'/>")
            let yearOfConstructionInput = $("<input type='freetext' id='yearOfConstruction' name='yearOfConstruction' class='form-control mx-4 btn-dark-blue-outline'>")
            let yearOfConstructionIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-hard-hat fa-2x em'></em></span>")
            let flatFormRowGroupyearOfConstruction = flatFormRowGroup.clone(true).empty().attr("id", "yearOfConstructionGroup").addClass("firstPage");
            ;

            flatFormRowThird.append(flatFormRowGroupyearOfConstruction)
            flatFormRowGroupyearOfConstruction.prepend(yearOfConstructionLabel.attr("for", "yearOfConstruction").text(infoYearOfConstruction.clone(true).html()))
            yearOfConstructionLabel.prepend(yearOfConstructionIcon)
            flatFormRowGroupyearOfConstruction.append(yearOfConstructionInput)

            //FORTH ROW
            let flatFormRowForth = flatFormRow.clone().empty();
            flatForm.append(flatFormRowForth)


            //List Meter
            /*            let metersLabel = $("<h5 class='control-label'/>")
                        let metersInput = $("<select class='form-control js-example-basic-multiple p-1' multiple='multiple' name='meters[]' id='metersSelect'></select>")
                        let metersIcon = $("<span class='input-group-addon' id='metersIcon'><em style='vertical-align: middle' class='fas fa-tachometer-alt fa-2x em'></em></span>")
                        let flatFormRowGroupMeters = flatFormRowGroup.clone(true).empty().attr("id", "meters")
                        let flatFormRowGroupMetersOnlyForSelect = $("<div class='form-control forInputSelect mx-4 p-0' >")
                        let customDivForListMeters = $("<div class='custom-file' id='customListMeters'>")

                        flatFormRowForth.append(flatFormRowGroupMeters)
                        flatFormRowGroupMeters.prepend(metersLabel.attr("for", "meters").text(infoListOfMeters.clone(true).html()))
                        metersLabel.prepend(metersIcon)
                        flatFormRowGroupMeters.append(flatFormRowGroupMetersOnlyForSelect)
                        flatFormRowGroupMetersOnlyForSelect.append(customDivForListMeters)
                        customDivForListMeters.append(metersInput)

                        let testListMeters = ["Meter 1 " + " test22", "Meter 2"];
                        $("#metersSelect").select2({
                            data: testListMeters
                        })
            */
            //Submit button
            let saveFlatButton = $("<button  class='btn btn-orange mt-4' type='button' id='saveFlatButton'></button>")
            let submitInput = $("<input class='btn btn-orange mt-4' type='submit' id='submitForm' value='Save Rooms'>")

            let flatFormRowFifth = flatFormRow.clone().empty();
            flatForm.append(flatFormRowFifth)
            let flatFormRowGroupSubmit = flatFormRowGroup.clone(true).empty().attr("id", "buttons").removeClass('firstPage').addClass('ml-4');
            flatFormRowFifth.append(flatFormRowGroupSubmit)
            flatFormRowGroupSubmit.append(saveFlatButton.text(infoNext.clone(true).html()))
            flatFormRowGroupSubmit.append(submitInput)


            checkThePage(currentTab)

            let submitBtn = $("#submitForm")
            submitBtn.on("click", function () {
                saveRoomsForFlat()
            })

            //Next button
            saveFlatButton.on("click", function () {
                saveFlat()
            })

            //Previous button
            let prevBtn = $("#prevBtn")
            prevBtn.on("click", function () {
                currentTab--;
                checkThePage(currentTab)
            })

            // Hidding
            function checkThePage(currentTab) {
                if (currentTab === 0) {
                    $(".firstPage").show()
                    $("#rooms").hide()
                    $("#roomsNumberGroup").hide()
                    $("#meters").hide()
                    $("#flatTableAdd").hide()
                    $("#dataRoomFeed").hide()
                    $("#prevBtn").hide()
                    $("#btnModalRoom").hide()
                    $("#submitForm").hide()
                    $("#submitFormFlat").hide()
                    $("#saveFlatButton").show()
                    $("#rowAddFlatTable").hide()
                    insertValuesIfFlatToEdit();
                    fixStepIndicator(currentTab)
                } else if (currentTab === 1) {
                    if (checkIfRequiredAreNotEmptyFirstPage(currentTab) !== true) return false;
                    fixStepIndicator(currentTab)
                    $("#flatTableAdd").show()
                    $("#dataRoomFeed").show()
                    $(".firstPage").hide()
                    $("#submitForm").show().addClass("submitFixed")
                    $("#btnModalRoom").show()
                    $("#saveFlatButton").hide()
                    $("#prevBtn").show()
                    $("#rowAddFlatTable").show()


                    // addToShowTable()

                }

            }

            function takeDataFromRoomsTable() {
                let roomsTable = $("#flatTableAdd").children().children()
                let roomToSendT = [];
                for (let i = 1; i < roomsTable.length; i++) {
                    let roomToSendL = {}
                    roomToSendL.description = roomsTable.eq(i).find(':nth-child(2)').text();
                    roomToSendL.roomSquareMeters = roomsTable.eq(i).find(':nth-child(3)').text();
                    roomToSendL.expectedRentPrice = roomsTable.eq(i).find(':nth-child(4)').text()
                    /*              if(roomsTable.eq(i).find(':nth-child(5)').text() == "true"){
                                      roomToSendL.occupiable = 1;
                                  }else {
                                      roomToSendL.occupiable = 0;
                                  }*/
                    roomToSendL.occupiable = roomsTable.eq(i).find(':nth-child(5)').text()
                    roomToSendL.roomType = roomsTable.eq(i).find(':nth-child(6)').text()
                    roomToSendL.flatId = submitBtn.attr("data-flat")
                    roomToSendT.push(roomToSendL)
                }
                let string = JSON.stringify(roomToSendT)

                return roomToSendT;

            }


            function fixStepIndicator(n) {
                // This function removes the "active" class of all steps...
                var i, x = document.getElementsByClassName("step");
                for (i = 0; i < x.length; i++) {
                    x[i].className = x[i].className.replace(" active", "");
                }
                //... and adds the "active" class to the current step:
                x[n].className += " active";
            }

            //    SAVE METHOD
            function saveFlat() {
                if (checkIfRequiredAreNotEmptyFirstPage() !== true) return false;

                // takeDataFromRoomsTable();
                data = {};
                feedClientDataToSend(data)
                $.ajax({
                    type: 'post',
                    url: 'addFlat',
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(data),
                })
                    .done(function (data) {
                        currentTab++;
                        checkThePage(currentTab)
                        submitBtn.attr("data-flat", String(data))
                        $("#alert-success-flat").show();

                    })
            }

            function saveRoomsForFlat() {
                let flatId = submitBtn.attr("data-flat")
                data = takeDataFromRoomsTable();
                $.ajax({
                    type: 'post',
                    url: 'addRoomsForFlat/' + flatId,
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(data),
                })
                    .done(function (data) {
                        console.log(data)
                        $("#alert-success-rooms").show();
                    }).fail(function () {
                    $(".alert-danger").show();
                })

            }

            function feedClientDataToSend(dataToSend) {
                dataToSend.name = $("#name").val()
                dataToSend.city = $("#city").val()
                dataToSend.street = $("#street").val()
                dataToSend.flatNumber = $("#flatNumber").val()
                dataToSend.zipCode = $("#zipCode").val()
                dataToSend.floorNumber = $("#floorNumber").val()
                dataToSend.expectedIncome = $("#expectedIncome").val()
                dataToSend.flatPrice = $("#flatPrice").val()
                dataToSend.flatDescription = $("#flatDescription").val()
                dataToSend.flatSquareMeters = $("#flatSquareMeters").val()
                dataToSend.yearOfConstruction = $("#yearOfConstruction").val()
                // dataToSend.rooms = takeDataFromRoomsTable();

                return dataToSend
            }

            function checkIfRequiredAreNotEmptyFirstPage() {
                // let file = $("#file").val()

                let flag = true;
                // let file = $("#file")
                let name = $("#name")
                let city = $("#city")
                let street = $("#street")
                let flatNumber = $("#flatNumber")

                let listToCheck = []
                // listToCheck.push(file)
                listToCheck.push(name)
                listToCheck.push(city)
                listToCheck.push(street)
                listToCheck.push(flatNumber)
                for (let i = 0; i < listToCheck.length; i++) {
                    if (listToCheck[i].val() === "") {
                        listToCheck[i].removeClass("is-valid").addClass("is-invalid")
                        flag = false;
                    }
                }
                if (!flag) {
                    currentTab--;
                }
                return flag;
            }


        }
    }


    /*    private String flatDescription;
    private double flatSquareMeters;*/

    /*    private int yearOfConstruction;
    private double flatPrice;*/

    /*
                let roomsNumber = $("#roomsNumber").first();
                $("#roomsNumber").val("test")
                data.append("roomsNumber", roomsNumber)

                let roomsTable = $("#flatTableAdd").children().children()
                let roomToSend = []
                let roomToSendL = {}
                for (let i = 1; i < roomsTable.length; i++) {
                    roomToSend.push(roomsTable.eq(i).find(':nth-child(2)').text())
                    roomToSend.push(roomsTable.eq(i).find(':nth-child(3)').text())
                    roomToSend.push(roomsTable.eq(i).find(':nth-child(4)').text())
                    roomToSend.push(roomsTable.eq(i).find(':nth-child(5)').text())
                    console.log(roomToSend)

                    roomToSendL.description = roomsTable.eq(i).find(':nth-child(3)').text();
                    roomToSendL.roomType = roomsTable.eq(i).find(':nth-child(4)').text()
                    roomToSendL.sqm = roomsTable.eq(i).find(':nth-child(5)').text()
                }
                $("#roomsNumber").first();
                $("#roomsNumber").text("s")
                data.append("roomToSend", roomToSend)
                data.append("roomToSendL", roomToSendL)*/
})

function insertValuesIfFlatToEdit() {
    let flatToEdit = $("#flatToEdit").html()
    flatEditedParsed = JSON.parse(flatToEdit);
    if (flatEditedParsed != null) {
        $("#name").val(flatEditedParsed.name)
        $("#city").val(flatEditedParsed.city)
        $("#street").val(flatEditedParsed.street)
        $("#flatNumber").val(flatEditedParsed.flatNumber)
        $("#zipCode").val(flatEditedParsed.zipCode)
        $("#roomsNumber").val(flatEditedParsed.roomsNumber)
        $("#floorNumber").val(flatEditedParsed.floorNumber)
        $("#expectedIncome").val(flatEditedParsed.expectedIncome)
        $("#flatPrice").val(flatEditedParsed.flatPrice)
        $("#flatDescription").val(flatEditedParsed.flatDescription)
        $("#flatSquareMeters").val(flatEditedParsed.flatSquareMeters)
        $("#flatDescription").val(flatEditedParsed.flatDescription)
        $("#yearOfConstruction").val(flatEditedParsed.yearOfConstruction)
    }
}

