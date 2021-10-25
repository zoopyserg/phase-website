import {Component, Input, OnInit} from '@angular/core';

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

}
