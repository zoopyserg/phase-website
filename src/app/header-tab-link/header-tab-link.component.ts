import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-tab-link',
  templateUrl: './header-tab-link.component.html',
  styleUrls: ['./header-tab-link.component.scss']
})
export class HeaderTabLinkComponent implements OnInit {
  @Input() theNumber : any
  @Input() isActive : any

  constructor() { }

  ngOnInit(): void {
  }

}
