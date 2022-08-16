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


//function to save in local storage

var saveBtn = document.querySelector(".saveBtn")
//onclick button to save the written text to local storage
$('.saveBtn').click(function(event){
    var id = $(this).parent().attr("id");
    var textA = $("tr .9").children().eq(1).children().val();
    var textarea = $(this).siblings('td').eq(0).children().val();
    console.log(id);
    console.log(textarea);


    //checks for local stoage
    var todo = []; 
    var checkStorage = JSON.parse(localStorage.getItem("todoList"));
    if (checkStorage) {
        for (var i = 0; i < checkStorage.length; i++){
            todo.push(checkStorage[i]);
        }
        //adds to local storage
        localStorage.setItem("todoList", JSON.stringify(todo));
    }

    //adds the new todo item to the todo list
    todo[todo.length] = {
        timeBlock: id,
        todoItem: textarea
    }
    localStorage.setItem("todoList", JSON.stringify(todo));

}); 