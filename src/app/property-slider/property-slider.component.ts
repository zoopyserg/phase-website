import {Component, Input, OnInit} from '@angular/core';
import {PhaseProperty} from "../app.component";

@Component({
  selector: 'app-property-slider',
  templateUrl: './property-slider.component.html',
  styleUrls: ['./property-slider.component.scss']
})
export class PropertySliderComponent implements OnInit {
  @Input() phaseProperty: any

  constructor() {

  }

  ngOnInit(): void {
  }

  valuePercentage(): string {
    return this.phaseProperty.value + "%"
  }

  propertyChangedHandler(): void {
    // todo: send changes upstream
  }

}
