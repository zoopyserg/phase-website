import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-technique-name',
  templateUrl: './technique-name.component.html',
  styleUrls: ['./technique-name.component.scss']
})
export class TechniqueNameComponent implements OnInit {
  @Input() technique: any
  @Input() currentTechniqueIndex: any
  @Input() selectedTechniqueIndex: any
  @Output() onSelectedTechniqueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedTechnique() {
    this.onSelectedTechniqueChange.emit(this.currentTechniqueIndex)
  }

  isChecked(): boolean {
    return this.selectedTechniqueIndex == this.currentTechniqueIndex
  }
}
