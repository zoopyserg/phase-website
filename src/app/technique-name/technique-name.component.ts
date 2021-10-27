import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-technique-name',
  templateUrl: './technique-name.component.html',
  styleUrls: ['./technique-name.component.scss']
})
export class TechniqueNameComponent implements OnInit {
  @Input() technique: any
  @Input() selectedTechniqueIndex: any
  @Output() onSelectedTechniqueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedTechnique() {
    this.onSelectedTechniqueChange.emit(this.technique.id)
    this.scrollToPhoto()
  }

  isChecked(): boolean {
    return this.selectedTechniqueIndex == this.technique.id
  }

  differenceBetweenDetalizations() {
    return this.technique.endDetalization - this.technique.startDetalization
  }

  detalizationPlusOrMinus() {
    if (this.differenceBetweenDetalizations() > 0) {
      return "+"
    } else if (this.differenceBetweenDetalizations() < 0) {
      return "-"
    } else {
      return ""
    }
  }

  absoluteDifferenceBetweenDetalizations() {
    return Math.abs(this.differenceBetweenDetalizations())
  }

  detalizationString() {
    return this.detalizationPlusOrMinus() + this.absoluteDifferenceBetweenDetalizations() + "%"
  }

  differenceBetweenPanoramities() {
    return this.technique.endPanoramity - this.technique.startPanoramity
  }

  panoramityPlusOrMinus() {
    if (this.differenceBetweenPanoramities() > 0) {
      return "+"
    } else if (this.differenceBetweenPanoramities() < 0) {
      return "-"
    } else {
      return ""
    }
  }

  absoluteDifferenceBetweenPanoramities() {
    return Math.abs(this.differenceBetweenPanoramities())
  }

  panoramityString() {
    return this.panoramityPlusOrMinus() + this.absoluteDifferenceBetweenPanoramities() + "%"
  }

  differenceBetweenWishesToChange() {
    return this.technique.endDesireToChange - this.technique.startDesireToChange
  }

  wishToChangePlusOrMinus() {
    if (this.differenceBetweenWishesToChange() > 0) {
      return "+"
    } else if (this.differenceBetweenWishesToChange() < 0) {
      return "-"
    } else {
      return ""
    }
  }

  absoluteDifferenceBetweenWishesToChange() {
    return Math.abs(this.differenceBetweenWishesToChange())
  }

  wishToChangeString() {
    return this.wishToChangePlusOrMinus() + this.absoluteDifferenceBetweenWishesToChange() + "%"
  }

  totalDifference() {
    return this.differenceBetweenDetalizations() + this.differenceBetweenPanoramities() - this.differenceBetweenWishesToChange()
  }

  totalDifferenceString() {
    return this.totalDifference() + "%"
  }

  scrollToPhoto() {
    let el = document.getElementById("selectedImageDemo");
    if (el) {
      el.scrollIntoView();
    }
  }
}
