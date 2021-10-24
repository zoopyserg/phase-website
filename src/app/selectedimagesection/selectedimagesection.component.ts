import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-selectedimagesection',
  templateUrl: './selectedimagesection.component.html',
  styleUrls: ['./selectedimagesection.component.scss']
})
export class SelectedimagesectionComponent implements OnInit {
  @Input() detalizationProperty: any
  @Input() panoramityProperty: any
  @Input() wishToChangeProperty: any
  @Input() imageNames: any
  @Input() selectedImageIndex: any
  @Input() techniques: any
  @Input() selectedTechniqueIndex: any

  constructor() {
  }

  ngOnInit(): void {
  }

  imgSrc(): string {
    return "assets/images/objects/" + this.imageNames[this.selectedImageIndex].filename;
  }

}
