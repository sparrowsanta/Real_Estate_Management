document.addEventListener("DOMContentLoaded", function () {
    let mainContainer = $(".mainContainer")

    if (mainContainer.prop("id").length) {
        let formDiv = $("<div class='divForm border rounded' id='formDiv'>");
        mainContainer.append(formDiv)

        if (mainContainer.prop('id') == 'flat'){
            console.log("flat")
            let flatForm = $("<form method='post' class='form'/>")
            let flatFormRow = $("<div class='form-row'>")
            let flatFormRowGroup = $("<div class='form-group col-md-3'>")
            let flatInputGroup = $("<div class='input-group'>")
            let flatGenericLabel = $("<h5 class='control-label' />")

            let nameInput = $("<input type='text' id='name' name='name' class='form-control mx-4' placeholder='Name'>")
            let icon = $("<span class='input-group-addon'><em style='vertical-align: middle' class='fas fa-road fa-2x em'></em></span>")

            let cityInput = $("<input type='text' id='city' name='city' class='form-control mx-2'>")
            let streetInput = $("<input type='text' id='street' name='street' class='form-control mx-2'>")
            formDiv.append(flatForm)
            flatForm.prepend(flatFormRow);
            flatFormRow.prepend(flatFormRowGroup)
            flatFormRowGroup.prepend(flatGenericLabel.attr("for", "Name").text("Name"))
            flatGenericLabel.prepend(icon)
            flatFormRowGroup.append(nameInput)
            //Name

            //City
            //Street




        }
        let test = $("<p>")


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
