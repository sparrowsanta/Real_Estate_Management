document.addEventListener("DOMContentLoaded", function () {
    let mainContainer = $(".mainContainer")

    if (mainContainer.prop("id").length) {
        let formDiv = $("<div class='divForm border rounded' id='formDiv'>");
        mainContainer.append(formDiv)

        if (mainContainer.prop('id') == 'flat') {
            let flatForm = $("<form method='post' class='form'/>")
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


        }
    }

    /*        <div class="form-row">

            <div class="form-group col-md-3">
                <label for="dateReceived"> Provide Received Date </label>
                <input type="date" class="form-control " id="dateReceived" name="dateReceived" required>
            </div>
            <div class="form-group col-md-3 ">
                <label for="problemDes"> Describe the Problem </label>
                <input type="text" class="form-control " id="problemDes" name="problemDes" required>
            </div>

            <div class="form-group col-md-3">
                <label for="car"> Choose a Car </label>
                <select class="form-control" id="car" name="car" data-live-search="true" required>
                    <c:forEach items="${cars}" var="car">
                        <option value="${car.id}" ><c:out value="${car.idNumber}"></c:out></option>
                    </c:forEach>
                </select>
                <span class="help-inline">Start typing to find a car</span>
            </div>

        </div>*/
    /*    private String name;
        private String city;
        private String street;
        private String flatNumber;
        private String zipCode;
        private int roomsNumber;
        private List<Room> rooms;
        private int floorNumber;
        private String flatDescription;
        private double flatSquareMeters;
        private int yearOfConstruction;
        private double flatPrice;
        private double expectedIncome;
        private List<Meters> meters;
        private String picUrl;*/


})
