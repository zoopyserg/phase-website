import { Component } from '@angular/core';

export interface PhaseProperty {
  name: string
  value: number
}

export  interface ImageName {
  name: string
  filename: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'phase-website';

  detalizationProperty: PhaseProperty = {name: "Детализация", value: 50}
  panoramityProperty: PhaseProperty = {name: "Панорамность", value: 50}
  wishToChangeProperty: PhaseProperty = {name: "Желание Изменить Картинку", value: 50}

  imageNames: ImageName[] = [
    { name: "Лес", filename: "forest.jpg" },
    { name: "Поле", filename: "field.jpg" },
    { name: "Квартира", filename: "apartment.jpg" },
    { name: "Дом", filename: "house.jpg" },
    { name: "Замок", filename: "castle.jpg" },
    { name: "Птица", filename: "bird.jpg" },
    { name: "Кошка", filename: "cat.png" }
  ]

  selectedImageIndex: number = 0

  setSelectedChange(val: number) {
    this.selectedImageIndex = val
  }

}
