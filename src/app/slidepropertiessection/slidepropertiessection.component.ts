import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhaseProperty} from "../app.component";
import {PropertySliderComponent} from "../property-slider/property-slider.component";

@Component({
  selector: 'app-slidepropertiessection',
  templateUrl: './slidepropertiessection.component.html',
  styleUrls: ['./slidepropertiessection.component.scss']
})

export class SlidepropertiessectionComponent implements OnInit {
  @Input() detalizationProperty: any
  @Input() panoramityProperty: any
  @Input() desireToChangeProperty: any
  @Input() selectedTechniqueIndex: any
  @Output() onDetalizationPropertyChanged = new EventEmitter<number>();
  @Output() onPanoramityPropertyChanged = new EventEmitter<number>();
  @Output() onDesireToChangePropertyChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setDetalizationValue(event: any) {
    this.onDetalizationPropertyChanged.emit(event)
  }

  setPanoramityValue(event: any) {
    this.onPanoramityPropertyChanged.emit(event)
  }

  setDesireToChangeValue(event: any) {
    this.onDesireToChangePropertyChanged.emit(event)
  }
}
