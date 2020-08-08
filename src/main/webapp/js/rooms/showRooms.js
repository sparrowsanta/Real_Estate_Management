document.addEventListener("DOMContentLoaded", function () {

    let containerDiv = $(".containerDivRooms")
    containerDiv.empty();

    function showRooms(rooms) {
        for (let i = 0; i < rooms.length; i++) {
            let imgRoom = $("<figure><a href='#' id='roomPicture' ><img class='img-fluid' src='img/flat.jpg'></a></figure>")
            let row = $("<div class='row'>");
            let rowForPic = $("<div class = 'col-sm-3 col3'>")
            let rowForInfo = $("<div class = 'col-sm-2'>")
            let infoRow = $("<div class = 'infoRow'>");
            let rowssborder = $("<div class='row-border'>")

            //Construction
            containerDiv.append(rowssborder);
            rowssborder.append(row)
            row.prepend(rowForPic)
            row.append(rowForInfo);
            //Picture
            rowForPic.append(imgRoom)


            //Info - Hidden
            let infoForIcon = $("#infoForIcon")
            let infoRoomType = $("#infoRoomType")
            let infoDescription = $("#infoDescription")
            let infoRoomSquareMeters = $("#infoRoomSquareMeters")
            let infoExpectedRentPrice = $("#infoExpectedRentPrice")

            // FirstCol
            //first row
            let p1 = $("<p>");
            let icon = $("<em class='fas fa-road fa-2x mr-3 em'></em>")
            let infoForIcon2 = $("<h4 id='infoForIcon' class='mt-2'></h4>")
            let iconDiv = $("<div class='float-left'>")


            //Main HEADER
            infoForIcon2.text(infoForIcon.text())
            rowForInfo.append(infoRow)
            infoRow.prepend(iconDiv)
            iconDiv.prepend(icon)
            rowForInfo.prepend(infoForIcon2)

            infoRow.append(infoRoomType.clone(true))
            infoRow.append(p1.text(rooms[i].city + " / " + rooms[i].roomType))
        }

    }
})
