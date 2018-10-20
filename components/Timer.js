import React from 'react';

const displayIfSUpZero = (value, label) => (
  `${value > 0 ? `${value}${label}` : ''}`
)

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now()
    };
    this.countDownDate = new Date("Aug 24, 2019 15:00:00").getTime();
    setInterval(() => {
      this.setState({ date: this.getCountDownTime()})
    });
  }

  getCountDownTime() {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${displayIfSUpZero(days, ' jours')} ${displayIfSUpZero(hours, 'h')}${minutes}:${seconds}`;
  }

  render() {
    return (
      <div>{this.state.date}</div>
    )
  }
};

export default Timer;