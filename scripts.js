// Write your JavaScript code here.
// Remember to pay attention to page loading!
// parseInt() - function for looking at what's in an elementById

window.addEventListener("load", init);

function init() {
    const takeOff = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const shuttleColor = document.getElementById("shuttleBackground");
    takeOff.addEventListener("click", function() {
        const reply = window.confirm("Confirm that the shuttle is ready for takeoff.")
            if (reply === true) {
                status = "Shuttle in flight."
                shuttleColor.style.background = "blue"
                }
    // const landing = document.getElementById("landing");
    // landing.addEventListener("click", function() {

    })
    });
}
