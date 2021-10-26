import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss']
})
export class HeaderTabComponent implements OnInit {
  @Input() tab : any
  @Input() isActive : any

  constructor() { }

  ngOnInit(): void {
  }

}
