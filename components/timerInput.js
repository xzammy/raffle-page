import React from "react";
import { random } from "../components/random";
import "../styles/utils.module.css";
class TimerInput extends React.Component {
  render() {
    return (
      <div>
        <h2>輸入分鐘</h2>
        <input
          type="number"
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}
class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 80, marginLeft: 100 }}>
          {this.props.value}:{this.props.seconds}
        </h1>
      </div>
    );
  }
}

class StartButton extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.value}
          onClick={this.props.startCountDown}
        >
          Start
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      value: "",
      isClicked: false,
      luckyWinner: "",
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec,
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
      this.state.luckyWinner = random();
      alert(this.state.luckyWinner);
    }
    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked: true,
    });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return (
        <div>
          <h2> 抽獎時間 </h2>
          <Timer value={this.state.value} seconds={this.state.seconds} />
        </div>
      );
    } else {
      return (
        <div>
          <TimerInput
            value={this.state.value}
            handleChange={this.handleChange}
          />
          <Timer value={this.state.value} seconds={this.state.seconds} />
          <StartButton
            startCountDown={this.startCountDown}
            value={this.state.value}
          />
          <h2>{this.state.isClicked && this.state.luckyWinner} </h2>
        </div>
      );
    }
  }
}
export default App;
