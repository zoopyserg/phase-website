import {Component, Input, OnInit} from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }
}
