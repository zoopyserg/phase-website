import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-property-slider',
  templateUrl: './property-slider.component.html',
  styleUrls: ['./property-slider.component.scss']
})
export class PropertySliderComponent implements OnInit {
  @Input() phaseProperty: any
  @Output() onPropertyChanged = new EventEmitter<number>();

  _phasePropertyValue: number = 50;

  constructor() {

  }

  ngOnInit(): void {
  }

  valuePercentage(): string {
    return this.phaseProperty.value + "%"
  }

  setPropertyValue(event: any) {
    this.onPropertyChanged.emit(event.target.value)
  }
}
