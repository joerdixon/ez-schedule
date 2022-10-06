// VARIABLES
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var currentDate;
var currentTime;

// The current hour represented as a number (military time).
var currentHour = Number(moment().format("H"));
var saveButton = $("img");

// FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Iterates 9 times where i is the hour we are checking, adjusts the color for each accordingly.
function setColors() {
    for (var i = 8; i < 18; i++) {
        if (currentHour < i) {
            $("[data-hour='"+ i +"']").addClass("future");
        } else if (currentHour > i) {
            $("[data-hour='"+ i +"']").addClass("past");
        } else {
            $("[data-hour='"+ i +"']").addClass("present");
        }
    }
}

// A function that checks local storage for any previously saved todos and adds them back to the appropriate hour.
function loadTodo() {
    for (var i = 8; i < 18; i++) {
        if (localStorage.getItem(i) !== null) {
            let storedTodo = localStorage.getItem(i);
            let currentTodo = $("[data-hour='"+ i +"']");
            currentTodo[0].children[1].value = JSON.parse(storedTodo).content;
        }
    }
}


// A function that, when the save button is clicked, will commit the text within that hour to the local storage.
function saveTodo(event) {
    // Saves the data-hour attribute of the save button selected
    let hourLine = event.target.parentElement.parentElement.getAttribute("data-hour");
    // Saves the actual content of the box as a string
    let hourContent = event.target.parentElement.parentElement.children[1].value;
    // Stringify the content and data-hour together
    localStorage.setItem(hourLine, JSON.stringify({hour: hourLine, content: hourContent}));
}

// EVENT LISTENERS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Saves the associated content on click.
saveButton.on("click", saveTodo)

// MAIN PROGRAM
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Every second we will update the world clock as well as the color of each section, then load any todos.
setInterval(
    function() {
        currentDate = moment().format("MMM Do, YYYY");
        currentTime = moment().format("hh:mm:ssa");
        $("#current-day").text(currentDate);
        $("#current-time").text(currentTime);
        setColors();
    }, 1000);
    loadTodo();