import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  @Input() minutos: number = 0;
  @Input() segundos: number;
  @Output() terminado: EventEmitter<any> = new EventEmitter();
  isPaused: boolean;

  constructor() {
    setTimeout(() =>{
      this.resetTimer();
      setInterval(() => this.tick(), 1000);
    },200);
  }

  ngOnInit() {

  }

  resetTimer(): void {
    this.isPaused = false;
    this.minutos = this.minutos;
    this.segundos = this.segundos;
  }

  private tick(): void {
    if (!this.isPaused) {

      if (--this.segundos < 0) {
        this.isPaused = true;
        this.terminado.emit(true);
      }
      // if(this.minutos === 0 && this.segundos === 0)
      // {
      //   this.isPaused = true;
      //   this.terminado.emit(true);
      // }
    }
  }

}
