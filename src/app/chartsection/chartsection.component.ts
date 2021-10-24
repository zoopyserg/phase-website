import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chartsection',
  templateUrl: './chartsection.component.html',
  styleUrls: ['./chartsection.component.scss']
})
export class ChartsectionComponent implements OnInit {
  @Input() detalizationProperty: any
  @Input() panoramityProperty: any
  @Input() wishToChangeProperty: any
  @Input() imageNames: any
  @Input() selectedImageIndex: any
  @Input() techniques: any
  @Input() selectedTechniqueIndex: any

  constructor() { }

  ngOnInit(): void {
  }

}
