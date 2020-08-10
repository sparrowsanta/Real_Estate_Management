document.addEventListener("DOMContentLoaded", function () {

    let containerDiv = $(".containerDivRooms")
    containerDiv.empty();
    //Info - Hidden
    let infoForIcon = $("#infoForIcon")
    let infoNotOccupable = $("#infoNotOccupable")
    let infoRoomType = $("#infoRoomType")
    let infoDescription = $("#infoDescription")
    let infoRoomSquareMeters = $("#infoRoomSquareMeters")
    let infoExpectedRentPrice = $("#infoExpectedRentPrice")


    function showRooms() {
        let flat = $("#flatToShow").html()
        flatEditedParsed = JSON.parse(flat);
        let rooms = flatEditedParsed.rooms

        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].occupable == 1) {
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

                // FirstCol
                //first row
                let p1 = $("<p>");
                let icon = $("<em class='fas fa-hand-holding-usd fa-2x mr-3 em'></em>")
                let infoForIcon2 = $("<h4 id='infoForIcon' class='mt-2'></h4>")
                let iconDiv = $("<div class='float-left'>")


                //Main HEADER
                infoForIcon2.text(infoForIcon.text())
                rowForInfo.append(infoRow)
                infoRow.prepend(iconDiv)
                iconDiv.prepend(icon)
                rowForInfo.prepend(infoForIcon2)

                infoRow.append(infoExpectedRentPrice.clone(true))
                infoRow.append(p1.text(rooms[i].expectedRentPrice))

                //sec row
                let p2 = $("<p>");
                let icon2 = $("<em class='fas fa-file-alt ml-2 fa-2x mr-3 em'></em>")
                let infoRow2 = $("<div class = 'infoRow3'>")
                let iconDiv2 = $("<div class='float-left'>")
                rowForInfo.append(infoRow2)
                infoRow2.prepend(iconDiv2)
                iconDiv2.prepend(icon2)
                infoRow2.append(infoDescription.clone(true))
                infoRow2.append(p2.text(rooms[i].description))

                //third row
                let p3 = $("<p>");
                let icon3 = $("<em class='fas fa-square fa-2x ml-1 mr-3 em'></em>")
                let infoRow3 = $("<div class = 'infoRow3'>")
                let iconDiv3 = $("<div class='float-left'>")
                rowForInfo.append(infoRow3)
                infoRow3.prepend(iconDiv3)
                iconDiv3.prepend(icon3)
                infoRow3.append(infoRoomSquareMeters.clone(true))
                infoRow3.append(p3.text(rooms[i].roomSquareMeters))


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
                infoRow4.append(infoRoomType.clone(true))
                infoRow4.append(p4.text(rooms[i].roomType))

                //sec row
                let p5 = $("<p>");
                let icon5 = $("<em class='fas fa-th-large fa-2x mr-3 em'></em>")
                let infoRow5 = $("<div class = 'infoRow5'>")
                let iconDiv5 = $("<div class='float-left'>")
                rowForInfo2.append(infoRow5)
                infoRow5.prepend(iconDiv5)
                iconDiv5.prepend(icon5)
                // infoRow5.append(infoRoomsNumber.clone(true))
                // infoRow5.append(p5.text(flats[i].roomsNumber))


                //thrid row
                /*            let p6 = $("<p>");
                            let icon6 = $("<em class='fas fa-file-alt mt-1 ml-1 fa-2x mr-3 em'></em>")
                            let infoRow6 = $("<div class = 'infoRow6'>")
                            let iconDiv6 = $("<div class='float-left'>")
                            rowForInfo2.append(infoRow6)
                            infoRow6.prepend(iconDiv6)
                            iconDiv6.prepend(icon6)*/
                // infoRow6.append(infoFlatDescription.clone(true))
                // infoRow6.append(p6.text(flats[i].flatDescription))


                //Charts
                let chartCol = $("<div class = 'chartCol'>")
                let chartRowCol = $("<div class = 'col-sm-3'>")
                let p8 = $("<canvas id='lineChart' class='lineCharts' width='400' height='200'></canvas>")

                let additionalDiv2 = $("<div class='additionalForGraph  mt-4 mb-3'>");
                row.append(chartRowCol)
                chartRowCol.append(additionalDiv2)
                additionalDiv2.prepend(chartCol)
                chartCol.append(p8)


                let myLineChart = $(".lineCharts")
                for (let i = 0; i < myLineChart.length; i++) {
                    let lineChart = new Chart(myLineChart[i], {
                        type: 'bar',
                        data: {
                            labels: ['June', 'July', 'August', 'September', 'October', 'November'],
                            datasets: [{
                                label: 'Income',
                                data: [20, 19, 22, 15, 20, 23],
                                backgroundColor:
                                    'rgba(2, 99, 132, 0.4)',
                                borderColor:
                                    'rgb(2, 99, 132, 1)',
                                borderWidth: 1
                            },
                                {
                                    label: 'Media',
                                    data: [3, 19, 3, 5, 2, 3],
                                    backgroundColor:
                                        'rgb(94,215,219, 0.4)',
                                    borderColor:
                                        'rgb(94,215,219)',
                                    borderWidth: 1,
                                    stack: 2
                                },
                                {
                                    label: 'Additional Cost',
                                    data: [4, 19, 3, 5, 2, 3],
                                    backgroundColor:
                                        'rgb(215,94,156, 0.4)',
                                    borderColor:
                                        'rgb(215,94,156)',
                                    borderWidth: 1,
                                    stack: 2

                                }

                            ]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                    stacked: true
                                }],
                                xAxes: [{
                                    stacked: true
                                }]
                            },
                        }
                    })

                }
                addEditAndDeleteButtons(rooms[i].id, row)
            } else {
                let imgRoom = $("<figure><a href='#' id='roomPicture' ><img class='img-fluid' src='img/flat.jpg'></a></figure>")
                let row = $("<div class='row'>");
                let rowForPic = $("<div class = 'col-sm-3 col3'>")
                let rowForInfo = $("<div class = 'col-sm-2'>")
                let infoRow = $("<div class = 'infoRow'>");
                let rowssborder = $("<div class='row-border'>")
                let containerDivNoOccupable = $(".containerDivRoomsNoOccupable");
                //Construction
                containerDivNoOccupable.append(rowssborder);
                rowssborder.append(row)
                row.prepend(rowForPic)
                row.append(rowForInfo);
                //Picture
                rowForPic.append(imgRoom)


                // FirstCol
                //first row
                let p1 = $("<p>");
                let icon = $("<em class='fas fa-hand-holding-usd fa-2x mr-3 em'></em>")
                let infoForIcon3 = $("<h4 id='infoForIcon' class='mt-2'></h4>")
                let iconDiv = $("<div class='float-left'>")

                //Main HEADER
                infoForIcon3.text(infoForIcon.text())
                rowForInfo.append(infoRow)
                infoRow.prepend(iconDiv)
                iconDiv.prepend(icon)
                rowForInfo.prepend(infoForIcon3)

                infoRow.append(infoDescription.clone(true))
                infoRow.append(p1.text(rooms[i].description))

                //sec row
                let p2 = $("<p>");
                let icon2 = $("<em class='fas fa-file-alt ml-2 fa-2x mr-3 em'></em>")
                let infoRow2 = $("<div class = 'infoRow3'>")
                let iconDiv2 = $("<div class='float-left'>")
                rowForInfo.append(infoRow2)
                infoRow2.prepend(iconDiv2)
                iconDiv2.prepend(icon2)
                infoRow2.append(infoRoomType.clone(true))
                infoRow2.append(p2.text(rooms[i].roomType))

                //third row
                let p3 = $("<p>");
                let icon3 = $("<em class='fas fa-square fa-2x ml-1 mr-3 em'></em>")
                let infoRow3 = $("<div class = 'infoRow3'>")
                let iconDiv3 = $("<div class='float-left'>")
                rowForInfo.append(infoRow3)
                infoRow3.prepend(iconDiv3)
                iconDiv3.prepend(icon3)
                infoRow3.append(infoRoomSquareMeters.clone(true))
                infoRow3.append(p3.text(rooms[i].roomSquareMeters))

            }

        }
    }

    showRooms();

    function addEditAndDeleteButtons(roomId, row) {
        //Edit/Delete
        let editDelCol = $("<div class = 'editDelCol mt-10'>")
        let editDelRowCol = $("<div class = 'col-sm-1 mt-10'>")
        let additionalDiv4 = $("<div class='additional'>");
        //TEMP
        // let flatIdRedirectUrl = "flats/addFlat/" + flats[i].id

        let editBtn = $("<a class='btn btn-xs pull-right btn-mixed-outline mr-2' id='btnModalRoom'/>")
        // editBtn.attr("href", flatIdRedirectUrl)
        let editEm = $("<em class='fa fa-pencil-alt'/>")
        let additionalPEdit = $("<p>")
        editBtn.attr("value", roomId)
        // editBtn.attr("flatName", flats[i].name)
        additionalPEdit.append(editBtn)
        editBtn.append(editEm)

        let delBtn = $("<a class='btn btn-xs pull-right btn-red-outline mr-2' id='roomDelBtn'/>")
        let delEm = $("<em class='fa fa-trash-alt'/>")
        let additionalPDel = $("<p>")
        delBtn.attr("value", roomId)
        // delBtn.attr("flatName", flats[i].name)
        additionalPDel.append(delBtn)
        delBtn.append(delEm)

        let furBtn = $("<a class='btn btn-xs pull-right btn-mixed-outline mr-2' id='furBtn'/>")
        let furEm = $("<em class='fa fa-couch'/>")
        let additionalPFur = $("<p>")
        furBtn.attr("value", roomId)
        // delBtn.attr("flatName", flats[i].name)
        additionalPFur.append(furBtn)
        furBtn.append(furEm)

        row.append(editDelRowCol)
        editDelRowCol.append(additionalDiv4)
        additionalDiv4.append(editDelCol)
        editDelCol.append(additionalPEdit)
        editDelCol.append(additionalPDel)
        editDelCol.append(additionalPFur)

        //Delete/Edit functions
        delBtn.on("click", function () {
            deleteEntity("following room", deleteRoom, roomId)
        })

        // editBtn.on("click", function () {
        //     editFlat(hiddenName);
        // })

        furBtn.on("click", function () {
            getFurniture(roomId)
        })

    }

    function deleteRoom(roomId) {
        let deleteAddress = '/Real_Estate_Management/rooms/delete/' + roomId;
        $.ajax({
            type: 'delete',
            url: deleteAddress,
        })
            .done(function () {
                showRooms();
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function getFurniture(roomId){
        $.ajax({
            type: 'get',
            url: 'rooms/furniture/' + roomId,
            dataType: 'json',
            data: {},
        })
            .done(function (data) {
                console.log(data)
                //Next Func
                $("#modalFurniture").modal()

                //Process Modal
                $("#btnSubmitRoomChange").on("click", function () {
                    // updateRoomsForFlat(flatId)
                })
                addToShowTableFurniture()
            })
            .fail(function (xhr, status, err) {
                console.log(xhr)
            });
    }

    function addToShowTableFurniture() {
        let furniture = $("#furnitureToShow").html()
        let data = JSON.parse(furniture);
        let defaultTr = $("<tr class='table-row'>")
        let defaultTd = $("<td>")
        let defaultBtnTd = $("<td><a class='btn btn-xs pull-right btn-mixed-outline mr-2'><em class='fa fa-trash-alt'></em></a></td>")
        let flatTableAdd = $(".table-ro")
        let iterationId = 1;
        for (let i = 0; i < data.length; i++) {

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
            rowValueDesc.append(data.description)
            rowValueSquareMeters.append(data.roomId)
            rowValueRentPrice.append(data.dateOfPurchase)
            rowValueTypeSelect.append(data.value)

            iterationId++;
            deleteFlatBtn.on("click", function () {
                $(this).parent().remove()
            })

        }
    }
})
