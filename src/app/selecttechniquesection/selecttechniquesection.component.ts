import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
}
