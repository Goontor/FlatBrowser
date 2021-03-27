(function()
{
    $("#get-time").on("click", function () {
        flatHub.server.getServerDateTime()
            .done(function (data) {
                writeToPage('#welcome-messages', data)
            })
            .fail(function (e) {
                writeToPage('#welcome-messages', e)
            });
        }
    );
    

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
