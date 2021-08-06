// Write your JavaScript code here.
// Remember to pay attention to page loading!
// parseInt() - function for looking at what's in an elementById

window.addEventListener("load", init);

function init() {
    const takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function() {
        const reply = window.confirm("Confirm that the shuttle is ready for takeoff.")
            if (reply === true) {
                document.getElementById("flightStatus") = "Shuttle in flight."
                document.getElementById("shuttleBackground").style.background = "blue"
                

            }
    const landing = document.getElementById("landing");
    landing.addEventListener("click", function() {

    })
    });
}
