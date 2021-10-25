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
  @Input() wishToChangeProperty: any
  @Output() onDetalizationPropertyChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setDetalizationValue(event: any) {
    this.onDetalizationPropertyChanged.emit(event)
  }
}
