import {Component, OnInit} from '@angular/core';

export interface PhaseProperty {
  name: string
  value: number
}

export interface HeaderTab {
  name: string
  description: string
  backgroundClass: string
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
  selectedHeaderTabIndex = 0

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

  headerTabs: HeaderTab[] = [
    {
      name: "Rebreathing",
      description: "Занятие гипервентеляцией (частым дыханием) с целью вызвать галлюцинации и в них увидеть прозрения.",
      backgroundClass: "hero-rebreathing"
    },
    {
      name: "Астрал",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир",
      backgroundClass: "hero-astral"
    },
    {
      name: "Астральное путешествие",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир",
      backgroundClass: "hero-astral-travel"
    },
    {
      name: "Астральные проекции",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир",
      backgroundClass: "hero-astral-projection"
    },
    {
      name: "Аутотренинг",
      description: "Попытка изменить своё восприятие методом частого повторения того или иного концепта.",
      backgroundClass: "hero-autotraining"
    },
    {
      name: "Аффекты",
      description: "Состояние в котором человек совершает некоторые действия, возможно осознаёт их, но осознанно на них не влияет",
      backgroundClass: "hero-affect"
    },
    {
      name: "Бог",
      description: "Собирательный образ всех вещей которые люди видели входя в созерцание \"фантомного\" мира",
      backgroundClass: "hero-god"
    },
    {
      name: "Брейнсторм",
      description: "Полёт сознания с целью развивать некоторое знание \"из того что есть, в то что может быть\"",
      backgroundClass: "hero-brainstorm"
    },
    {
      name: "Быстрый сон",
      description: "Состояние мозга во время сна в котором человек видит сны",
      backgroundClass: "hero-rem-sleep"
    },
    {
      name: "Виртуальная Реальность",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир",
      backgroundClass: "hero-virtual-reality"
    },
    {
      name: "Внетелесные путешествия",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир",
      backgroundClass: "hero-out-of-body-travel"
    },
    {
      name: "Внетелесный опыт",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир",
      backgroundClass: "hero-out-of-body-experience"
    },
    {
      name: "Восприятие",
      description: "Механизмы мозга показывающие нам то что узнали о мире но говорящие что это и есть мир",
      backgroundClass: "hero-perception"
    },
    {
      name: "Вход в другое измерение",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир",
      backgroundClass: "hero-entering-other-dimention"
    },
    {
      name: "Выход души из тела",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир.",
      backgroundClass: "hero-soul-exiting-body"
    },
    {
      name: "Галлюцинации",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-hallucination"
    },
    {
      name: "Гипноз",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-hypnosis"
    },
    {
      name: "Диссоциативное переживане",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-dissociation"
    },
    {
      name: "Диссоциативное состояние",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-dissociative-state"
    },
    {
      name: "Душа",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир.",
      backgroundClass: "hero-soul"
    },
    {
      name: "Знаки свыше",
      description: "Условное название ощущений, в которых человек частично осознаёт реальный мир и частично накладывает на него свои прозрения",
      backgroundClass: "hero-signs"
    },
    {
      name: "Изменённое состояние мозга",
      description: "Условное собирательное название всех состояний мозга отличимых от восприятия реальности в режиме бодрствования",
      backgroundClass: "hero-changed-brain-state"
    },
    {
      name: "Изменённое состояние сознания",
      description: "Условное собирательное название всех состояний мозга отличимых от восприятия реальности в режиме бодрствования",
      backgroundClass: "hero-changed-conciousness-state"
    },
    {
      name: "Иллюзии",
      description: "Условное название ощущений, в которых человек частично осознаёт реальный мир и частично накладывает на него свои прозрения",
      backgroundClass: "hero-illusions"
    },
    {
      name: "Интуиция",
      description: "Условное название ощущений, в которых человек частично осознаёт реальный мир и частично накладывает на него свои прозрения",
      backgroundClass: "hero-intuition"
    },
    {
      name: "Истерии",
      description: "Состояние в котором человек совершает некоторые действия, возможно осознаёт их, но осознанно на них не влияет",
      backgroundClass: "hero-histeria"
    },
    {
      name: "Клиническая смерть",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир.",
      backgroundClass: "hero-clinical-death"
    },
    {
      name: "Ложное пробуждение",
      description: "Условное название ощущений, в которых ощущаешь \"фантомный\" мир но думаешь что ощущаешь реальный.",
      backgroundClass: "hero-false-awakening"
    },
    {
      name: "Массовые Истерии",
      description: "Состояние в котором несколько человек совершают некоторые действия, возможно осознают их, но осознанно на них не влияют, часто подталкивая друг друга",
      backgroundClass: "hero-mass-histeria"
    },
    {
      name: "Медитация",
      description: "Условная искажённая попытка разными малоэффективными методами попасть в \"фантомный мир\" или увидеть в нём прозрение",
      backgroundClass: "hero-meditation"
    },
    {
      name: "Мистика",
      description: "Собирательный ряд течений деятельности человека, направленный на то чтоб помимо темы \"фантомного мира\" впарить людям то или иное непрактичное объяснение",
      backgroundClass: "hero-mistique"
    },
    {
      name: "Осознанные сноведения",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир.",
      backgroundClass: "hero-lucid-dreams"
    },
    {
      name: "Параллельный мир",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир.",
      backgroundClass: "hero-parallel-reality"
    },
    {
      name: "Похищение инопланетянами",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир. Часто с тематикой похищения.",
      backgroundClass: "hero-alien-abduction"
    },
    {
      name: "Предчувствие",
      description: "Условное название ощущений, в которых человек частично осознаёт реальный мир и частично накладывает на него свои прозрения",
      backgroundClass: "hero-forseeing"
    },
    {
      name: "Припадки",
      description: "Состояние в котором человек совершает некоторые действия, возможно осознаёт их, но осознанно на них не влияет",
      backgroundClass: "hero-nervous-breakdown"
    },
    {
      name: "Приступы",
      description: "Состояние в котором человек совершает некоторые действия, возможно осознаёт их, но осознанно на них не влияет",
      backgroundClass: "hero-nervous-convultions"
    },
    {
      name: "Прозрения",
      description: "Условное название ощущений, в которых человек частично осознаёт реальный мир и частично накладывает на него свои выводы",
      backgroundClass: "hero-seeing-future"
    },
    {
      name: "Психозы",
      description: "Состояние в котором человек совершает некоторые действия, возможно осознаёт их, но осознанно на них не влияет",
      backgroundClass: "hero-psychosis"
    },
    {
      name: "Самогипноз",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-self-hypnosis"
    },
    {
      name: "Сборка",
      description: "Один из видов медитации, заключающийся в концентрации на ощущениях своего пульса с целью войти в транс (в \"фантомный\" мир)",
      backgroundClass: "hero-self-collection"
    },
    {
      name: "Свет в конце туннеля",
      description: "Условное название ощущений, в которых не ощущаешь своё тело но ощущаешь \"фантомный\" мир. Часто пропагандировалась как выход церковной интерпретации души из тела перед смертью.",
      backgroundClass: "hero-light-in-tunnel"
    },
    {
      name: "Сонный Паралич",
      description: "Физиологическое состояние характерное в первые секунды после выхода из \"фантомного\" мира когда мозг ещё не до конца перешёл из режима сна в режим бодрствования.",
      backgroundClass: "hero-sleep-paralysis"
    },
    {
      name: "Транс",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-trance"
    },
    {
      name: "Наркотический Трип",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-narcotic-trip"
    },
    {
      name: "Убеждения что мир что-то притягивает в нашу жизнь",
      description: "Приписывание смешать способность мира притягивать к проблемам их решения со способностью мозга краем глаза замечать объекты которые ищет подсознание",
      backgroundClass: "hero-attraction-law"
    },
    {
      name: "Уход от реальности",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-losing-reality"
    },
    {
      name: "Ощущение фантомных частей тела",
      description: "Условное название ощущений, в которых человек частично осознаёт одновременно и реальный и \"фантомный\" мир",
      backgroundClass: "hero-phantom-limbs"
    }
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
    console.log(this.headerTabs.length)
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
