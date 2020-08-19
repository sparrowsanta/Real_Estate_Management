document.addEventListener("DOMContentLoaded", function () {

    let containerDiv = $(".containerDivRooms")
    let containerDivRoomsNoOccupable = $(".containerDivRoomsNoOccupable")
    containerDiv.empty();
    //Info - Hidden
    let infoForIcon = $("#infoForIcon")
    let infoNotOccupable = $("#infoNotOccupable")
    let infoRoomType = $("#infoRoomType")
    let infoDescription = $("#infoDescription")
    let infoRoomSquareMeters = $("#infoRoomSquareMeters")
    let infoExpectedRentPrice = $("#infoExpectedRentPrice")
    let iterationId = 1;

    //global roomID

    let flat = $("#flatToShow").html()
    flatEditedParsed = JSON.parse(flat);
    let rooms = flatEditedParsed.rooms

    function showRooms() {
        containerDiv.empty();
        containerDivRoomsNoOccupable.empty()
        flat = $("#flatToShow").html()
        flatEditedParsed = JSON.parse(flat);
        rooms = flatEditedParsed.rooms

        let figureGeneric = $("<figure><a href='#' ></a></figure>")
        let imgGeneric = $("<img class='img-fluid' src='#'>")
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].occupable == 1) {
                let figureRoom = figureGeneric.clone(true).attr("id", "pictureFor" + flats[i].id)
                let imgRoom = imgGeneric.clone(true)
                figureRoom.children().append(imgRoom)
                let roomPicture = getPictureForRoom(rooms[i].id);
                imgRoom.attr("src", "data:image/png;base64," + roomPicture);

                let row = $("<div class='row'>");
                let rowForPic = $("<div class = 'col-sm-3 col3'>")
                let rowForInfo = $("<div class = 'col-sm-2'>")
                let infoRow = $("<div class = 'infoRow'>");
                let rowssborder = $("<div class='row-border'>")
                rowssborder.attr("id", rooms[i].id)

                //Construction
                containerDiv.append(rowssborder);
                rowssborder.append(row)
                row.prepend(rowForPic)
                row.append(rowForInfo);
                //Picture
                rowForPic.append(figureRoom)

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
                let figureRoom = figureGeneric.clone(true)
                let imgRoom = img.clone(true)
                figureRoom.children().append(imgRoom)

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
                rowForPic.append(figureRoom)


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

                addEditAndDeleteButtons(rooms[i].id, row)
            }

        }
    }

    showRooms();

    function addEditAndDeleteButtons(roomId, row) {

        let editDelCol = $("<div class = 'editDelCol mt-10'>")
        let editDelRowCol = $("<div class = 'col-sm-1 mt-10'>")
        let additionalDiv4 = $("<div class='additional'>");
        //TEMP
        // let flatIdRedirectUrl = "flats/addFlat/" + flats[i].id

        let editBtn = $("<a class='btn btn-xs pull-right btn-mixed-outline mr-2' id='btnModalEditRoom'/>")
        // editBtn.attr("href", flatIdRedirectUrl)
        let editEm = $("<em class='fa fa-pencil-alt'/>")
        let additionalPEdit = $("<p>")
        editBtn.attr("value", roomId)
        // editBtn.attr("flatName", flats[i].name)
        additionalPEdit.append(editBtn)
        editBtn.append(editEm)

        let delBtn2 = $("<a class='btn btn-xs pull-right btn-red-outline mr-2' id='roomDelBtn'/>")
        let delEm = $("<em class='fa fa-trash-alt'/>")
        let additionalPDel = $("<p>")
        delBtn2.attr("value", roomId)
        // delBtn.attr("flatName", flats[i].name)
        additionalPDel.append(delBtn2)
        delBtn2.append(delEm)

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
        delBtn2.on("click", function () {
            deleteEntity("following room", deleteRoom, roomId)
        })

        editBtn.on("click", function () {
            editRoom(roomId);
        })

        furBtn.on("click", function () {
            getFurniture(roomId)
        })

    }

    function deleteRoom(roomId) {
        $.ajax({
            type: 'delete',
            url: '../../rooms/delete/' + roomId,
        })
            .done(function (data) {
                console.log(data)
                $("#1").remove()
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function getFurniture(roomId) {
        clearTheFurnitureModalList()
        iterationId = 1;
        $.ajax({
            type: 'get',
            url: '../../rooms/furniture/' + roomId,
            dataType: 'json',
            data: {},
        })
            .done(function (data) {
                console.log(data)
                //Next Func
                $("#modalFurniture").modal()

                removeActionFromFurnitureBtn()
                //Process Modal
                $("#btnSubmitFurnitureChange").on("click", function () {
                    updateFurnitureForFlat(roomId)
                })
                //Add Furniture
                $("#btnModalFurniture").on("click", function () {
                    $("#addFurnitureModal").modal()

                })
                $("#btnAddFurnitureModal").on("click", function () {
                    saveFurnitureInFrontEnd(roomId)
                })
                addToShowTableFurniture(data)

            })
            .fail(function (xhr, status, err) {
                console.log(xhr)
            });
    }

    function addToShowTableFurniture(data) {
        let furniture = $("#furnitureToShow").html()
        let defaultTr = $("<tr class='table-row dataFurniture' >")
        let defaultTd = $("<td>")
        let defaultBtnTd = $("<td><a class='btn btn-xs pull-right btn-mixed-outline mr-2'><em class='fa fa-trash-alt'></em></a></td>")
        let flatTableAdd = $(".table-ro")
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
            rowValueDesc.append(data[i].description)
            rowValueSquareMeters.append(data[i].roomId)
            rowValueRentPrice.append(data[i].dateOfPurchase)
            rowValueTypeSelect.append(data[i].value)

            iterationId++;
            deleteFlatBtn.on("click", function () {
                $(this).parent().remove()
            })

            $("#btnBackRoomsAll").on("click", function () {
                backToRooms2()
            })

        }
    }

    function updateFurnitureForFlat(roomId) {
        let dataFeedRoomsModal = $("#furnitureTheadOwn").children()
        let dataToSend = feedFurnitureFromModalToJson(dataFeedRoomsModal)
        console.log(dataToSend)

        let urlToSend = '../../rooms/furniture/update/' + roomId
        $.ajax({
            type: 'post',
            url: urlToSend,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(dataToSend),

        })
            .done(function (data) {
                clearTheFurnitureModalList()
                $("#modalFurniture").modal('hide');
            })
    }

    function feedFurnitureFromModalToJson(dataFeedRoomsModal) {
        let furnitureToSendT = []
        for (let j = 1; j < dataFeedRoomsModal.length; j++) {
            let furnitureToSendL = {}
            furnitureToSendL.description = dataFeedRoomsModal.eq(j).find(':nth-child(2)').text();
            furnitureToSendL.roomId = dataFeedRoomsModal.eq(j).find(':nth-child(3)').text();
            furnitureToSendL.dateOfPurchase = dataFeedRoomsModal.eq(j).find(':nth-child(4)').text()
            furnitureToSendL.value = dataFeedRoomsModal.eq(j).find(':nth-child(5)').text()
            furnitureToSendT.push(furnitureToSendL)
        }
        return furnitureToSendT;
    }

    function clearTheFurnitureModalList() {
        let toEmpty = $("#furnitureTheadOwn").find(".dataFurniture")
        toEmpty.remove()
    }

    function saveFurnitureInFrontEnd(roomId) {
        let furnitureToSendL = {}
        let furnitureToSendT = []

        furnitureToSendL.description = $("#furnitureDescription").val()
        furnitureToSendL.roomId = roomId
        furnitureToSendL.dateOfPurchase = $("#dateOfPurchase").val()
        furnitureToSendL.value = $("#value").val()
        furnitureToSendT.push(furnitureToSendL)

        addToShowTableFurniture(furnitureToSendT)

        $("#addFurnitureModal").modal('hide');

    }

    function editRoom(roomId) {

        $("#modalEditRooms").modal()
        $.ajax({
            type: 'get',
            url: '../../rooms/' + roomId,
            dataType: "json",
            data: {},
        })
            .done(function (data) {
                console.log(data)

                // let descriptionEdit = $("#infoDescription").next().text()
                // let roomSquareMetersEdit = $("#infoRoomSquareMeters").next().text()
                // let expectedRentPriceEdit = $("#infoExpectedRentPrice").next().text()
                // let roomTypeEdit = $("#infoRoomType").next().text()

                $("#expectedRentPriceEdit").val(data.expectedRentPrice)
                $("#roomSquareMetersEdit").val(data.roomSquareMeters)
                $("#roomDescriptionEdit").val(data.description)
                // $("#roomTypeSelectEdit").val(roomTypeEdit)
                let typesOfRoom = ["ROOM", "BATHROOM", "TOILET", "KITCHEN", "HALL", "BALCONY", "GARDEN", "GARAGE", "BASEMENT"];
                $("#roomTypeSelectEdit").select2({
                    data: typesOfRoom
                })
            });


        $("#btnConfirmFlat").on('click', function () {
            saveEditedRoom(roomId)
        })

        $("#btnBackRoomsAll").on("click", function () {
            backToRooms()
        })


    }

    function backToRooms() {
        $("#modalEditRooms").modal('hide');
    }

    function backToRooms2() {
        $("#modalFurniture").modal('hide');
    }


    function saveEditedRoom(roomId) {
        let data = {}
        data.expectedRentPrice = $("#expectedRentPriceEdit").val()

        $.ajax({
            type: 'put',
            url: '../../rooms/' + roomId,
            dataType: "json",
            data: data,
        })
            .done(function (data) {
                let redirectPoint = '../../flats/showAllRooms/' + data.flatId;
                window.location.replace(redirectPoint)
            });


    }

    function removeActionFromFurnitureBtn() {
        $("#btnSubmitFurnitureChange").off()
        $("#btnModalFurniture").off()
        $("#btnAddFurnitureModal").off()
    }

    function getPictureForRoom(roomId) {
        let pictureUrl = null;
        $.ajax({
            async: false,
            type: 'get',
            url: 'rooms/roomPicture/' + roomId,
            dataType: "json",
            data: {}
        })
            .done(function (data) {
                pictureUrl = data
            })
        return pictureUrl;
    }

})


