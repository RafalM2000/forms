import { Component,DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title1: string = 'Angular-In-Examples';
  title2: string = 'Forms';
  title3: string = '';

  constructor(private currentRoute: Router) {}

  ngDoCheck() {
    switch (this.currentRoute.url) {
      case '/one':
        this.title3 = 'Template driven forms';
        break;
      case '/two':
        this.title3 = 'Reactive driven forms';
        break;
      default:
        this.title3 = '';
    }
  }

}


