import {Component, ElementRef, Input, Directive, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-selectedimagesection',
  templateUrl: './selectedimagesection.component.html',
  styleUrls: ['./selectedimagesection.component.scss']
})

export class SelectedimagesectionComponent implements AfterViewInit {
  @Input() detalizationProperty: any
  @Input() panoramityProperty: any
  @Input() wishToChangeProperty: any
  @Input() imageNames: any
  //@Input() selectedImageIndex: any
  @Input() techniques: any
  @Input() selectedTechniqueIndex: any

  @ViewChild('myCanvas') myCanvas!: ElementRef;

  canvasElement!: HTMLCanvasElement;
  context!: any

  _selectedImageIndex: number = 0;
  get selectedImageIndex(): number {
    return this._selectedImageIndex;
  }
  @Input() set selectedImageIndex(value: number) {
    this._selectedImageIndex = value;
    this.drawImage()
  }

  constructor() {

  }

  ngAfterViewInit(): void {
    this.canvasElement = this.myCanvas.nativeElement;
    this.context = this.canvasElement.getContext("2d");
    this.drawImage()
  }

  imgSrc(): string {
    return "assets/images/objects/" + this.imageNames[this._selectedImageIndex].filename;
  }

  drawImage() {
    var image = new Image();
    image.src = this.imgSrc();
    var context = this.context
    var canvasElement = this.canvasElement

    image.addEventListener('load', function(){
      canvasElement.width = image.width
      canvasElement.height = image.height
      context.drawImage(image, 0, 0);
    });
    //image.src = this.imgSrc()
  }

  detalizationValue(): number {
    return this.detalizationProperty - 50
  }

  contrastImage(imgData: any, contrast: number): any{  //input range [-100..100]
    var d = imgData.data;
    contrast = (contrast/100) + 1;  //convert to decimal & shift range: [0..2]
    var intercept = 128 * (1 - contrast);
    for(var i=0;i<d.length;i+=4){   //r,g,b,a
      d[i] = d[i]*contrast + intercept;
      d[i+1] = d[i+1]*contrast + intercept;
      d[i+2] = d[i+2]*contrast + intercept;
    }
    return imgData;
  }

}
