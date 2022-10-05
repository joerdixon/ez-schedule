// Timer at the top of the page.
var currentDate;
var currentTime;

setInterval(
    function() {
        currentDate = moment().format("MMM Do, YYYY");
        currentTime = moment().format("hh:mm:ssa");
        $("#current-day").text(currentDate);
        $("#current-time").text(currentTime);
    }, 1000);

// A function that checks local storage for any previously saved todos and adds them back to the appropriate hour.
    /* 
    On page load,
    for each hour
    if localStorage.getItem("i(thehourwearechecking)" !== null)
        hour.textContent(savedContent)
    */

// An interval based method that checks what time it is and changes classes on timeblocks every hour.
    /*
    For Each Hour {
        if currentTime is before the current hour
            hour.addClass(.past)
        else if currentTime is after the current hour
            hour.addClass(.future)
        else 
            hour.addClass(.present)
    }
    */
    for (let i = 0; i < 10; i++) {
        }

// A function that, when the save button is clicked, will commit the text within that hour to the local storage.