/* 

Filename: ComplexCode.js

This code is a complex implementation of a digital clock with multiple features 
such as time, date, countdown, stopwatch, and alarm functionality. It also includes 
advanced animations and interactions using various libraries and APIs.

*/

// Imports
import { formatTime, formatDate } from './helpers';
import { Countdown, Stopwatch } from './timers';
import { animateClock, animateCountdown } from './animations';
import { playAlarmSound, displayNotification } from './notifications';

// DOM elements
const clockElement = document.querySelector('#clock');
const dateElement = document.querySelector('#date');
const countdownElement = document.querySelector('#countdown');
const stopwatchElement = document.querySelector('#stopwatch');
const alarmButton = document.querySelector('#alarm-button');
const alarmTimeInput = document.querySelector('#alarm-time-input');

// Clock
function updateClock() {
  const now = new Date();
  const time = formatTime(now);
  const date = formatDate(now);

  clockElement.innerText = time;
  dateElement.innerText = date;

  requestAnimationFrame(updateClock);
}

updateClock();

// Countdown
const countdown = new Countdown();
countdownElement.innerText = countdown.format();
countdown.onTick = () => {
  countdownElement.innerText = countdown.format();
  animateCountdown(countdownElement);
};
countdown.onComplete = () => {
  playAlarmSound();
  displayNotification('Countdown Complete!');
};
countdown.start();

// Stopwatch
const stopwatch = new Stopwatch();
stopwatch.onTick = (time) => {
  stopwatchElement.innerText = time;
};
stopwatch.start();

// Alarm
alarmButton.addEventListener('click', () => {
  const alarmTime = alarmTimeInput.value;

  if (alarmTime) {
    const now = new Date();
    const alarmDate = new Date(now.toDateString() + ' ' + alarmTime);
  
    countdown.reset(alarmDate);
    countdown.start();
  
    alarmTimeInput.value = '';
  }
});

// Animations
animateClock(clockElement);
animateCountdown(countdownElement);