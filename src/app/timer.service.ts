import { Injectable } from '@angular/core';
import { Timer } from './timer';
import { TIMERS } from './mock-timers';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timers: Timer[] = [];
  timer: Timer;
  getTimer(timerID: number): Timer {
    this.timers.forEach(timer => {
      if (timer.id === timerID) {
        this.timer = timer;
      }
    });
    return this.timer;
  }

  addTimer(timer: Timer) {
    this.timers.push(timer);
  }
}
