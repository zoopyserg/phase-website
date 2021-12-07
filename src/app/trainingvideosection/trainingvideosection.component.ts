import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trainingvideosection',
  templateUrl: './trainingvideosection.component.html',
  styleUrls: ['./trainingvideosection.component.scss']
})
export class TrainingvideosectionComponent implements OnInit {
  @Input() videoTitle: any
  @Input() videoUrl: any
  safeSrc: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer) {  }

  ngOnInit(): void {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
