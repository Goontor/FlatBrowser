(function()
{
    var flatHub = $.connection.flatHub
    $.connection.hub.start()
        .done(function () {
            writeToPage("#welcome-messages", "Working!");
            flatHub.server.announce("Connected");
        })
        .fail(function () { writeToPage("#welcome-messages", "Not working"); });

    flatHub.client.announce = function (message) {
        console.log("trigger");
        writeToPage("#welcome-messages",message)
        console.log("end");
    }

    var writeToPage = function (selector,message) {
        $(selector).append(message + "</br>");
    }
})()
