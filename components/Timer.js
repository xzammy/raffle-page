const React = require("react");
class Timer extends React.Component {
  constructor(props) {
    let countdown;
    super(props);
    this.state = {
      time: 0,
      start: 0,
      isOn: false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0 });
  }

  displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${
      remainderSeconds < 10 ? "0" : ""
    }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
  }

  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true,
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
        }),
      1
    );
  }

  timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we should stop it!
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      // display it
      displayTimeLeft(secondsLeft);
    }, 1000);
  }
  render() {
    let start =
      this.state.time == 0 ? (
        <button onClick={this.startTimer}> start </button>
      ) : null;
    let stop = this.state.isOn ? (
      <button onClick={this.stopTimer}> stop </button>
    ) : null;
    let reset =
      this.state.time != 0 && !this.state.isOn ? (
        <button onClick={this.resetTimer}> reset </button>
      ) : null;
    let resume =
      this.state.time != 0 && !this.state.isOn ? (
        <button onClick={this.startTimer}> resume </button>
      ) : null;
    return (
      <div>
        <h3> 倒數: {this.state.time} </h3> {start} {resume} {stop} {reset}{" "}
      </div>
    );
  }
}
module.exports = Timer;
