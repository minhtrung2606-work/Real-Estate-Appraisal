import { Component, OnInit, Input } from '@angular/core';
import { VerticalNavMenuItem } from './vertical-nav-menu-item';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent implements OnInit {
  abstract;

  @Input() itemList: Array<VerticalNavMenuItem>;
  public defaultFaIconClass: string;

  constructor() {
    this.defaultFaIconClass = 'fa-angle-left';
  }

  ngOnInit() {
  }

  getItemList(): Array<VerticalNavMenuItem> {
    return this.itemList;
  }

}
