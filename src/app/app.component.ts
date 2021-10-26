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
  timerDetalization: any
  timerPanoramity: any
  endlessLoopDuration: number = 5000;
  animationDuration: number = 3000;
  numberAnimationStepDuration: number = 20;
  numberAnimationStartedAt: any;

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
    this.smoothTransitionFromAToB()
    this.initEndlessLoop()
  }

  setDetalizationValue(val: number) {
    this.detalizationProperty.value = val
    this.detalizationPropertyValue = val
  }

  setPanoramityValue(val: number) {
    this.panoramityProperty.value = val
    this.panoramityPropertyValue = val
  }

  selectedTechnique() {
    return this.techniques[this.selectedTechniqueIndex]
  }

  selectedTechniqueStartDetalization() {
    return this.selectedTechnique().startDetalization
  }

  selectedTechniqueEndDetalization() {
    return this.selectedTechnique().endDetalization
  }

  selectedTechniqueStartPanoramity() {
    return this.selectedTechnique().startPanoramity
  }

  selectedTechniqueEndPanoramity() {
    return this.selectedTechnique().endPanoramity
  }

  selectedTechniqueDetalizationDifference() {
    return this.selectedTechniqueEndDetalization() - this.selectedTechniqueStartDetalization()
  }

  selectedTechniquePanoramityDifference() {
    return this.selectedTechniqueEndPanoramity() - this.selectedTechniqueStartPanoramity()
  }

  selectedTechniqueDetalizationChange() {
    return Math.abs(this.selectedTechniqueDetalizationDifference())
  }

  selectedTechniquePanoramityChange() {
    return Math.abs(this.selectedTechniquePanoramityDifference())
  }

  smoothTransitionFromAToB() {
    console.log("a to b start")
    this.clearTimerPanoramity()
    this.clearTimerDetalization()

    if (this.selectedTechniqueIndex > 0) {
      this.detalizationProperty.value = this.selectedTechniqueStartDetalization()
      this.detalizationPropertyValue = this.selectedTechniqueStartDetalization()
      this.panoramityProperty.value = this.selectedTechniqueStartPanoramity()
      this.panoramityPropertyValue = this.selectedTechniqueStartPanoramity()
      this.numberAnimationStartedAt = Date.now()

      this.initPanoramitySmoothTimer()
      this.initDetalizationSmoothTimer()
    }
  }

  initPanoramitySmoothTimer() {
    if (!(this.timerPanoramity)) {
      this.timerPanoramity = setInterval(() => {
        this.panoramityClearTimerOrAnimate()
      }, this.numberAnimationStepDuration);
    }
  }

  initDetalizationSmoothTimer() {
    if (!(this.timerDetalization)) {
      this.timerDetalization = setInterval(() => {
        this.detalizationClearTimerOrAnimate()
      }, this.numberAnimationStepDuration);
    }
  }

  detalizationClearTimerOrAnimate() {
    if (this.didTimePass()) {
      this.clearTimerDetalization()
    } else {
      this.animateDetalizationNumber();
    }
  }

  panoramityClearTimerOrAnimate() {
    if (this.didTimePass()) {
      this.clearTimerPanoramity()
    } else {
      this.animatePanoramityNumber();
    }
  }

  timePassed() {
    return Date.now() - this.numberAnimationStartedAt
  }

  didTimePass() {
    return (this.timePassed()) >= this.animationDuration
  }

  detalizationIsGrowing() {
    return this.selectedTechniqueStartDetalization() < this.selectedTechniqueEndDetalization()
  }

  detalizationIsFalling() {
    return this.selectedTechniqueStartDetalization() > this.selectedTechniqueEndDetalization()
  }

  panoramityIsGrowing() {
    return this.selectedTechniqueStartPanoramity() < this.selectedTechniqueEndPanoramity()
  }

  panoramityIsFalling() {
    return this.selectedTechniqueStartPanoramity() > this.selectedTechniqueEndPanoramity()
  }

  detalizationValueReachedEndDetalization() {
    if (this.detalizationIsGrowing()) {
      return this.detalizationPropertyValue >= this.selectedTechniqueEndDetalization()
    } else if (this.detalizationIsFalling()) {
      return this.detalizationPropertyValue <= this.selectedTechniqueEndDetalization()
    } else {
      return true // endDetalization() == StartDetalization()
    }
  }

  panoramityValueReachedEndPanoramity() {
    if (this.panoramityIsGrowing()) {
      return this.panoramityPropertyValue >= this.selectedTechniqueEndPanoramity()
    } else if (this.panoramityIsFalling()) {
      return this.panoramityPropertyValue <= this.selectedTechniqueEndPanoramity()
    } else {
      return true // EndPanoramity() == StartPanoramity()
    }
  }

  animateDetalizationNumber() {
    if (!(this.detalizationValueReachedEndDetalization())) {
      this.detalizationProperty.value = this.selectedTechniqueStartDetalization() + (this.selectedTechniqueDetalizationDifference() / this.animationDuration) * this.timePassed()
      this.detalizationPropertyValue = this.selectedTechniqueStartDetalization() + (this.selectedTechniqueDetalizationDifference() / this.animationDuration) * this.timePassed()
    }
  }

  animatePanoramityNumber() {
    if (!(this.panoramityValueReachedEndPanoramity())) {
      this.panoramityProperty.value = this.selectedTechniqueStartPanoramity() + (this.selectedTechniquePanoramityDifference() / this.animationDuration) * this.timePassed()
      this.panoramityPropertyValue = this.selectedTechniqueStartPanoramity() + (this.selectedTechniquePanoramityDifference() / this.animationDuration) * this.timePassed()
    }
  }

  ngOnInit() {

  }

  initEndlessLoop() {
    if (!(this.endlessTimerID)) {
      this.endlessTimerID = setInterval(() => {
        this.smoothTransitionFromAToB()
      }, this.endlessLoopDuration);
    }
  }

  ngOnDestroy() {
    this.clearAllTimers()
  }

  clearAllTimers() {
    this.clearEndlessLoop()
    this.clearTimerDetalization()
    this.clearTimerPanoramity()
  }

  clearTimerPanoramity() {
    if (this.timerPanoramity) {
      clearInterval(this.timerPanoramity);
      this.timerPanoramity = null
    }
  }

  clearTimerDetalization() {
    if (this.timerDetalization) {
      clearInterval(this.timerDetalization);
      this.timerDetalization = null
    }
  }

  clearEndlessLoop() {
    if (this.endlessTimerID) {
      clearInterval(this.endlessTimerID);
      this.endlessTimerID = null;
    }
  }

}
