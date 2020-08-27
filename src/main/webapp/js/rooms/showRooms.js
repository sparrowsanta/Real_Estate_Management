document.addEventListener("DOMContentLoaded", function () {

    let containerDiv = $(".containerDivRooms")
    let containerDivRoomsNoOccupable = $(".containerDivRoomsNoOccupable")
    containerDiv.empty();
    //Info - Hidden
    let infoForIcon = $("#infoForIcon")
    let infoNotOccupable = $("#infoNotOccupable")
    let infoTenant = $("#infoTenant")
    let infoRoomType = $("#infoRoomType")
    let infoDescription = $("#infoDescription")
    let infoRoomSquareMeters = $("#infoRoomSquareMeters")
    let infoExpectedRentPrice = $("#infoExpectedRentPrice")
    let infoShowRents = $("#infoShowRents")

    let iterationId = 1;
    let b1 = $("<p><button class='btn btn-mixed-outline addRent' style='width: 120px'></button></p>");
    let formRentsHistory = $("#rentHistoryForm");
    //global roomID

    let flat = $("#flatToShow").html()
    flatEditedParsed = JSON.parse(flat);
    let rooms = flatEditedParsed.rooms

    function showRooms() {
        containerDiv.empty();
        containerDivRoomsNoOccupable.empty()
        flat = $("#flatToShow").html()
        flatEditedParsed = JSON.parse(flat);

        let test = getAllRoomsForFlat(flatEditedParsed.id)

        let figureGeneric = $("<figure><a href='#' ></a></figure>")
        let imgGeneric = $("<img class='img-fluid' src='#'>")
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].occupable == 1) {
                let figureRoom = figureGeneric.clone(true).attr("id", "pictureFor" + rooms[i].id)
                let roomPicture = getPictureForRoom(rooms[i].id);
                let imgRoom = imgGeneric.clone(true)
                if (roomPicture === "") {
                    let uploadBtnRoom = $("<input id='fileid' type='file'/>")
                    uploadRoomPicIfDoesNotHave(figureRoom.children(), rooms[i].id)

                } else {
                    imgRoom.attr("src", "data:image/png;base64," + roomPicture);
                    figureRoom.children().append(imgRoom)
                }


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
                p2.addClass("roomDescription");
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
                let icon4 = $("<em class='fas fa-square fa-2x mr-3 em'></em>")
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
                let icon5 = $("<em class='fas fa-male fa-2x mr-2 em'></em>")
                let infoRow5 = $("<div class = 'infoRow5'>")
                let iconDiv5 = $("<div class='float-left'>")
                rowForInfo2.append(infoRow5)
                infoRow5.prepend(iconDiv5)
                iconDiv5.prepend(icon5)
                infoRow5.append(infoTenant.clone(true))
                infoRow5.append(p5.text(rooms[i]))


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
                addAdditionalButtons(rooms[i], rooms[i].id, row)
                addEditAndDeleteButtons(rooms[i].id, row)

            } else {
                let figureRoom = figureGeneric.clone(true)
                let imgRoom = imgGeneric.clone(true)
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

    function getAllRoomsForFlat(flatId) {
        $.ajax({
            type: 'get',
            url: '../../rooms/roomsForFlat/' + flatId,
            dataType: "json",
            data: {},
        })
            .done(function (data) {
                console.log(data)
            });
    }

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

    function addAdditionalButtons(room, roomId, row) {

        let additionalBtnCol = $("<div class = 'editDelCol mt-10'>")
        let additionalBtnRowCol = $("<div class = 'col-sm-1 mt-10'>")
        let additionalDiv5 = $("<div class='additional'>");
        let btn1 = b1.clone(true)
        let button1 = $(btn1).find("button");
        let attrForBtn = "rentShow" + roomId
        button1.attr("value", roomId)
        button1.attr("id", attrForBtn)
        button1.text(infoShowRents.text())

        row.append(additionalBtnRowCol)
        additionalBtnRowCol.append(additionalDiv5)
        additionalDiv5.append(additionalBtnCol)
        additionalBtnCol.append(btn1)
        document.getElementById(attrForBtn).addEventListener("click", function () {
            //History
            getRentHistory(roomId)
        })
    }

    function deleteRoom(roomId) {
        $.ajax({
            type: 'delete',
            url: '../../rooms/delete/' + roomId,
        })
            .done(function (data) {
                console.log(data)
                // $("#1").remove()
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
        clearTheFurnitureModalList()
        let defaultTr = $("<tr class='table-row dataFurniture' >")
        let defaultTd = $("<td>")
        let defaultBtnTd = $("<td><a class='btn btn-xs pull-right btn-mixed-outline delFurnitureBtn mr-2'><em class='fa fa-trash-alt'></em></a></td>")
        let defaultBtnEdit = $("<a class='btn btn-xs pull-right btn-mixed-outline editFurnitureBtn mr-2'><em class='fa fa-pencil-alt'></em></a>")
        let flatTableAdd = $(".table-ro")
        for (let i = 0; i < data.length; i++) {

            let rowTr = defaultTr.clone(true);

            let rowId = defaultTd.clone(true)
            let rowValueDesc = defaultTd.clone(true)
            let rowValueSquareMeters = defaultTd.clone(true)
            let rowValueRentPrice = defaultTd.clone(true)
            let rowValueTypeSelect = defaultTd.clone(true)
            let editClientBtn = defaultBtnEdit.clone(true).on("click", function () {
                $("#addFurnitureModal").modal()
                $("#btnBackFurniture").on("click", function () {
                    $("#addFurnitureModal").modal('hide')
                })
                getFurnitureById(data[i].id)
            })

            let deleteFlatBtn = defaultBtnTd.clone(true).on("click", function () {
                deleteEntity("furniture ", deleteFurnitureById, data[i].id)
            })
            deleteFlatBtn.attr("value", data[i].id)

            flatTableAdd.after(rowTr)

            //Add column to row
            rowTr.append(rowId)
            rowTr.append(rowValueDesc)
            rowTr.append(rowValueSquareMeters)
            rowTr.append(rowValueRentPrice)
            rowTr.append(rowValueTypeSelect)
            rowTr.append(deleteFlatBtn.append(editClientBtn))

            //Add value to column
            rowId.append(iterationId)
            rowValueDesc.append(data[i].description)
            rowValueSquareMeters.append(data[i].roomId)
            rowValueRentPrice.append(data[i].dateOfPurchase)
            rowValueTypeSelect.append(data[i].value)

            iterationId++;
            /*            $(".delFurnitureBtn").on("click", function () {
                            deleteEntity("furniture ", deleteFurnitureById, data[i].id)
                            $(this).parent().parent().remove()
                        })*/

            $("#btnBackRoomsAll").on("click", function () {
                console.log("test")
                backToRooms2()
            })

        }
    }

    function deleteFurnitureById(furnitureId) {
        $.ajax({
            type: 'delete',
            url: '../../rooms/furniture/' + furnitureId,
        })
            .done(function () {
                addToShowTableFurniture(data)
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function getFurnitureById(furnitureId) {
        $.ajax({
            type: 'get',
            url: '../../rooms/furnitureById/' + furnitureId,
            dataType: "json",
            contentType: "application/json",
            data: {},

        })
            .done(function (data) {
                $("#furnitureDescription").val(data.description)
                $("#dateOfPurchase").val(parseLocalDateToYYYYmmDD(data.dateOfPurchase))
                $("#value").val(data.value)
            })
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
        $("#btnBackRoomsEdit").off()
        $("#modalEditRooms").modal()
        $.ajax({
            type: 'get',
            url: '../../rooms/' + roomId,
            dataType: "json",
            data: {},
        })
            .done(function (data) {
                $("#expectedRentPriceEdit").val(data.expectedRentPrice)
                $("#roomSquareMetersEdit").val(data.roomSquareMeters)
                $("#roomDescriptionEdit").val(data.description)
                // $("#roomTypeSelectEdit").val(roomTypeEdit)
                let typesOfRoom = ["ROOM", "BATHROOM", "TOILET", "KITCHEN", "HALL", "BALCONY", "GARDEN", "GARAGE", "BASEMENT"];
                $("#roomTypeSelectEdit").select2({
                    placeholder: "Select a type",
                    allowClear: true,
                    data: typesOfRoom
                })
            });


        $("#btnConfirmFlat").on('click', function () {
            saveEditedRoom(roomId)
        })

        $("#btnBackRoomsEdit").on("click", function () {
            backToRooms()
        })


    }

    function backToRooms() {
        $("#modalEditRooms").modal('hide');
    }

    function backToRooms2() {
        $("#modalFurniture").modal('hide');
    }

    function backToRooms3() {
        $("#modalRentAdd").modal('hide')
    }

    function backToRooms4() {
        $("#modalRent").modal('hide')
    }


    function saveEditedRoom(roomId) {
        let data = {}
        data.expectedRentPrice = $("#expectedRentPriceEdit").val()
        data.description = $("#roomDescriptionEdit").val()
        data.roomSquareMeters = $("#roomSquareMetersEdit").val()
        data.roomType = $("#roomTypeSelectEdit").val()

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
            url: '../../rooms/roomPicture/' + roomId,
            dataType: "json",
            data: {}
        })
            .done(function (data) {
                pictureUrl = data
            })
        return pictureUrl;
    }

    function uploadRoomPicIfDoesNotHave(data, roomId) {
        let formUpload = $("<form method='post' enctype='multipart/form-data' action='#'></form>")
        formUpload.attr("action", "../../rooms/roomPicture/" + roomId)
        let tableUpload = $("<table></table>")
        let uploadPicRoom = $("<tr><td><input  class='btn-dark-blue mt-4 ml-5 fileuploadRoom' style='display: none' type='file' name='roomFilePic'></td></tr>")
        uploadPicRoom.children().children().attr("id", "fileuploadRoom" + roomId)
        let submitPicRoom = $("<tr><td><input class='btn-dark-blue mt-4 ml-5' type='submit' style='width: 100px' value='Upload'></td></tr>")
        let buttonToUpload = $("<button class='btn-dark-blue addfiles ml-5 mt-5' style='width: 100px'>Choose File</button>")
        data.append(formUpload.append(tableUpload.append(uploadPicRoom).append(buttonToUpload).append(submitPicRoom)))

        $('.addfiles').on('click', function () {
            $('.fileuploadRoom').click();
            return false;
        });
    }

    function showAvailableClientsToAssign() {
        $.ajax({
            type: 'get',
            url: '../../clients/showClientsAll',
            dataType: 'json',
            data: {},
        })
            .done(function (clients) {
                let clientsData = []

                for (let i = 0; i < clients.length; i++) {
                    let singleClient = {}
                    singleClient.id = clients[i].id
                    singleClient.text = clients[i].firstName + " " + clients[i].lastName
                    clientsData.push(singleClient)
                }
                clientsData.push({})
                $("#clientTypeSelect").select2({
                    data: clientsData,
                    placeholder: "Choose Client"
                })
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }


    function saveRentForRoom(roomId) {
        let dataRent = feedDataFromRentModal(roomId);
        console.log(dataRent)
        $.ajax({
            type: 'post',
            url: '../../rents/' + roomId,
            dataType: 'json',
            data: dataRent,
        })
            .done(function (data) {
                $("#modalRentAdd").modal('hide')
                getRentHistory(data.room.id)
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });

    }

    function feedDataFromRentModal(roomId) {
        dataRent = {}
        dataRent.clientId = $("#clientTypeSelect").val()
        dataRent.rentDateFrom = $("#rentDateFrom").val()
        dataRent.rentDateTo = $("#rentDateTo").val()
        dataRent.rentAmount = $("#rentAmount").val()
        dataRent.rentRoom = roomId

        return dataRent;

    }

    function assignButtonsOnRentScreen(roomId) {
        let btnSaveRent = $("#btnSaveRent")
        btnSaveRent.off()
        $("#btnBackRoomsRent").on("click", function () {
            backToRooms3()
        })
        btnSaveRent.attr("value", roomId)
        btnSaveRent.val(roomId).on("click", function () {
            saveRentForRoom(roomId)
        })
    }


    function createHistoryList(data, roomId) {
        let btnBackRoomsRentAssign = $("#btnBackRoomsRentAssign")
        let btnAssignRent = $("#btnAssignRent")
        btnAssignRent.off()


        let infoRentDateFrom = $("#infoRentDateFrom").text()
        let infoRentClient = $("#infoRentClient").text()
        let infoRentDateTo = $("#infoRentDateTo").text()
        let infoRentAmount = $("#infoRentAmount").text()

        let rentHistoryList = $("#rentHistoryList")

        rentHistoryList.empty();

        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let newLi = $("<li>");
                let newDiv = $("<div>");
                let newDiv2 = $("<div>");
                let newP1 = $("<p>");
                let newP2 = $("<p>");
                let newP3 = $("<p>");
                let newEmFrom = $("<em>");
                let newEmTo = $("<em>");
                let newEmValue = $("<em>");
                let newEmClient = $("<em>");
                let btnDelete = $("<a>");
                let btnDeleteEm = $("<em>");
                let btnEdit = $("<a>");
                let btnEditEm = $("<em>");
                let divFormRow = $("<div class='form-row' id='rentFormRow'>")
                let divFormGroup = $("<div class='form-group mr-3 col-md-12'>")


                newLi.addClass("timeline-item bg-main-theme rounded ml-4 p-4 shadow");
                newDiv.addClass("timeline-arrow-rent");
                newP1.addClass("text-small mt-2 font-weight-light");
                newP2.addClass("text-small mt-2 font-weight-light");
                newP3.addClass("text-small mt-2 font-weight-light");
                newEmFrom.addClass("far fas fa-calendar-day mr-3");
                newEmTo.addClass("far fas fa-calendar-check mr-3");
                newEmValue.addClass("fas fa-hand-holding-usd mr-3");
                newEmClient.addClass("fas fa-male ml-4 mr-3");
                newP1.append(newEmFrom);
                newP2.append(newEmTo);
                newP3.append(newEmValue);
                let rentDateFrom = data[i].rentDateFrom.year + "." +
                    (data[i].rentDateFrom.month > 9 ? data[i].rentDateFrom.month : "0" + data[i].rentDateFrom.month) + "." +
                    (data[i].rentDateFrom.day > 9 ? data[i].rentDateFrom.day : "0" + data[i].rentDateFrom.day);
                let rentDateTo = data[i].rentDateTo.year + "." +
                    (data[i].rentDateTo.month > 9 ? data[i].rentDateTo.month : "0" + data[i].rentDateTo.month) + "." +
                    (data[i].rentDateTo.day > 9 ? data[i].rentDateTo.day : "0" + data[i].rentDateTo.day);
                newP1.append(infoRentDateFrom + ": " + rentDateFrom);
                newP1.append(newEmClient)
                newP1.append(infoRentClient + ": " + data[i].client.firstName + " " + data[i].client.lastName)
                newP2.append(infoRentDateTo + ": " + rentDateTo);
                newP3.append(infoRentAmount + ": " + data[i].rentAmount);


                btnDeleteEm.addClass("fas fa-trash-alt");
                btnEditEm.addClass("fas fa-pencil-alt");
                btnDelete.addClass("btn btn-xs float-right btn-mixed-outline mr-2").attr("value", data[i].id).on("click", function () {
                    deleteEntity(" rent for that client: " + data[i].client.firstName + " " + data[i].client.lastName, deleteRent, data[i].id)
                });
                btnEdit.addClass("btn btn-xs float-right btn-mixed-outline mr-2").attr("value", data[i].id);
                btnEdit.append(btnEditEm);
                btnDelete.append(btnDeleteEm);

                newDiv2.append(btnEdit);
                newDiv2.append(btnDelete);
                newDiv2.append(newP1);
                newDiv2.append(newP2);
                newDiv2.append(newP3);
                newLi.append(newDiv);
                newLi.append(newDiv2);

                divFormRow.append(divFormGroup.append(newLi))
                rentHistoryList.append(divFormRow);

                btnAssignRent.on("click", function () {
                    addNewRentToRoom(data[i].room, roomId)
                })
                btnEdit.off()
                btnEdit.on("click", function () {
                    editRentToRoom(data[i], roomId)
                })

                btnBackRoomsRentAssign.on("click", function () {
                    backToRooms4()
                })
            }
        }
    }


    function getRentHistory(roomId) {
        $("#modalRent").modal()
        $.ajax({
            type: 'get',
            url: '../../rooms/roomRentHistory/' + roomId,
            dataType: 'json',
            data: {},
        })
            .done(function (data) {
                createHistoryList(data, roomId);
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function deleteRent(rentId) {
        $.ajax({
            type: 'delete',
            url: '../../rooms/rentHistory/' + rentId,
        })
            .done(function (data) {
                $(this).parent().parent().remove()
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function getRentHistoryById(rentId) {
        $.ajax({
            type: 'get',
            url: '../../rents/rentHistory/' + rentId,
            dataType: 'json',
            data: {},
        })
            .done(function (data) {
                // dataRent.clientId = $("#clientTypeSelect").val()
                if (data !== null) {
                    $("#rentDateFrom").val(parseLocalDateToYYYYmmDD(data.rentDateFrom))
                    $("#rentDateTo").val(parseLocalDateToYYYYmmDD(data.rentDateTo))
                    $("#rentAmount").val(data.rentAmount)
                    $("#rentRoom").val(data.room.description)
                }
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function addNewRentToRoom(room, roomId) {
        $("#modalRentAdd").find("input").val("")
        $("#modalRentAdd").modal()
        showAvailableClientsToAssign()
        assignButtonsOnRentScreen(roomId)
        $("#rentRoom").val(room.description)
    }

    function editRentToRoom(rent, roomId) {
        $("#modalRentAdd").modal()
        showAvailableClientsToAssign()
        getRentHistoryById(rent.id)
        assignButtonsOnRentScreenEdit(rent.room.id)
        // $("#rentRoom").val(room.description)

    }


    function assignButtonsOnRentScreenEdit(rent, roomId) {
        let btnSaveRent = $("#btnSaveRent")
        btnSaveRent.off()
        $("#btnBackRoomsRent").on("click", function () {
            backToRooms3()
        })
        btnSaveRent.attr("value", roomId)
        btnSaveRent.val(roomId).on("click", function () {
            editRentForRoom(rent.id, roomId)
        })
    }

    function editRentForRoom(rentId, roomId) {
        let data = feedDataFromRentModal(roomId)
        $.ajax({
            type: 'put',
            url: '../../rents/' + rentId,
            dataType: "json",
            data: data,
        })
            .done(function (data) {
                $("#modalRentAdd").modal('hide')
                getRentHistory(roomId)
            });

    }

})

function parseLocalDateToYYYYmmDD(entity) {
    let parsedDate = entity.year + "-" +
        (entity.month > 9 ? entity.month : "0" + entity.month) + "-" +
        (entity.day > 9 ? entity.day : "0" + entity.day);

    return parsedDate;
}


