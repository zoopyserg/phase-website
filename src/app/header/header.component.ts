import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() selectedHeaderTabIndex : any
  @Input() nextTabIndex : any
  @Input() previousTabIndex : any
  @Input() headerTabs : any
  @Output() onSelectedHeaderTabChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedHeaderTab(event: any) {
    this.onSelectedHeaderTabChange.emit(event)
  }
}
