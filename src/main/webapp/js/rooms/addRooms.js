document.addEventListener("DOMContentLoaded", function () {
    // let addRoomBtn = $("<button class='btn btn-orange'>")
    let modalRoomBtn = $("#btnModalRoom");
    let defaultTr = $("<tr class='table-row'>")
    let defaultTd = $("<td>")
    let defaultBtnTd = $("<td><a class='btn btn-xs pull-right btn-mixed-outline mr-2'><em class='fa fa-trash-alt'></em></a></td>")
    let flatTableAdd = $(".table-ro")
    let iterationId = 1;

    modalRoomBtn.on("click", function () {
        $('#modalRooms').modal();
        let typesOfRoom = ["ROOM", "BATHROOM", "TOILET", "KITCHEN", "HALL", "BALCONY", "GARDEN", "GARAGE", "BASEMENT"];
        $("#roomTypeSelect").select2({
            data: typesOfRoom
        })


    })

    $('#btnAddFlat').on("click", saveRoomInFrontEnd)

    function saveRoomInFrontEnd() {
        let roomDescription = $("#roomDescription").val()
        let roomSquareMeters = $("#roomSquareMeters").val()
        let expectedRentPrice = $("#expectedRentPrice").val()
        let roomTypeSelect = $("#roomTypeSelect").val()

        addToShowTable(roomDescription, roomSquareMeters, expectedRentPrice, roomTypeSelect, iterationId)
        $("#modalRooms").modal('hide');

    }


    function backToFlats() {
        $("#modalRooms").modal('hide');
        modalRoomBtn.show()
        console.log("test")
    }

    $("#btnBackRooms").on("click", backToFlats)

    function addToShowTable(roomDescription, roomSquareMeters, expectedRentPrice, roomTypeSelect) {
        let rowTr = defaultTr.clone(true);
        let rowId = defaultTd.clone(true)
        let rowValueDesc = defaultTd.clone(true)
        let rowValueSquareMeters = defaultTd.clone(true)
        let rowValueRentPrice = defaultTd.clone(true)
        let rowValueTypeSelect = defaultTd.clone(true)
        let deleteFlatBtn = defaultBtnTd.clone(true)

        flatTableAdd.after(rowTr)

        //Add column to row
        rowTr.append(rowId)
        rowTr.append(rowValueDesc)
        rowTr.append(rowValueSquareMeters)
        rowTr.append(rowValueRentPrice)
        rowTr.append(rowValueTypeSelect)
        rowTr.append(deleteFlatBtn)

        //Add value to column
        rowId.append(iterationId)
        rowValueDesc.append(roomDescription)
        rowValueSquareMeters.append(roomSquareMeters)
        rowValueRentPrice.append(expectedRentPrice)
        rowValueTypeSelect.append(roomTypeSelect)

        iterationId++;


        //Add function to delete btn
        deleteFlatBtn.on("click", function () {
            $(this).parent().remove()
        })
        return iterationId;
    }
})