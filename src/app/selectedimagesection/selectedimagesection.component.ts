import {Component, ElementRef, Input, Directive, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-selectedimagesection',
  templateUrl: './selectedimagesection.component.html',
  styleUrls: ['./selectedimagesection.component.scss']
})

export class SelectedimagesectionComponent implements AfterViewInit {
  @Input() detalizationProperty: any
  @Input() panoramityProperty: any
  @Input() desireToChangeProperty: any
  @Input() imageNames: any
  @Input() techniques: any
  @Input() selectedTechniqueIndex: any

  @ViewChild('myCanvas') myCanvas!: ElementRef;

  canvasElement!: HTMLCanvasElement;
  context!: any

  _selectedImageIndex: number = 0;
  _detalizationPropertyValue: number = 50;
  _panoramityPropertyValue: number = 50;

  get selectedImageIndex(): number {
    return this._selectedImageIndex;
  }
  @Input() set selectedImageIndex(value: number) {
    this._selectedImageIndex = value;
    this.drawImage()
  }

  get detalizationPropertyValue(): any {
    return this._detalizationPropertyValue;
  }
  @Input() set detalizationPropertyValue(value: any) {
    this._detalizationPropertyValue = value;
    this.drawImage()
  }

  get panoramityPropertyValue(): any {
    return this._panoramityPropertyValue;
  }
  @Input() set panoramityPropertyValue(value: any) {
    this._panoramityPropertyValue = value;
    this.drawImage()
  }

  selectedTechnique() {
    return this.techniques.find((technique: any, index: any) : any => {
      if (technique.id == this.selectedTechniqueIndex) {
        return true
      }
    })
  }

  selectedTechniqueName() {
    return this.selectedTechnique().name
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
    var contrast = 2 * this._detalizationPropertyValue - 100 // turning range from -100..100 to 0..100 (using y=2x-100 formula)
    var darkness = Math.max(0, - this._detalizationPropertyValue / 40 + 1) // y=-x/40+1 for darkness alpha intensity, set to 0 if y < 0
    var parnoramityValue = this._panoramityPropertyValue

    image.addEventListener('load', function(){
      canvasElement.width = image.width
      canvasElement.height = image.height

      var receivedWidth = Math.round(image.width * parnoramityValue / 100)
      var receivedHeight = Math.round(image.height * parnoramityValue / 100)
      var halfReceivedWidth = Math.round(receivedWidth / 2)
      var halfReceivedHeight = Math.round(receivedHeight / 2)
      var centerPositionX = Math.round(image.width / 2)
      var centerPositionY = Math.round(image.height / 2)
      var startXSource = centerPositionX - halfReceivedWidth
      //var endXSource = centerPositionX + halfReceivedWidth
      var startYSource = centerPositionY - halfReceivedHeight
      //var endYSource = centerPositionY + halfReceivedHeight
      var startXDestination = startXSource
      var startYDestination = startYSource
      var destinationWidth = receivedWidth
      var destinationHeight = receivedHeight


      // fill with black background
      context.fillStyle = "black"
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)

      context.drawImage(image, startXSource, startYSource, receivedWidth, receivedHeight, startXDestination, startYDestination, destinationWidth, destinationHeight);

      //contrast
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
      //darkness
      context.globalCompositeOperation = "darken"
      context.globalAlpha = darkness
      context.fillStyle = "black"
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    });
  }

}
