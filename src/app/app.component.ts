import {Component, OnInit} from '@angular/core';

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
  startDetalization: number
  endDetalization: number
  startPanoramity: number
  endPanoramity: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'phase-website';
  selectedTechniqueIndex: number = 0
  detalizationPropertyValue: number = 50;
  panoramityPropertyValue: number = 50;
  selectedImageIndex: number = 0
  endlessTimerID: any;

  detalizationProperty: PhaseProperty = {name: "Детализация", value: 50}
  panoramityProperty: PhaseProperty = {name: "Панорамность", value: 50}
  wishToChangeProperty: PhaseProperty = {name: "Желание Изменить Картинку", value: 50}

  imageNames: ImageName[] = [
    {name: "Лес", filename: "forest.jpg"},
    {name: "Поле", filename: "field.jpg"},
    {name: "Квартира", filename: "apartment.jpg"},
    {name: "Дом", filename: "house.jpg"},
    {name: "Замок", filename: "castle.jpg"},
    {name: "Птица", filename: "bird.jpg"},
    {name: "Кошка", filename: "cat.png"},
    {name: "Ковёр", filename: "carpet.jpg"}
  ]

  setSelectedImage(val: number) {
    this.selectedImageIndex = val
  }

  techniques: Technique[] = [
    {
      name: "(технику не выбрано)",
      description: "Выберите технику чтоб увидеть её эффект",
      startDetalization: this.detalizationPropertyValue,
      endDetalization: this.detalizationPropertyValue,
      startPanoramity: this.panoramityPropertyValue,
      endPanoramity: this.panoramityPropertyValue
    },
    {
      name: "Сенсоризация",
      description: "Ощупывание + Рассматривание вблизи",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30
    },
    {
      name: "Рассматривание Деталей Вблизи",
      description: "Без касания к предметам просто ближе на них посмотреть",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30
    },
    {
      name: "Изменение Ракурса",
      description: "Посмотреть на фантомные предметы под другим углом, или посмотреть что за ними",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80
    },
    {
      name: "Поднимать предметы и называть их",
      description: "Одна из самых эффективных техник на сегодняшний день",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100
    }
  ]

  setSelectedTechnique(val: number) {
    this.selectedTechniqueIndex = val
  }

  setDetalizationValue(val: number) {
    this.detalizationProperty.value = val
    this.detalizationPropertyValue = val
  }

  setPanoramityValue(val: number) {
    this.panoramityProperty.value = val
    this.panoramityPropertyValue = val
  }

  smoothTransitionFromAToB() {
    if (this.selectedTechniqueIndex > 0) {
      var technique = this.techniques[this.selectedTechniqueIndex]
      this.detalizationProperty.value = technique.startDetalization
      this.detalizationPropertyValue = technique.startDetalization
      this.panoramityProperty.value = technique.startPanoramity
      this.panoramityPropertyValue = technique.startPanoramity

      var animationDuration = 3000;

      var detalizationDifference = technique.endDetalization - technique.startDetalization
      var panoramityDifference = technique.endPanoramity - technique.startPanoramity

      var detalizationChange = Math.abs(detalizationDifference)
      var panoramityChange = Math.abs(panoramityDifference)

      var detalizationStepDuration = Math.floor(animationDuration / detalizationChange)
      var panoramityStepDuration = Math.floor(animationDuration / panoramityChange)

      var detalizationStep = detalizationDifference / detalizationStepDuration
      var panoramityStep = panoramityDifference / panoramityStepDuration

      let start = Date.now()

      let timerDetalization = setInterval(() => {
        // how much time passed from the start?
        let timePassed1 = Date.now() - start;

        if (timePassed1 >= animationDuration) {
          clearInterval(timerDetalization); // finish the animation after 2 seconds
          return;
        }

        // draw the animation at the moment timePassed
        this.animateDetalizationNumber(technique.startDetalization, technique.endDetalization, timePassed1);

      }, detalizationStepDuration);

      let timerPanoramity = setInterval(() => {
        // how much time passed from the start?
        let timePassed2 = Date.now() - start;

        if (timePassed2 >= animationDuration) {
          clearInterval(timerPanoramity); // finish the animation after 2 seconds
          return;
        }

        // draw the animation at the moment timePassed
        this.animatePanoramityNumber(technique.startPanoramity, technique.endPanoramity, timePassed2);

      }, panoramityStepDuration);

    }
  }

  animateDetalizationNumber(startNumber: any, endNumber: any, timePassed: any) {
    if (Math.abs(endNumber - this.detalizationPropertyValue) > 0) {
      this.detalizationProperty.value = this.detalizationProperty.value + ((endNumber - startNumber) / 5000) * timePassed
      this.detalizationPropertyValue = this.detalizationPropertyValue + ((endNumber - startNumber) / 5000) * timePassed
    }
  }

  animatePanoramityNumber(startNumber: any, endNumber: any, timePassed: any) {
    if (Math.abs(endNumber - this.panoramityPropertyValue) > 0) {
      this.panoramityProperty.value = this.panoramityProperty.value + ((endNumber - startNumber) / 5000) * timePassed
      this.panoramityPropertyValue = this.panoramityPropertyValue + ((endNumber - startNumber) / 5000) * timePassed
    }
  }

  ngOnInit() {
    this.endlessTimerID = setInterval(() => {
      this.smoothTransitionFromAToB()
    }, 5000);
  }

  ngOnDestroy() {
    if (this.endlessTimerID) {
      clearInterval(this.endlessTimerID);
    }
  }

}
