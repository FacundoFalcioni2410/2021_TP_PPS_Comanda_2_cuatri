import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { TimerComponent } from 'src/app/components/timer/timer.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerComponent,
    TimerComponent,
  ]
})
export class SharedModule { }
