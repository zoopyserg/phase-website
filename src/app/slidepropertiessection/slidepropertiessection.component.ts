import { Component, OnInit } from '@angular/core';
import {PhaseProperty} from "../app.component";
import {PropertySliderComponent} from "../property-slider/property-slider.component";

@Component({
  selector: 'app-slidepropertiessection',
  templateUrl: './slidepropertiessection.component.html',
  styleUrls: ['./slidepropertiessection.component.scss']
})
export class SlidepropertiessectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  detalizationProperty: PhaseProperty = {name: "Детализация", value: 50}
  panoramityProperty: PhaseProperty = {name: "Панорамность", value: 50}
  wishToChangeProperty: PhaseProperty = {name: "Желание Изменить Картинку", value: 50}
}
