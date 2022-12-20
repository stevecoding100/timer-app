// Declaring elements from the DOM
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
// Creating new constructor
const time = new Time(durationInput, startButton, pauseButton, {
  onStart(totalduration) {
    duration = totalduration;
  },
  onTick(timeRemanining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemanining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("timer complete");
  },
});
