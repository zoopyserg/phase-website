import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-name',
  templateUrl: './image-name.component.html',
  styleUrls: ['./image-name.component.scss']
})
export class ImageNameComponent implements OnInit {
  @Input() imageName: any
  @Input() currentImageIndex: any
  @Input() selectedImageIndex: any
  @Output() onSelectedChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedChange() {
    this.onSelectedChange.emit(this.currentImageIndex)
  }

  isChecked(): boolean {
    return this.selectedImageIndex == this.currentImageIndex
  }

}
