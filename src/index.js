const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor() {
    this.timerId = null;
  }

  timerStart() {
    this.timerId = setInterval(() => {
      const currentDate = new Date();
      const target = targetDate - currentDate;
      console.log(target);
    }, 1000);
  }
  getTimerComponents() {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2022 december 31 20:00'),
});

timer.timerStart();
