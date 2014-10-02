$(document).ready(function () {
    var pollExists = false;
    $("#generatePoll").click(function () {
        var pollName = $("#pollNameInput").val();
        var pollChoices = $("#pollChoiceInput").val().split('\n');
            if (pollExists) {
                $("#testPoll").remove();
                pollExists = false;
            }
            $("#testArea").append("<div id=\"testPoll\"></div>");
            $("#testPoll").append(pollName + "<br>");
            $("#testPoll").append("<select id=\"pollChoices\"><option value=\"defaultChoice\">Select...</option></select>");
            for (choice in pollChoices) {
                $("#pollChoices").append("<option>" + pollChoices[choice] + "</option>");
            }
            pollExists = true;
    });
    $("#clearFields").click(function () {
        // UNDER CONSTRUCTION TODO BLAH BLAH BLAH
    });
});