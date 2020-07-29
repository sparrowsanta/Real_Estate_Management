document.addEventListener("DOMContentLoaded", function () {
    let containerDiv = $(".containerDiv")
    containerDiv.empty();

    function showFlatsInformation(flats) {
        containerDiv.empty();
        for (let i = 0; i < flats.length; i++) {
            let imgFlat = $("<figure><a href='#' id='flatPicture' ><img class='img-fluid' src='img/flat.jpg'></a></figure>")
            let row = $("<div class='row'>");
            let rowForPic = $("<div class = 'col-sm-3 col3'>")
            let rowForInfo = $("<div class = 'col-sm-2'>")
            let infoRow = $("<div class = 'infoRow'>");
            let rowssborder = $("<div class='row-border'>")


            let infoForIcon = $("#infoForIcon")
            let infoStreet = $("#infoStreet")
            let infoZipCode = $("#infoZipCode")
            let infoYearOfConstruction = $("#infoYearOfConstruction")
            let infoFlatSquareMeters = $("#infoFlatSquareMeters")
            let infoRoomsNumber = $("#infoRoomsNumber")
            let infoFlatDescription = $("#infoFlatDescription")
            let readDeleteMessage = $("#readDeleteMessage")
            let hiddenName = $("#hiddenName")


            //Construction
            containerDiv.append(rowssborder);
            rowssborder.append(row)
            row.prepend(rowForPic)

            //Picture
            rowForPic.append(imgFlat)

            // FirstCol
            //first row
            let p1 = $("<p>");
            let icon = $("<em class='fas fa-road fa-2x mr-3 em'></em>")
            let infoForIcon2 = $("<h4 id='infoForIcon' class='mt-2'></h4>")
            let iconDiv = $("<div class='float-left'>")

            row.append(rowForInfo);
            //Main HEADER
            infoForIcon2.text(infoForIcon.text())
            rowForInfo.append(infoRow)
            infoRow.prepend(iconDiv)
            iconDiv.prepend(icon)
            rowForInfo.prepend(infoForIcon2)

            infoRow.append(infoStreet.clone(true))
            infoRow.append(p1.text(flats[i].city + " / " + flats[i].street))


            //sec row
            let p2 = $("<p>");
            let icon2 = $("<em class='fas fa-address-book fa-2x ml-1 mr-3 em'></em>")
            let infoRow2 = $("<div class = 'infoRow2'>")
            let iconDiv2 = $("<div class='float-left'>")
            rowForInfo.append(infoRow2)
            infoRow2.prepend(iconDiv2)
            iconDiv2.prepend(icon2)
            infoRow2.append(infoZipCode.clone(true))
            infoRow2.append(p2.text(flats[i].zipCode))

            //third row
            let p3 = $("<p>");
            let icon3 = $("<em class='fas fa-hard-hat fa-2x mr-3 em'></em>")
            let infoRow3 = $("<div class = 'infoRow3'>")
            let iconDiv3 = $("<div class='float-left'>")
            rowForInfo.append(infoRow3)
            infoRow3.prepend(iconDiv3)
            iconDiv3.prepend(icon3)
            infoRow3.append(infoYearOfConstruction.clone(true))
            infoRow3.append(p3.text(flats[i].yearOfConstruction))

            //Sec Col
            //First Row
            let icon4 = $("<em class='fas fa-square fa-2x ml-1 mr-3 em'></em>")
            let infoRow4 = $("<div class = 'infoRow4 mt-10'>")
            let rowForInfo2 = $("<div class = 'col-sm-2 mt-10'>")
            let iconDiv4 = $("<div class='float-left'>")
            let p4 = $("<p>");
            let additionalDiv = $("<div class='additional'>");
            row.append(rowForInfo2)
            rowForInfo2.append(additionalDiv)
            rowForInfo2.append(infoRow4)
            infoRow4.append(iconDiv4)
            iconDiv4.prepend(icon4)
            infoRow4.append(infoFlatSquareMeters.clone(true))
            infoRow4.append(p4.text(flats[i].flatSquareMeters))

            //sec row
            let p5 = $("<p>");
            let icon5 = $("<em class='fas fa-th-large fa-2x mr-3 em'></em>")
            let infoRow5 = $("<div class = 'infoRow5'>")
            let iconDiv5 = $("<div class='float-left'>")
            rowForInfo2.append(infoRow5)
            infoRow5.prepend(iconDiv5)
            iconDiv5.prepend(icon5)
            infoRow5.append(infoRoomsNumber.clone(true))
            infoRow5.append(p5.text(flats[i].roomsNumber))


            //thrid row
            let p6 = $("<p>");
            let icon6 = $("<em class='fas fa-file-alt mt-1 ml-1 fa-2x mr-3 em'></em>")
            let infoRow6 = $("<div class = 'infoRow6'>")
            let iconDiv6 = $("<div class='float-left'>")
            rowForInfo2.append(infoRow6)
            infoRow6.prepend(iconDiv6)
            iconDiv6.prepend(icon6)
            infoRow6.append(infoFlatDescription.clone(true))
            infoRow6.append(p6.text(flats[i].flatDescription))

            //Charts
            let chartCol = $("<div class = 'chartCol mt-10'>")
            let chartRowCol = $("<div class = 'col-sm-3 mt-10'>")
            let p7 = $("<p>Some nice charts how much you have earned so far, flag if all bils have been paid, etc</p>");
            let p8 = $("<p>Some nice charts how much you have earned so far, flag if all bils have been paid, etc</p>");
            let p9 = $("<p>Some nice charts how much you have earned so far, flag if all bils have been paid, etc</p>");
            let additionalDiv2 = $("<div class='additional'>");
            row.append(chartRowCol)
            chartRowCol.append(additionalDiv2)
            additionalDiv2.prepend(chartCol)
            chartCol.append(p7)
            chartCol.append(p8)
            chartCol.append(p9)

            //Buttons
            let buttonCol = $("<div class = 'buttonCol mt-10'>")
            let buttonRowCol = $("<div class = 'col-sm-1 mt-10'>")
            let b1 = $("<p><button class='btn btn-orange openMeters'>Meters</button></p>");
            let button1 = $(b1).find("button");
            button1.attr("value", flats[i].id)
            let b2 = $("<p><button class='btn btn-orange rooms'>Rooms</button></p>");
            let button2 = $(b2).find("button");
            button2.attr("value", flats[i].id)
            let b3 = $("<p><button class='btn btn-orange'>Bills</button></p>");
            // let b4 = $("<p><button class='btn btn-orange'>Something</button></p>");

            let additionalDiv3 = $("<div class='additional'>");
            row.append(buttonRowCol)
            buttonRowCol.append(additionalDiv3)
            additionalDiv3.prepend(buttonCol)
            buttonCol.append(b1)
            buttonCol.append(b2)
            buttonCol.append(b3)
            // buttonCol.append(b4)


            button2.on('click', function () {
                let flatId = $(this).attr("value")
                console.log(flatId)
                getRooms(flatId)


            })

            function getRooms(flatId) {
                $.ajax({
                    type: 'get',
                    url: 'flats/getRooms/' + flatId,
                    dataType: 'json',
                    data: {},
                })
                    .done(function (data) {
                        console.log(data)
                        //Next Func
                        $("#modalRoomsEdit").modal()
                        // $("#tableDivToFeed").append(data.roomType)
                        addToShowTable(data.description, data.roomSquareMeters, data.expectedRentPrice, data.roomTypeSelect)

                    })
                    .fail(function (xhr, status, err) {
                        console.log(xhr)
                    });
            }

            //Edit/Delete
            let editDelCol = $("<div class = 'editDelCol mt-10'>")
            let editDelRowCol = $("<div class = 'col-sm-1 mt-10'>")
            let additionalDiv4 = $("<div class='additional'>");

            let editBtn = $("<a class='btn btn-xs pull-right btn-mixed-outline mr-2' href='flats/addFlat' id='flatEditBtn'/>")
            let editEm = $("<em class='fa fa-pencil-alt'/>")
            let additionalPEdit = $("<p>")
            editBtn.attr("value", flats[i].id)
            editBtn.attr("flatName", flats[i].name)
            additionalPEdit.append(editBtn)
            editBtn.append(editEm)

            let delBtn = $("<a class='btn btn-xs pull-right btn-mixed-outline mr-2' id='flatDelBtn'/>")
            let delEm = $("<em class='fa fa-trash-alt'/>")
            let additionalPDel = $("<p>")
            delBtn.attr("value", flats[i].id)
            delBtn.attr("flatName", flats[i].name)
            additionalPDel.append(delBtn)
            delBtn.append(delEm)

            row.append(editDelRowCol)
            editDelRowCol.append(additionalDiv4)
            additionalDiv4.append(editDelCol)
            editDelCol.append(additionalPEdit)
            editDelCol.append(additionalPDel)

            //Delete/Edit functions
            delBtn.on("click", function () {
                deleteEntity("following flat:", deleteFlat, flats[i].id)
            })

            editBtn.on("click", function () {
                editFlat(hiddenName);
            })
        }
    }

    function getAllFlats() {
        $.ajax({
            type: 'get',
            url: 'flats/allFlats',
            dataType: 'json',
            data: {},
        })
            .done(function (flats) {
                console.log("success");
                showFlatsInformation(flats);
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function deleteFlat(flatId) {
        $.ajax({
            type: 'delete',
            url: 'flats/delete/' + flatId,
        })
            .done(function () {
                getAllFlats();
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function editFlat(hiddenName) {
        $("#name").val("test")
        let flatId = '/flats/' + $("#flatEditBtn").attr("value")
        window.location.replace(flatId)

    }

    function getFlatById(flatId) {
        $.ajax({
            type: 'get',
            url: 'flats/' + flatId,
            dataType: "json",
            data: {},
        })
            .done(function (data) {
                console.log(data)
                $("#name").val("test")

            });
    }


    getAllFlats();
})