(function()
    {
    $.connection.hub.start()
        .done(function () {
            console.log("Working!")
            $.connection.flatHub.server.announce("Connected");
        })
        .fail(function () { alert("Not Working!") });

    $.connection.flatHub.client.announce = function (message) {
        console.log("trigger");
        $("#welcome-messages").append(message + "</br>");
        console.log("end");
    }
})()
