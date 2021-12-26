import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SlidepropertiessectionComponent } from './slidepropertiessection/slidepropertiessection.component';
import { SelectpicturesectionComponent } from './selectpicturesection/selectpicturesection.component';
import { SelecttechniquesectionComponent } from './selecttechniquesection/selecttechniquesection.component';
import { TrainingvideosectionComponent } from './trainingvideosection/trainingvideosection.component';
import { ChartsectionComponent } from './chartsection/chartsection.component';
import { SelectedimagesectionComponent } from './selectedimagesection/selectedimagesection.component';
import { PropertySliderComponent } from './property-slider/property-slider.component';
import { FormsModule } from "@angular/forms";
import { ImageNameComponent } from './image-name/image-name.component';
import { TechniqueNameComponent } from './technique-name/technique-name.component';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HeaderTabComponent } from './header-tab/header-tab.component';
import { TrainingComponent } from './training/training.component';
import { InstructionssectionComponent } from "./instructionssection/instructionssection.component";
import {
  HyperphaseinstructionssectionComponent
} from "./hyperphaseinstructionssection/hyperphaseinstructionssection.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SlidepropertiessectionComponent,
    SelectpicturesectionComponent,
    SelecttechniquesectionComponent,
    TrainingvideosectionComponent,
    ChartsectionComponent,
    SelectedimagesectionComponent,
    PropertySliderComponent,
    ImageNameComponent,
    TechniqueNameComponent,
    HeaderTabComponent,
    TrainingComponent,
    InstructionssectionComponent,
    HyperphaseinstructionssectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
