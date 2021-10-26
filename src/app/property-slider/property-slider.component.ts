import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-property-slider',
  templateUrl: './property-slider.component.html',
  styleUrls: ['./property-slider.component.scss']
})
export class PropertySliderComponent implements OnInit {
  @Input() phaseProperty: any
  @Input() selectedTechniqueIndex: any
  @Output() onPropertyChanged = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit(): void {
  }

  valuePercentage(): string {
    return Intl.NumberFormat().format(this.phaseProperty.value) + "%"
  }

  setPropertyValue(event: any) {
    this.onPropertyChanged.emit(event.target.value)
  }

  disabledForChanges(): boolean {
    return this.selectedTechniqueIndex != 0
  }
}
