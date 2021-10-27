import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Technique} from "../app.component";

@Component({
  selector: 'app-selecttechniquesection',
  templateUrl: './selecttechniquesection.component.html',
  styleUrls: ['./selecttechniquesection.component.scss']
})
export class SelecttechniquesectionComponent implements OnInit {
  @Input() techniques: any
  @Input() selectedTechniqueIndex: any
  @Output() onSelectedTechniqueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedTechnique(val: number) {
    this.onSelectedTechniqueChange.emit(val)
  }

  techniquesWithoutFirstOne() {
    return this.techniques.slice(1, -1)
  }

  firstTechnique() {
    return this.techniques.slice(0, 1)
  }

  sortedTechniques() {
    return this.techniquesWithoutFirstOne().sort((a: any, b: any) => {
      let totalADifference = (a.endDetalization - a.startDetalization) + (a.endPanoramity - a.startPanoramity) - (a.endDesireToChange - a.startDesireToChange)
      let totalBDifference = (b.endDetalization - b.startDetalization) + (b.endPanoramity - b.startPanoramity) - (b.endDesireToChange - b.startDesireToChange)
      return totalADifference > totalBDifference ? -1 : (totalADifference > totalBDifference ? 1 : 0)
    })
  }

  finalTechniques() {
    console.log('start')
    console.log(this.firstTechnique())
    console.log(this.sortedTechniques())
    console.log([[this.firstTechnique()], this.sortedTechniques()].reduce((acc, val) => acc.concat(val), []))
    return [this.firstTechnique(), this.sortedTechniques()].reduce((acc, val) => acc.concat(val), [])
  }
}
