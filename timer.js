class Time {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    //   This are attach to the DOM elements
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    // Event Listeners
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemanining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 20);
  };
  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemanining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemanining = this.timeRemanining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemanining);
      }
    }
  };

  get timeRemanining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemanining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
