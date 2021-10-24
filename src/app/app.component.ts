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

  detalizationProperty: PhaseProperty = {name: "Детализация", value: 50}
  panoramityProperty: PhaseProperty = {name: "Панорамность", value: 50}
  wishToChangeProperty: PhaseProperty = {name: "Желание Изменить Картинку", value: 50}
}
