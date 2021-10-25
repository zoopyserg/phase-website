import {Component, ElementRef, Input, Directive, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chartsection',
  templateUrl: './chartsection.component.html',
  styleUrls: ['./chartsection.component.scss']
})

export class ChartsectionComponent implements AfterViewInit {
  @Input() detalizationProperty: any
  @Input() panoramityProperty: any
  @Input() wishToChangeProperty: any
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
    var width = 1000
    var height = 800
    var image = new Image(width, height);
    image.src = this.imgSrc();
    var context = this.context
    var canvasElement = this.canvasElement

    var detalization = this._detalizationPropertyValue
    var panoramity = this._panoramityPropertyValue

    image.addEventListener('load', function(){
      canvasElement.width = width
      canvasElement.height = height

      var receivedWidth = width
      var receivedHeight = height
      var halfReceivedWidth = Math.round(receivedWidth / 2)
      var halfReceivedHeight = Math.round(receivedHeight / 2)
      var centerPositionX = Math.round(width / 2)
      var centerPositionY = Math.round(height / 2)
      var startXSource = centerPositionX - halfReceivedWidth
      //var endXSource = centerPositionX + halfReceivedWidth
      var startYSource = centerPositionY - halfReceivedHeight
      //var endYSource = centerPositionY + halfReceivedHeight
      var startXDestination = startXSource
      var startYDestination = startYSource
      var destinationWidth = receivedWidth
      var destinationHeight = receivedHeight

      var originX = 100
      var originY = receivedHeight - 100

      var endOfXAxis = receivedWidth - 60
      var endOfYAxis = 40

      var horizontalStep = Math.round(Math.abs((endOfXAxis - originX) / 10))
      var verticalStep = Math.round(Math.abs((endOfYAxis - originY) / 10))

      // fill with black background
      //context.fillStyle = "white"
      //context.fillRect(0, 0, width, height)

      // draw X axis
      context.moveTo(originX, originY);
      context.lineTo(endOfXAxis, originY);
      context.lineWidth = 10
      context.strokeStyle = '#ccc';
      context.stroke();

      // draw Y axis
      context.moveTo(originX, originY);
      context.lineTo(originX, endOfYAxis);
      context.lineWidth = 10
      context.strokeStyle = '#ccc';
      context.stroke();

      // draw vertical lines
      for (let i = 1; i <= 10; i++) {
        context.moveTo(originX + horizontalStep * i, originY);
        context.lineTo(originX + horizontalStep * i, endOfYAxis);
        context.lineWidth = 3
        context.strokeStyle = '#ccc';
        context.stroke();
      }

      // draw horizontal lines
      for (let i = 1; i <=10; i++) {
        context.moveTo(originX, originY - verticalStep * i);
        context.lineTo(endOfXAxis, originY - verticalStep * i);
        context.lineWidth = 3
        context.strokeStyle = '#ccc';
        context.stroke();
      }

      // draw origin label
      context.font = "30px serif";
      context.fillText("0", originX - 50, originY + 50);

      // draw horizontal labels
      for (let i = 1; i <= 10; i++) {
        context.font = "30px serif";
        context.fillText((i * 10).toString(), (originX + horizontalStep * i) - 15, originY + 50);
      }

      // draw vertical labels
      for (let i = 1; i <= 10; i++) {
        context.font = "30px serif";
        context.fillText((i * 10).toString(), originX - 60, (originY - verticalStep * i) + 15);
      }

      // draw X axis name
      context.font = "40px serif";
      context.fillStyle = "#ff0000"
      context.fillText("Панорамность", endOfXAxis - 200, (originY) + 100);

      // draw Y axis name
      context.save();
      context.translate(0, 0);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.font = "40px serif";
      context.fillText("Детализация", -150, 30);
      context.restore();

      // draw Vacuum point
      var posx = endOfXAxis;
      var posy = originY;
      context.fillStyle = "#ff0000";
      context.beginPath();
      context.arc(posx, posy, 15, 0, 2 * Math.PI);
      context.fill();
      context.font = "35px serif";
      context.fillStyle = "#ff0000"
      context.fillText("Вакуум", posx - 170, posy - 20);

      // draw Hyperreality point
      var posx = endOfXAxis;
      var posy = endOfYAxis;
      context.fillStyle = "#ff0000";
      context.beginPath();
      context.arc(posx, posy, 15, 0, 2 * Math.PI);
      context.fill();
      context.font = "35px serif";
      context.fillStyle = "#ff0000"
      context.fillText("Гиперреализм", posx - 250, posy + 30);

      // draw Hyperreality point
      var posx = originX + (endOfXAxis - originX) / 2;
      var posy = originY - (originY - endOfYAxis) / 2;
      context.fillStyle = "#ff0000";
      context.beginPath();
      context.arc(posx, posy, 15, 0, 2 * Math.PI);
      context.fill();
      context.font = "35px serif";
      context.fillStyle = "#ff0000"
      context.fillText("Реализм", posx + 20, posy + 30);

      // draw Vague point
      var posx = originX + (endOfXAxis - originX) / 4;
      var posy = originY - (originY - endOfYAxis) / 4;
      context.fillStyle = "#ff0000";
      context.beginPath();
      context.arc(posx, posy, 15, 0, 2 * Math.PI);
      context.fill();
      context.font = "35px serif";
      context.fillStyle = "#ff0000"
      context.fillText("Мутность", posx + 20, posy + 30);

      // draw Carpet point
      var posx = originX + (endOfXAxis - originX) / 10;
      var posy = endOfYAxis + (originY - endOfYAxis) / 10;
      context.fillStyle = "#ff0000";
      context.beginPath();
      context.arc(posx, posy, 15, 0, 2 * Math.PI);
      context.fill();
      context.font = "35px serif";
      context.fillStyle = "#ff0000"
      context.fillText("Ощупывание Ковра Вблизи", posx + 20, posy + 30);

      // draw Carpet point
      var posx = originX + ((endOfXAxis - originX) / 100) * panoramity;
      var posy = originY - ((originY - endOfYAxis) / 100) * detalization;
      context.fillStyle = "#008000";
      context.beginPath();
      context.arc(posx, posy, 20, 0, 2 * Math.PI);
      context.fill();
      context.font = "35px serif";
      context.fillStyle = "#008000"
      context.fillText("МЫ", posx + 20, posy + 30);

    });
  }

}
