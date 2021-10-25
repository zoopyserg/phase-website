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
  //_detalizationProperty: any;

  get selectedImageIndex(): number {
    return this._selectedImageIndex;
  }
  @Input() set selectedImageIndex(value: number) {
    this._selectedImageIndex = value;
    this.drawImage()
  }

  // get detalizationProperty(): any {
  //   return this._detalizationProperty;
  // }
  // @Input() set detalizationProperty(value: any) {
  //   this._detalizationProperty = value;
  //   this.drawImage()
  // }

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
    console.log('drawing')
    var image = new Image();
    image.src = this.imgSrc();
    var context = this.context
    var canvasElement = this.canvasElement
    var contrast = 2 * this.detalizationProperty.value - 100 // turning range from -100..100 to 0..100 (using y=2x-100 formula)

    image.addEventListener('load', function(){
      canvasElement.width = image.width
      canvasElement.height = image.height
      context.drawImage(image, 0, 0);

      console.log("test");

      //var imageData = context.createImageData(image.width, image.height)
      var imageData = context.getImageData(0,0, image.width, image.height)

      var d = imageData.data
      contrast = (contrast/100) + 1;  //convert to decimal & shift range: [0..2]
      var intercept = 128 * (1 - contrast);
      for(var i=0;i<d.length;i+=4){   //r,g,b,a
        d[i] = d[i]*contrast + intercept;
        d[i+1] = d[i+1]*contrast + intercept;
        d[i+2] = d[i+2]*contrast + intercept;
      }
      context.putImageData(imageData, 0, 0);
    });
  }

}
