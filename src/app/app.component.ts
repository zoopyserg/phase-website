import { Component } from '@angular/core';

export interface PhaseProperty {
  name: string
  value: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'phase-website';
}
