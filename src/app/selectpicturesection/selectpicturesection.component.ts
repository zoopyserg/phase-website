import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selectpicturesection',
  templateUrl: './selectpicturesection.component.html',
  styleUrls: ['./selectpicturesection.component.scss']
})
export class SelectpicturesectionComponent implements OnInit {
  @Input() imageNames: any
  @Input() selectedImageIndex: any
  @Output() onSelectedImageChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  setSelectedImageChange(val: number) {
    this.onSelectedImageChange.emit(val)
  }

}
