const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ targetDate, onTick }) {
    this.timerId = null;
    this.targetDate = targetDate;
    this.onTick = onTick;
  }

  timerStart() {
    const finaleDate = this.targetDate;

    this.timerId = setInterval(() => {
      const currentDate = new Date();
      const amountTime = finaleDate - currentDate;
      const time = this.getTimerComponents(amountTime);

      this.onTick(time);
    }, 1000);
  }
  getTimerComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }
}

const timer = new CountdownTimer({
  onTick: dateOutputFace,
  selector: '#timer-1',
  targetDate: new Date('2021 december 31 20:00'),
});

timer.timerStart();

function dateOutputFace({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${mins}`;
  refs.seconds.textContent = `${secs}`;
}
