document.addEventListener("DOMContentLoaded", function () {
    let defaultTr = $("<tr class='table-row'>")
    let defaultTd = $("<td>")
    let defaultBtnTd = $("<td><a class='btn btn-xs pull-right btn-red-outline deleteClientBtn mr-2'><em class='fa fa-trash-alt'></em></a></td>")
    let defaultBtnEdit = $("<a class='btn btn-xs pull-right btn-mixed-outline editClientBtn mr-2'><em class='fa fa-pencil-alt'></em></a>")
    let iterationId = 1;
    getAllClients()


    function getAllClients() {
        $.ajax({
            type: 'get',
            url: '../clients/showClientsAll',
            dataType: 'json',
            data: {},
        })
            .done(function (clients) {
                showClientsInformation(clients);
            })
            .fail(function (xhr, status, err) {
                console.log(xhr.statusText);
                console.log(status);
                console.log(err);
            });
    }

    function showClientsInformation(clients) {
        for (let i = 0; i < clients.length; i++) {
            let rowTr = defaultTr.clone(true);
            let rowId = defaultTd.clone(true)
            let rowValueFirstName = defaultTd.clone(true)
            let rowValueLastName = defaultTd.clone(true)
            let rowValueAge = defaultTd.clone(true)
            let rowValueEmail = defaultTd.clone(true)
            let rowValueTelNumber = defaultTd.clone(true)
            let rowValueCity = defaultTd.clone(true)
            let rowValueStreet = defaultTd.clone(true)
            let deleteClientBtn = defaultBtnTd.clone(true)
            let editClientBtn = defaultBtnEdit.clone(true)
            let flatTableAdd = $("#headersClientsShow")

            flatTableAdd.after(rowTr)

            //Add column to row
            rowTr.append(rowId)
            rowTr.append(rowValueFirstName)
            rowTr.append(rowValueLastName)
            rowTr.append(rowValueAge)
            rowTr.append(rowValueEmail)
            rowTr.append(rowValueTelNumber)
            rowTr.append(rowValueCity)
            rowTr.append(rowValueStreet)
            rowTr.append(deleteClientBtn.append(editClientBtn))
            // rowTr.append(editClientBtn)

            //Add value to column
            rowId.append(iterationId)
            rowValueFirstName.append(clients[i].firstName)
            rowValueLastName.append(clients[i].lastName)
            rowValueAge.append(clients[i].age)
            rowValueEmail.append(clients[i].email)
            rowValueTelNumber.append(clients[i].telNumber)
            rowValueCity.append(clients[i].city)
            rowValueStreet.append(clients[i].street)

            iterationId++;

            $(".deleteClientBtn").on("click", function () {
                deleteEntity("following client:", deleteClient, clients[i].id)
            })

            $(".editClientBtn").on("click", function () {
                $("#modalClients").modal()
                $("#btnBackClients").on("click", function () {
                    $("#modalClients").modal('hide')
                })
                getClientById(clients[i].id)
                $("#btnEditClient").on("click", function () {
                    editClient(clients[i].id)
                })
            })

        }
        return iterationId;
    }

    function deleteClient(clientId) {
        $.ajax({
            type: "delete",
            url: "../clients/deleteClient/" + clientId
        }).done(function () {
            getAllClients()
        }).fail(function (xhr, status, err) {
            console.log(xhr.statusText);
            console.log(status);
            console.log(err);
        })
    }

    function getClientById(clientId) {
        $.ajax({
            type: "get",
            url: "../clients/getClient/" + clientId,
            dataType: 'json',
            data: {},
        }).done(function (data) {
            feedDataToClient(data)
        }).fail(function (xhr, status, err) {
            console.log(xhr.statusText);
            console.log(status);
            console.log(err);
        })
    }

    function feedDataToClient(data) {
        $("#firstName").val(data.firstName)
        $("#lastName").val(data.lastName)
        $("#age").val(data.age)
        $("#email").val(data.email)
        $("#telNumber").val(data.telNumber)
        $("#city").val(data.city)
        $("#street").val(data.street)
    }

    function editClient(clientId) {
        saveEditedClient(clientId)
    }

    function saveEditedClient(clientId) {
        data = {};
        feedClientDataToSend(data)
        $.ajax({
            type: 'put',
            url: '../clients/addClient/' + clientId,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
        }).done(function (data) {
            console.log(data)
            if (data === "OK") {
                $(".alert-success").css('display', 'inline-block');
            }
        }).fail(function (xhr, status, err) {
            console.log(xhr.statusText);
            console.log(status);
            console.log(err);
        });

    }
})

