import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  ScoreP1: number = 0;
  ScoreP2: number = 0;
  showDice: boolean = false;
}
