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
  startDesireToChange: number
  endDesireToChange: number
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
  desireToChangePropertyValue: number = 50;
  selectedImageIndex: number = 0
  endlessTimerID: any;
  timerDetalization: any
  timerPanoramity: any
  timerDesireToChange: any
  endlessLoopDuration: number = 5000;
  animationDuration: number = 3000;
  numberAnimationStepDuration: number = 20;
  numberAnimationStartedAt: any;
  selectedHeaderTabIndex = 0
  endlessHeaderTabLoop : any;
  endlessHeaderTabLoopDuration : number = 7000;


  detalizationProperty: PhaseProperty = {name: "Детализация", value: 50}
  panoramityProperty: PhaseProperty = {name: "Панорамность", value: 50}
  desireToChangeProperty: PhaseProperty = {name: "Желание Изменить Картинку", value: 50}

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

  setSelectedHeaderTab(val: number) {
    this.selectedHeaderTabIndex = val
  }

  nextTabIndex() {
    return ( this.selectedHeaderTabIndex < (this.headerTabs.length - 1) ? this.selectedHeaderTabIndex + 1 : 0)
  }

  previousTabIndex() {
    return ( this.selectedHeaderTabIndex > 0 ? this.selectedHeaderTabIndex - 1 : this.headerTabs.length - 1)
  }

  techniques: Technique[] = [
    {
      name: "(технику не выбрано)",
      description: "Выберите технику чтоб увидеть её эффект",
      startDetalization: this.detalizationPropertyValue,
      endDetalization: this.detalizationPropertyValue,
      startPanoramity: this.panoramityPropertyValue,
      endPanoramity: this.panoramityPropertyValue,
      startDesireToChange: this.desireToChangePropertyValue,
      endDesireToChange: this.desireToChangePropertyValue
    },
    {
      name: "Сенсоризация (Сенсорно Моторная Визуализация)",
      description: "Быстрое но внимательное ощупывание плюс рассматривание вблизи",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Рассматривание / Разглядывание Деталей Вблизи",
      description: "Без касания к предметам просто ближе на них посмотреть",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Изменение Ракурса",
      description: "Посмотреть на фантомные предметы под другим углом, или посмотреть что за ними",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Ходить по пространству, Поднимать предметы и называть их",
      description: "Одна из самых эффективных техник на сегодняшний день",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Понимание физиологии состояния",
      description: "Осознание что я всегда \"в фазе\", что реальный мир я никогда не видел, только его отображение моим генератором фазы.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Приказ",
      description: "Главная Техника (особенно внутри фазы). Озвучить Всем Своим Нутром И Криком Приказ (чего ты хочешь от пространства). В комбинации с Панорамной Детализацией она вообще даёт ощущение что ты бог (т.е. Приказ \"Я Вижу Каждую Деталь Этой Панорамы / Данных Обстоятельств / Данной ситуации)\").",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Намеренье (попасть туда)",
      description: "Чёткая цель войти в фазное состояние",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Вспоминание состояния",
      description: "Вспомнить каково это было быть в фазе.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Вспоминание вибраций",
      description: "Вспомнить ощущение вибраций которые хоть раз были.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Вспоминание проявлений техник",
      description: "Делая технику вспомнить какие эффекты она даёт.",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Техника перемещения",
      description: "Переместиться туда куда нужно",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Техника страха",
      description: "Жутко испугаться увиденного",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Техника счёта",
      description: "Попытаться фантомно считать от 1 до 200 например.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Пытаться не заметить что я уснул, но заметить проявления фазы",
      description: "С такой формулировкой пытаться уснуть",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Ярость",
      description: "Выдать крик ярости, крик пронизывающий всё.",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Поощущать Ниточки Формулирующие текущую картинку реальности. ",
      description: "Сделать такую формулировку. Будь то Приказом или другими способами.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Формулировка что то что я ищу уже есть только я почему-то его не вижу",
      description: "С фразой \"там (где я не вижу - за дверью и т.п.) уже Есть (тот предмет который я ищу) только я его почему-то не вижу\" - за дверью, в коробке, там куда я не смотрю",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Фантомное Раскачивание",
      description: "Делать движения фантомными частями тела.",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Фантомное вращение.",
      description: "Вращаться фантомным телом вокруг какой-то из своих осей - вокруг оси Х, оси У или оси Z",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Изменение позы с целью достичь Не-Параллельности телу",
      description: "Попытаться фантомным телом стать не параллельно своему физическому телу.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Выкатывание.",
      description: "Выкатиться фантомным телом из физического.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Замах",
      description: "С замахом сделать движение фантомным телом.",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Вставание",
      description: "Просто встать",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Взлёт",
      description: "Одна из самых эффективных техник на сегодняшний день",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Зацеп",
      description: "Схватить фантомной рукой фантомный предмет",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Танец",
      description: "Потанцевать фантомным телом в фантомном пространстве",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Провалиться вниз",
      description: "Стремительно упасть куда-то вниз в фантомном пространстве",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Кувырок через голову",
      description: "Кувыркнуться фантомным телом через фантомную голову",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Вытягивание",
      description: "Представить что меня вытягивает туда куда мне нужно.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Идти куда мне нужно",
      description: "Пройтись по фантомному пространству фантомными ногами.",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Полёт",
      description: "Полетать по фантомному пространству",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Закрыть часть фантомной видимости фантомной рукой и представить что за рукой он уже есть то что мне надо. Назову это \"Божественный метод\".",
      description: "Одна из самых эффективных техник на сегодняшний день. Почти всегда даёт гиперреализм.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Панорамно-Детализированное Наблюдение Образов ",
      description: "Пытаться увидеть панораму и детали (т.е. детали предметов на краю горизонта или видных краем глаза)",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Наблюдение образов из центра головы",
      description: "С такой формулировкой смотреть на фантомный образ",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Визуализация",
      description: "Если образов нету - представить будто они есть",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Поднимать предметы и называть их",
      description: "Одна из самых эффективных техник на сегодняшний день",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Инерция",
      description: "Представить что меня куда-то тянет",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Представление G-Force (вестебюлярных перепадов)",
      description: "Попытаться ощутить что меня бросает будто я в истребителе лечу",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Стремительное (скоростное) падение (полёт) вниз головой закрыв глаза.",
      description: "Стремительное (скоростное) падение (полёт) вниз головой закрыв глаза.",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Визуализация рук",
      description: "Представить свои руки, фантомно тереть их и т.п.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Представление любого вида перемещения используя свои фантомные руки или ноги.",
      description: "Плаванье, бег, лазанье на канате, секс",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Прислушивание",
      description: "Услышать или прислушаться есть ли внутри головы шум или звуки какие-то.",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Представление звуков",
      description: "Если звуков нету представить какие бы они были если бы они были",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Попытки услышать как МЕНЯ кто-то зовёт по имени",
      description: "Разновидность прислушивания",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Звать кого-то самому",
      description: "Используя фантомный голос позвать кого-то в фантомном пространстве",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Напряжение мозга",
      description: "Попробовать напрячь свой мозг",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Представление предмета в руке которой я не вижу",
      description: "Держа руку за спиной или вне поля зрения попробовать ощутить в ней нужный предмет",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Напряжение всего тела без напряжения мышц",
      description: "Т.е. напрячь фантомное тело а не физическое",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Движение глаз быстро влево-вправо (физическое) ",
      description: "Реальными физическими глазами закрытыми",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Точка во лбу",
      description: "С закрытыми глазами попытаться увидеть чуть выше линии глаз точку внутри черепа",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Гипервентеляция",
      description: "Перенасытить организм кислородом часто дыша.",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Представление что меня кто-то вытаскивает из тела",
      description: "Какой-то человек или существо тянет меня туда куда мне надо",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Представь что ты сейчас находишься в реальности",
      description: "Будучи в фантомном мире представить что он является реальностью",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Представление себя разделенным (например, стоящим рядом с кроватью)",
      description: "Т.е. представлять себя фантомного в том ракурсе фантомного мира в каком нужно.",
      startDetalization: 20,
      endDetalization: 40,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Плацебо. Предстаь, что некоторые предметы помогают тебе достичь некоторых результатов.",
      description: "Т.е. представить например напиток углубляющий состояние фазы. Или представить предмет-углублятор.",
      startDetalization: 40,
      endDetalization: 40,
      startPanoramity: 40,
      endPanoramity: 80,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Вспоминание того что не знал",
      description: "Техника попытки вспомнить что-то. Например будучи в фантомном мире попытаться вспомнить рецепт гениального и вкусного торта",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 100,
      startDesireToChange: 30,
      endDesireToChange: 40
    },
    {
      name: "Вспоминание того что знал",
      description: "Если вспомнить в реале не получается можно попробовать вспомнить в фантомном мире. Например то что забылось ещё 20 лет назад.",
      startDetalization: 20,
      endDetalization: 80,
      startPanoramity: 20,
      endPanoramity: 30,
      startDesireToChange: 30,
      endDesireToChange: 40
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

  setDesireToChangeValue(val: number) {
    this.desireToChangeProperty.value = val
    this.desireToChangePropertyValue = val
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

  selectedTechniqueStartDesireToChange() {
    return this.selectedTechnique().startDesireToChange
  }

  selectedTechniqueEndDesireToChange() {
    return this.selectedTechnique().endDesireToChange
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

  selectedTechniqueDesireToChangeDifference() {
    return this.selectedTechniqueEndDesireToChange() - this.selectedTechniqueStartDesireToChange()
  }

  smoothTransitionFromAToB() {
    this.clearTimerPanoramity()
    this.clearTimerDetalization()
    this.clearTimerDesireToChange()

    if (this.selectedTechniqueIndex > 0) {
      this.detalizationProperty.value = this.selectedTechniqueStartDetalization()
      this.detalizationPropertyValue = this.selectedTechniqueStartDetalization()
      this.panoramityProperty.value = this.selectedTechniqueStartPanoramity()
      this.panoramityPropertyValue = this.selectedTechniqueStartPanoramity()
      this.desireToChangeProperty.value = this.selectedTechniqueStartDesireToChange()
      this.desireToChangePropertyValue = this.selectedTechniqueStartDesireToChange()

      this.numberAnimationStartedAt = Date.now()

      this.initPanoramitySmoothTimer()
      this.initDetalizationSmoothTimer()
      this.initDesireToChangeSmoothTimer()
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

  initDesireToChangeSmoothTimer() {
    if (!(this.timerDesireToChange)) {
      this.timerDesireToChange = setInterval(() => {
        this.desireToChangeClearTimerOrAnimate()
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

  desireToChangeClearTimerOrAnimate() {
    if (this.didTimePass()) {
      this.clearTimerDesireToChange()
    } else {
      this.animateDesireToChangeNumber();
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

  desireToChangeIsGrowing() {
    return this.selectedTechniqueStartDesireToChange() < this.selectedTechniqueEndDesireToChange()
  }

  desireToChangeIsFalling() {
    return this.selectedTechniqueStartDesireToChange() > this.selectedTechniqueEndDesireToChange()
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

  desireToChangeValueReachedEndDesireToChange() {
    if (this.desireToChangeIsGrowing()) {
      return this.desireToChangePropertyValue >= this.selectedTechniqueEndDesireToChange()
    } else if (this.desireToChangeIsFalling()) {
      return this.desireToChangePropertyValue <= this.selectedTechniqueEndDesireToChange()
    } else {
      return true // endDetalization() == StartDetalization()
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

  animateDesireToChangeNumber() {
    if (!(this.desireToChangeValueReachedEndDesireToChange())) {
      this.desireToChangeProperty.value = this.selectedTechniqueStartDesireToChange() + (this.selectedTechniqueDesireToChangeDifference() / this.animationDuration) * this.timePassed()
      this.desireToChangePropertyValue = this.selectedTechniqueStartDesireToChange() + (this.selectedTechniqueDesireToChangeDifference() / this.animationDuration) * this.timePassed()
    }
  }

  ngOnInit() {
    this.initChangingHeaderTabLoop()
  }

  initEndlessLoop() {
    if (!(this.endlessTimerID)) {
      this.endlessTimerID = setInterval(() => {
        this.smoothTransitionFromAToB()
      }, this.endlessLoopDuration);
    }
  }

  initChangingHeaderTabLoop() {
    if (!(this.endlessHeaderTabLoop)) {
      this.endlessHeaderTabLoop = setInterval(() => {
        this.selectNextTab()
      }, this.endlessHeaderTabLoopDuration);
    }
  }

  selectNextTab() {
    this.selectedHeaderTabIndex = this.nextTabIndex()
  }

  ngOnDestroy() {
    this.clearAllTimers()
  }

  clearAllTimers() {
    this.clearEndlessLoop()
    this.clearTimerDetalization()
    this.clearTimerPanoramity()
    this.clearTimerDesireToChange()
    this.clearHeaderTabLoop()
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

  clearTimerDesireToChange() {
    if (this.timerDesireToChange) {
      clearInterval(this.timerDesireToChange);
      this.timerDesireToChange = null
    }
  }

  clearEndlessLoop() {
    if (this.endlessTimerID) {
      clearInterval(this.endlessTimerID);
      this.endlessTimerID = null;
    }
  }

  clearHeaderTabLoop() {
    if (this.endlessHeaderTabLoop) {
      clearInterval(this.endlessHeaderTabLoop);
      this.endlessHeaderTabLoop = null;
    }
  }

}
