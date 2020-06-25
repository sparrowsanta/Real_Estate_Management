document.addEventListener("DOMContentLoaded", function () {




    //Language settings:


    let containerDiv = $(".containerDiv")
    containerDiv.empty();
    function showFlatsInformation(flats) {
        containerDiv.empty();
        for (let i = 0; i < flats.length; i++) {
            let imgFlat = $("<figure><a href='#' id='flatPicture' ><img class='img-fluid' src='img/flat.jpg'></a></figure>")
            let p1 = $("<p>");
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


            rowForPic.append(imgFlat)


            //Construction
            containerDiv.append(rowssborder);
            rowssborder.append(row)
            row.prepend(rowForPic)

            //Picture
            rowForPic.append(imgFlat)

            // FirstCol
            //first row
            let icon = $("<a href='#'><img class = 'img-thumbnail float-left mr-2' src='img/flat_mini.jpg' width='40' height='40' alt='address'></a>")
            let infoForIcon2 = $("<h4 id='infoForIcon' class='mt-2'></h4>")
            row.append(rowForInfo);
            infoForIcon2.text(infoForIcon.text())
            rowForInfo.prepend(infoRow)
            infoRow.prepend(infoForIcon2)
            infoRow.append(icon)
            infoRow.append(infoStreet.clone(true))
            infoRow.append(p1.text(flats[i].city + " / " + flats[i].street))

            //sec row
            let p2 = $("<p>");
            let p3 = $("<p>");
            let icon2 = $("<a href='#'><img class = 'img-thumbnail float-left mt-6 mr-2' src='img/flat_mini.jpg' width='40' height='40' alt='address'></a>")
            let infoRow2 = $("<div class = 'infoRow2'>")
            rowForInfo.append(infoRow2)
            infoRow2.prepend(icon2)
            infoRow2.append(infoZipCode.clone(true))
            infoRow2.append(p2.text(flats[i].zipCode))

            //third row
            let icon3 = $("<a href='#'><img class = 'img-thumbnail float-left mt-6 mr-2' src='img/flat_mini.jpg' width='40' height='40' alt='address'></a>")
            let infoRow3 = $("<div class = 'infoRow3'>")
            rowForInfo.append(infoRow3)
            infoRow3.prepend(icon3)
            infoRow3.append(infoYearOfConstruction.clone(true))
            infoRow3.append(p3.text(flats[i].yearOfConstruction))

            //Sec Col
            //First Row
            let icon4 = $("<a href='#'><img class = 'img-thumbnail float-left mt-6 mr-2' src='img/flat_mini.jpg' width='40' height='40' alt='address'></a>")
            let infoRow4 = $("<div class = 'infoRow4 mt-10'>")
            let rowForInfo2 = $("<div class = 'col-sm-2 mt-10'>")
            let p4 = $("<p>");
            let additionalDiv = $("<div class='additional'>");
            row.append(rowForInfo2)
            rowForInfo2.append(additionalDiv)
            additionalDiv.prepend(infoRow4)
            infoRow4.append(icon4)
            infoRow4.append(infoFlatSquareMeters.clone(true))
            infoRow4.append(p4.text(flats[i].flatSquareMeters))

            //sec row
            let p5 = $("<p>");
            let icon5 = $("<a href='#'><img class = 'img-thumbnail float-left mt-6 mr-2' src='img/flat_mini.jpg' width='40' height='40' alt='address'></a>")
            let infoRow5 = $("<div class = 'infoRow5'>")
            rowForInfo2.append(infoRow5)
            infoRow5.prepend(icon5)
            infoRow5.append(infoRoomsNumber.clone(true))
            infoRow5.append(p5.text(flats[i].roomsNumber))


            //thrid row
            let p6 = $("<p>");
            let icon6 = $("<a href='#'><img class = 'img-thumbnail float-left mt-6 mr-2' src='img/flat_mini.jpg' width='40' height='40' alt='address'></a>")
            let infoRow6 = $("<div class = 'infoRow6'>")
            rowForInfo2.append(infoRow6)
            infoRow6.prepend(icon6)
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
            let buttonRowCol = $("<div class = 'col-sm-2 mt-10'>")
            let b1 = $("<p><button>Meters</button></p>");
            let b2 = $("<p><button>Rooms</button></p>");
            let b3 = $("<p><button>Bills</button></p>");
            let b4 = $("<p><button>Something</button></p>");

            let additionalDiv3 = $("<div class='additional'>");
            row.append(buttonRowCol)
            buttonRowCol.append(additionalDiv3)
            additionalDiv3.prepend(buttonCol)
            buttonCol.append(b1)
            buttonCol.append(b2)
            buttonCol.append(b3)
            buttonCol.append(b4)



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

    getAllFlats();
})