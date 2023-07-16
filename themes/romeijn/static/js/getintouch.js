$(document).ready(function () {

    $("#getInTouchForm").submit(function (e) {


        e.preventDefault();

        var FNamere = /[A-Za-z]{1}[A-Za-z]/;
        if (!FNamere.test($("#fname-input").val())) {
            alert("Firstname can not be less than 2 char");
            return;
        }
        var LNamere = /[A-Za-z]{1}[A-Za-z]/;
        if (!LNamere.test($("#lname-input").val())) {
            alert("Lastname can not be less than 2 char");
            return;
        }
        if ($("#email-input").val() == "") {
            alert("Please enter your email id");
            return;
        }
        var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reeamil.test($("#email-input").val())) {
            alert("Please enter valid email address: ", $("#email-input").val());
            return;
        }
        if ($("#message-input").val() == "") {
            alert("Please enter your message");
            return;
        }

        var fname = $("#fname-input").val();
        var lname = $("#lname-input").val();
        var phone = $("#phone-input").val();
        var email = $("#email-input").val();
        var message = $("#message-input").val();
        var data = {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
            message: message
        };

        $.ajax({
            type: "POST",
            url: "https://dwxnwxdq2g.execute-api.us-east-1.amazonaws.com/TappWebContactUs",
            dataType: "json",
            crossDomain: "true",
            contentType: "application/json; charset=utf-8",
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            data: JSON.stringify(data),

            success: function () {
                // clear form and show a success message
                alert("Message Sent.  Expect a Prompt Reply.  Thank You.");
                document.getElementById("getInTouchForm").reset();
                location.reload();
            },
            error: function () {
                // show an error message
                alert("There was a problem sending the message.  Please email info@tappsolutions.com");
            }
        });
    }

    );
});
