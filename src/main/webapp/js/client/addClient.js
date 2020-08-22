document.addEventListener("DOMContentLoaded", function () {
    let btnSubmitClient = $("#btnSubmitClient")
    btnSubmitClient.on("click", function () {
        saveClient()

    })

    function saveClient() {
        data = {};
        feedClientDataToSend(data)
        $.ajax({
            type: 'post',
            url: '../clients/addClient',
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

    function feedClientDataToSend(dataToSend) {

        let firstName = $("#firstName").val()
        dataToSend.firstName = firstName
        dataToSend.lastName = $("#lastName").val()
        dataToSend.age = $("#age").val()
        dataToSend.email = $("#clientEmail").val()
        dataToSend.city = $("#city").val()
        dataToSend.street = $("#street").val()

        return dataToSend
    }

})
