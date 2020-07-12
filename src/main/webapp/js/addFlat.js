document.addEventListener("DOMContentLoaded", function () {
    let mainContainer = $(".mainContainer")
    $(".alert-success").hide();
    $(".alert-danger").hide();

    if (mainContainer.prop("id").length) {
        let formDiv = $("<div class='divForm border rounded' id='formDiv'>");
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
            flatFormRowFirst.prepend(flatFormRowGroup)
            //Name
            let nameLabel = $("<h5 class='control-label'/>")
            let nameInput = $("<input type='text' id='name' name='name' class='form-control mx-4 btn-dark-blue-outline'>")
            let nameIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-home fa-2x em'></em></span>")
            flatFormRowGroup.prepend(nameLabel.attr("for", "name").text("Flat Name"))
            nameLabel.prepend(nameIcon)
            flatFormRowGroup.append(nameInput)

            //City
            let cityLabel = $("<h5 class='control-label'/>")
            let cityInput = $("<input type='text' id='city' name='city' class='form-control mx-4 btn-dark-blue-outline'>")
            let cityIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-city fa-2x em'></em></span>")
            let flatFormRowGroupCity = flatFormRowGroup.clone(true).empty().attr("id", "city");

            flatFormRowFirst.append(flatFormRowGroupCity)
            flatFormRowGroupCity.prepend(cityLabel.attr("for", "city").text("City Name"))
            cityLabel.prepend(cityIcon)
            flatFormRowGroupCity.append(cityInput)

            //Street
            let streetLabel = $("<h5 class='control-label'/>")
            let streetInput = $("<input type='text' id='street' name='street' class='form-control mx-4 btn-dark-blue-outline'>")
            let streetIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-road fa-2x em'></em></span>")
            let flatFormRowGroupStreet = flatFormRowGroup.clone(true).empty().attr("id", "street");

            flatFormRowFirst.append(flatFormRowGroupStreet)
            flatFormRowGroupStreet.prepend(streetLabel.attr("for", "street").text("Street Name"))
            streetLabel.prepend(streetIcon)
            flatFormRowGroupStreet.append(streetInput)

            //FlatNumber
            let flatLabel = $("<h5 class='control-label'/>")
            let flatInput = $("<input type='number' id='flatNumber' name='flatNumber' class='form-control mx-4 btn-dark-blue-outline'>")
            let flatIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-list-ol fa-2x em'></em></span>")
            let flatFormRowGroupFlat = flatFormRowGroup.clone(true).empty().attr("id", "flat");

            flatFormRowFirst.append(flatFormRowGroupFlat)
            flatFormRowGroupFlat.prepend(flatLabel.attr("for", "flatNumber").text("Flat Number"))
            flatLabel.prepend(flatIcon)
            flatFormRowGroupFlat.append(flatInput)


            //SEC ROW
            let flatFormRowSec = flatFormRow.clone().empty();
            flatForm.append(flatFormRowSec)

            //Zip Code
            let zipCodeLabel = $("<h5 class='control-label'/>")
            let zipCodeInput = $("<input type='number' id='zipCode' name='zipCode' class='form-control mx-4 btn-dark-blue-outline'>")
            let zipCodeIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-address-book fa-2x em'></em></span>")
            let flatFormRowGroupZipCode = flatFormRowGroup.clone(true).empty().attr("id", "city");

            flatFormRowSec.append(flatFormRowGroupZipCode)
            flatFormRowGroupZipCode.prepend(zipCodeLabel.attr("for", "zipCode").text("Zip Code"))
            zipCodeLabel.prepend(zipCodeIcon)
            flatFormRowGroupZipCode.append(zipCodeInput)

            //Rooms Number
            let roomsNumberLabel = $("<h5 class='control-label'/>")
            let roomsNumberInput = $("<input type='number' id='roomsNumber' name='roomsNumber' class='form-control mx-4 btn-dark-blue-outline'>")
            let roomsNumberIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-th-large fa-2x em'></em></span>")
            let flatFormRowGroupRoomsNumber = flatFormRowGroup.clone(true).empty().attr("id", "roomsNumber");

            flatFormRowSec.append(flatFormRowGroupRoomsNumber)
            flatFormRowGroupRoomsNumber.prepend(roomsNumberLabel.attr("for", "roomsNumber").text("Number of Rooms"))
            roomsNumberLabel.prepend(roomsNumberIcon)
            flatFormRowGroupRoomsNumber.append(roomsNumberInput)

            //List Rooms
            let listRoomsLabel = $("<h5 class='control-label'/>")
            let listRoomsInput = $("<select class='form-control js-example-basic-multiple p-1' multiple='multiple' name='states[]' id='flatSelect'></select>")
            let listRoomsIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-list-ul fa-2x em'></em></span>")
            let flatFormRowGrouplistRooms = flatFormRowGroup.clone(true).empty().attr("id", "rooms")
            let flatFormRowGrouplistRoomsOnlyForSelect = $("<div class='form-control forInputSelect mx-4 p-0' >")

            flatFormRowSec.append(flatFormRowGrouplistRooms)
            flatFormRowGrouplistRooms.prepend(listRoomsLabel.attr("for", "rooms").text("List of Rooms"))
            listRoomsLabel.prepend(listRoomsIcon)
            flatFormRowGrouplistRooms.append(flatFormRowGrouplistRoomsOnlyForSelect)
            flatFormRowGrouplistRoomsOnlyForSelect.append(listRoomsInput)

            let testList = ["test " + " test22", "test2"];
            $("#flatSelect").select2({
                data: testList
            })

            //Floor Number
            let floorNumberLabel = $("<h5 class='control-label'/>")
            let floorNumberInput = $("<input type='number' id='floorNumber' name='floorNumber' class='form-control mx-4 btn-dark-blue-outline'>")
            let floorNumberIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-layer-group fa-2x em'></em></span>")
            let flatFormRowGroupfloorNumber = flatFormRowGroup.clone(true).empty().attr("id", "floorNumber");

            flatFormRowSec.append(flatFormRowGroupfloorNumber)
            flatFormRowGroupfloorNumber.prepend(floorNumberLabel.attr("for", "floorNumber").text("Floor Number"))
            floorNumberLabel.prepend(floorNumberIcon)
            flatFormRowGroupfloorNumber.append(floorNumberInput)


            //Third ROW
            let flatFormRowThird = flatFormRow.clone().empty();
            flatForm.append(flatFormRowThird)
            //PIC Url
            let picUrlLabel = $("<h5 class='control-label'/>")
            let picUrlInput = $("<input type='file' id='file' required name='file' required id='file' style='background-color: #c8c935' class='custom-file-input form-control is-valid'>")
            let picUrlIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-image fa-2x em'></em></span>")
            let flatFormRowGrouppicUrl = flatFormRowGroup.clone(true).empty().attr("id", "picUrl");
            let labelForClass = $("<label class='custom-file-label' for='file' id='labelForFile'> Choose File</label>")
            let customDivForFile = $("<div class='custom-file ml-4' id='customFile'>")

            flatFormRowThird.append(flatFormRowGrouppicUrl)
            flatFormRowGrouppicUrl.prepend(picUrlLabel.attr("for", "picUrl").text("Add Foto"))
            picUrlLabel.prepend(picUrlIcon)
            flatFormRowGrouppicUrl.append(customDivForFile)
            customDivForFile.append(picUrlInput)
            customDivForFile.append(labelForClass)

                //FileName into the label function
            $('input#file').on('change', function () {
                let fileName = $(this).val().split('\\').pop();
                $("#labelForFile").addClass("selected").html(fileName);
            });

            //flatDescription
            let flatDescriptionLabel = $("<h5 class='control-label'/>")
            let flatDescriptionInput = $("<input type='freetext' id='flatDescription' name='flatDescription' class='form-control mx-4 btn-dark-blue-outline'>")
            let flatDescriptionIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-layer-group fa-2x em'></em></span>")
            let flatFormRowGroupflatDescription = flatFormRowGroup.clone(true).empty().attr("id", "flatDescription");

            flatFormRowThird.append(flatFormRowGroupflatDescription)
            flatFormRowGroupflatDescription.prepend(flatDescriptionLabel.attr("for", "flatDescription").text("Opis Mieszkania"))
            flatDescriptionLabel.prepend(flatDescriptionIcon)
            flatFormRowGroupflatDescription.append(flatDescriptionInput)

            //flatSquareMeters
            let flatSquareMetersLabel = $("<h5 class='control-label'/>")
            let flatSquareMetersInput = $("<input type='number' step='0.1' placeholder='0.00' id='flatSquareMeters' name='flatSquareMeters' class='form-control btn-dark-blue-outline'>")
            let flatSquareMetersIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-layer-group fa-2x em'></em></span>")
            let flatFormRowGroupfflatSquareMeters = flatFormRowGroup.clone(true).empty().attr("id", "flatSquareMeters");

                //Appender for DIV
            let divWithSqm = $("<div class='input-group-append'><span class='input-group-text'>SQM</span></div>")
            let inputGroupSQM = $("<div class='input-group mx-4'>")
            inputGroupSQM.append(flatSquareMetersInput)
            inputGroupSQM.append(divWithSqm)

            flatFormRowThird.append(flatFormRowGroupfflatSquareMeters)
            flatFormRowGroupfflatSquareMeters.prepend(flatSquareMetersLabel.attr("for", "flatSquareMeters").text("Pow Mieszkania"))
            flatSquareMetersLabel.prepend(flatSquareMetersIcon)
            flatFormRowGroupfflatSquareMeters.append(inputGroupSQM)

            //flatDescription
            let yearOfConstructionLabel = $("<h5 class='control-label'/>")
            let yearOfConstructionInput = $("<input type='freetext' id='yearOfConstruction' name='yearOfConstruction' class='form-control mx-4 btn-dark-blue-outline'>")
            let yearOfConstructionIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-layer-group fa-2x em'></em></span>")
            let flatFormRowGroupyearOfConstruction = flatFormRowGroup.clone(true).empty().attr("id", "yearOfConstruction");

            flatFormRowThird.append(flatFormRowGroupyearOfConstruction)
            flatFormRowGroupyearOfConstruction.prepend(yearOfConstructionLabel.attr("for", "yearOfConstruction").text("Rok Konstrukcji"))
            yearOfConstructionLabel.prepend(yearOfConstructionIcon)
            flatFormRowGroupyearOfConstruction.append(yearOfConstructionInput)

            //FORTH ROW
            let flatFormRowForth = flatFormRow.clone().empty();
            flatForm.append(flatFormRowForth)

            //Flat Price
            let flatPriceLabel = $("<h5 class='control-label'/>")
            let flatPriceInput = $("<input type='number' id='flatPrice' step='10.0' placeholder='0.00' name='flatPrice' class='form-control btn-dark-blue-outline'>")
            let flatPriceIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-address-book fa-2x em'></em></span>")
            let flatFormRowGroupflatPrice= flatFormRowGroup.clone(true).empty().attr("id", "flatPrice");

                //Appender for DIV
            let divWithCurrency = $("<div class='input-group-append'><span class='input-group-text'>PLN</span></div>")
            let inputGroupPrize = $("<div class='input-group mx-4'>")
            inputGroupPrize.append(flatPriceInput)
            inputGroupPrize.append(divWithCurrency)

            flatFormRowForth.append(flatFormRowGroupflatPrice)
            flatFormRowGroupflatPrice.prepend(flatPriceLabel.attr("for", "flatPrice").text("Flat Price"))
            flatPriceLabel.prepend(flatPriceIcon)
            flatFormRowGroupflatPrice.append(inputGroupPrize)

            //Expected Income
            let expectedIncomeLabel = $("<h5 class='control-label'/>")
            let expectedIncomeInput = $("<input type='number' step='1.00' placeholder='0.00' id='expectedIncome' name='expectedIncome' class='form-control btn-dark-blue-outline'>")
            let expectedIncomeIcon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-layer-group fa-2x em'></em></span>")
            let flatFormRowGroupexpectedIncome = flatFormRowGroup.clone(true).empty().attr("id", "expectedIncome");

                //Appender for DIV
            let divWithIncome = $("<div class='input-group-append'><span class='input-group-text'>PLN</span></div>")
            let inputGroupIncome = $("<div class='input-group mx-4'>")
            inputGroupIncome.append(expectedIncomeInput)
            inputGroupIncome.append(divWithIncome)

            flatFormRowForth.append(flatFormRowGroupexpectedIncome)
            flatFormRowGroupexpectedIncome.prepend(expectedIncomeLabel.attr("for", "expectedIncome").text("Zakładamy przychód"))
            expectedIncomeLabel.prepend(expectedIncomeIcon)
            flatFormRowGroupexpectedIncome.append(inputGroupIncome)

            //List Meter
            let metersLabel = $("<h5 class='control-label'/>")
            let metersInput = $("<select class='form-control js-example-basic-multiple p-1' multiple='multiple' name='meters[]' id='meters'></select>")
            let metersIcon = $("<span class='input-group-addon' id='metersIcon'><em style='vertical-align: middle' class='fas fa-list-ul fa-2x em'></em></span>")
            let flatFormRowGroupMeters = flatFormRowGroup.clone(true).empty().attr("id", "meters")
            let flatFormRowGroupMetersOnlyForSelect = $("<div class='form-control forInputSelect mx-4 p-0' >")

            flatFormRowForth.append(flatFormRowGroupMeters)
            flatFormRowGroupMeters.prepend(metersLabel.attr("for", "meters").text("List of Meters"))
            metersLabel.prepend(metersIcon)
            flatFormRowGroupMeters.append(flatFormRowGroupMetersOnlyForSelect)
            flatFormRowGroupMetersOnlyForSelect.append(metersInput)

            let testListMeters = ["Meter 1 " + " test22", "Meter 2"];
            $("#meters").select2({
                data: testListMeters
            })






            //Feedback
            let feedbackPost = $("<span class='alert bg-dark-blue invalid-feedback p-1'><em style='vertical-align: center' class='fa fa-exclamation-triangle text-orange'></em>  Brak Pliku</span>")
            customDivForFile.append(feedbackPost)

            //Submit button
            let submitInput = $("<input type='submit' id='submitForm' value='Submit Request'>")
            flatFormRowGroupflatPrice.append(submitInput)

            let submitBtn = $("#submitForm")
            submitBtn.on("click", saveFlat)


            //    SAVE METHOD
            //https://stackoverflow.com/questions/43936372/upload-file-springboot-required-request-part-file-is-not-present
            function saveFlat() {
                if (checkIfRequiredAreNotEmpty() !== true) return false;

                // $(this).prop('disabled', true);
                let file = $("#file").first()
                console.log(file);
                let data = new FormData()
                data.get("name")
                data.append("file", file)
                // console.log(data)
                // let jsonDataObj = {
                //     "name": $("#name").val(),
                // }
                // data.append("jsonDataObj", JSON.stringify(jsonDataObj))
                console.log(data)
                $.ajax({
                    type: 'post',
                    enctype: 'multipart/form-data',
                    url: 'addFlat',
                    data: data,
                    processData: false,
                    contentType: false,
                    cache: true,
                })
                    .done(function (data) {
                        console.log(data)
                        // $(".alert-danger").show();
                        $(".alert-success").show()
                    })
            }

            function checkIfRequiredAreNotEmpty() {
                let file = $("#file").val()
                console.log(file)
                if (file === "") {
                    $("#file").removeClass("is-valid").addClass("is-invalid")
                    return false;
                }
                return true;
            }


        }


    }


    /*    private String flatDescription;
    private double flatSquareMeters;*/

    /*    private int yearOfConstruction;
    private double flatPrice;*/
})
