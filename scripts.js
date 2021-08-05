// Write your JavaScript code here.
// Remember to pay attention to page loading!
// parseInt() - function for looking at what's in an elementById

window.addEventListener("load", init);

function init() {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    takeOff.addEventListener("click", function() {
        const reply = window.confirm("Confirm that the shuttle is ready for takeoff.")
            if (answer === true) {
                flightStatus.innerText = "Shuttle in flight."
            }
    });
}