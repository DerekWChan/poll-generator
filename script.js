$(document).ready(function () {
    var pollExists = false;

    // Generate Poll Button
    $("#generatePoll").click(function() {
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
            $("#testPoll").append("<input id=\"answerButton\" type=\"submit\" value=\"Answer\">");
            pollExists = true;        
    });

    // Clear Fields Button
    $("#clearFields").click(function() {
        $("#pollNameInput").val("");
        $("#pollChoiceInput").val("");
    });

    // Answer Button
    $("#answerButton").click(function() {
        alert("Hello World");
        //var selectedAnswer = $("#pollChoices").options[pollChoices.selectedIndex].text;
        //$("#testArea").append(selectedAnswer);
    });
});