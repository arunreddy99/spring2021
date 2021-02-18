import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdown';
  tim = 'may 06 2021';
  day: any;
  hrs: any;
  mins: any;
  secs: any;
  now: any;
  countDownDate = new Date(this.tim).getTime();
  setDate(date: any) {
    this.tim = date ? date : 'may 06 2021';
    this.countDownDate = new Date(date).getTime();
  }
  x = setInterval(( ) => {
    let now = new Date().getTime();
    let distance = this.countDownDate - now;
    this.day = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((distance % (1000 * 60)) / (1000));

  });
}
