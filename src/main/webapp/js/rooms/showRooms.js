document.addEventListener("DOMContentLoaded", function () {

    let containerDiv = $(".containerDivRooms")
    containerDiv.empty();


    function showRooms() {
        let flat = $("#flatToShow").html()
        flatEditedParsed = JSON.parse(flat);
        let rooms = flatEditedParsed.rooms
        for (let i = 0; i < rooms.length; i++) {
            //occupable add if statement
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
                            data: [3, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(2, 99, 132, 0.2)',
                                'rgba(2, 162, 235, 0.2)',
                                'rgba(2, 206, 86, 0.2)',
                                'rgba(2, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(2, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(2, 99, 132, 1)',
                                'rgba(2, 162, 235, 1)',
                                'rgba(2, 206, 86, 1)',
                                'rgba(2, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(2, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        },
                            {
                                label: 'Income',
                                data: [3, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(2, 99, 132, 0.2)',
                                    'rgba(2, 162, 235, 0.2)',
                                    'rgba(2, 206, 86, 0.2)',
                                    'rgba(2, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(2, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(2, 99, 132, 1)',
                                    'rgba(2, 162, 235, 1)',
                                    'rgba(2, 206, 86, 1)',
                                    'rgba(2, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(2, 159, 64, 1)'
                                ],
                                borderWidth: 1,
                                stack: 2
                            },
                            {
                                label: 'Expected Income',
                                data: [4, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(2, 99, 132, 0.2)',
                                    'rgba(2, 162, 235, 0.2)',
                                    'rgba(2, 206, 86, 0.2)',
                                    'rgba(2, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(2, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(2, 99, 132, 1)',
                                    'rgba(2, 162, 235, 1)',
                                    'rgba(2, 206, 86, 1)',
                                    'rgba(2, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(2, 159, 64, 1)'
                                ],
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

        }

    }

    showRooms();
})
