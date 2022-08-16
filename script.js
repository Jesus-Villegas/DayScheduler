//displays the current day
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

//variable for the current time
var currentTime = moment().format("k");
var time = parseInt(currentTime, 10);

var table = $('table');

for (var i = 9; i < 18; i++ ) {
    // determines when the time block is either in the: past,present, or future
    if (i > time){
        $('#' + i).removeClass('past');
        $('#' + i).addClass('future');
    }
    else if (i == currentTime) {
        $('#' + i).removeClass('past');
        $('#' + i).addClass('present');
    }
}
//Displays what you input in text area
var todo = []; 
todo = JSON.parse(localStorage.getItem("todoList"));
if (todo != null){
    for (var i = 0; i < todo.length; i ++){
        var storedId = todo[i].timeBlock;
        console.log(storedId);
        $("#" + storedId).children().eq(1).text(todo[i].todoItem); 
        $("#" + storedId).children().eq(1).attr("style", "color: black"); 
    }
}


