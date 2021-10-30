import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  @Input() minutos: number;
  seconds: number;
  isPaused: boolean;

  constructor() {
    setTimeout(() =>{
      this.resetTimer();
      setInterval(() => this.tick(), 1000);
    },100);
  }

  ngOnInit() {

  }

  resetTimer(): void {
    this.isPaused = false;
    this.minutos = this.minutos;
    this.seconds = 0;
  }

  private tick(): void {
    if (!this.isPaused) {

      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutos < 0) {
          this.resetTimer();
        }
      }
      if(this.minutos === 0 && this.seconds === 0)
      {
        this.isPaused = true;
      }
    }
  }

}
