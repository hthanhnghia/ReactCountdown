import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Timer extends Component {
  constructor() {
    super();
    this.state = { status: 'stopped', seconds: 0, count: 0 };
    this.interval = 1000;
    this.timer = 0;

    this.handleChange = this.handleChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleChange(event) {
    this.setState({seconds: event.target.value});
  }

  startTimer() {
    if (this.timer != 0) {
        clearInterval(this.timer);
    }

    this.state.count = this.state.seconds;
    this.countDown();
  }

  countDown() {
    this.setState({status: 'started'});
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, this.interval);
  }

  pauseTimer() {
    if (this.state.status == 'started') {
      clearInterval(this.timer); 
      this.setState({status: 'paused'});
    }
    else {
      this.countDown();
    }
  }

  resetTimer() {
    clearInterval(this.timer);
    this.setState({status: 'stopped', seconds: 0, count: 0});
  }

  render() {
    return(
      <div>
        <p>Time remaining: <span>{this.state.count}</span></p>
        <p><input type="text" value={this.state.seconds} onChange={this.handleChange} /></p>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.pauseTimer}>{this.state.status == 'paused' ? 'Resume' : 'Pause'}</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
