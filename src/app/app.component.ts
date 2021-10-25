import { Component } from '@angular/core';

export interface PhaseProperty {
  name: string
  value: number
}

export interface ImageName {
  name: string
  filename: string
}

export interface Technique {
  name: string
  description: string
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
    { name: "Кошка", filename: "cat.png" },
    { name: "Ковёр", filename: "carpet.jpg" }
  ]

  selectedImageIndex: number = 0

  setSelectedImage(val: number) {
    this.selectedImageIndex = val
  }

  techniques: Technique[] = [
    { name: "Сенсоризация", description: "Ощупывание + Рассматривание вблизи" },
    { name: "Рассматривание Деталей", description: "" },
    { name: "Изменение Ракурса", description: "" },
    { name: "Поднимать предметы и называть их", description: "" },
  ]

  selectedTechniqueIndex: number = 0

  setSelectedTechnique(val: number) {
    this.selectedTechniqueIndex = val
  }

  detalizationPropertyValue: number = 50;
  panoramityPropertyValue: number = 50;

  setDetalizationValue(val: number) {
    this.detalizationProperty.value = val
    this.detalizationPropertyValue = val
  }

  setPanoramityValue(val: number) {
    this.panoramityProperty.value = val
    this.panoramityPropertyValue = val
  }

}
