import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { LeftNavMenuItem } from './left-nav-menu-item'

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  abstract;

  @HostBinding('attr.class') cssClass = 'app-left-nav';
  @Input() itemList: Array<LeftNavMenuItem>;

  private currentLeftNavMenuItem:LeftNavMenuItem;

  constructor() {
    this.currentLeftNavMenuItem = null;
  }

  ngOnInit() {
  }

  getItemList(): Array<LeftNavMenuItem> {
    return this.itemList;
  }

  onMenuItemClick(menuItem): void {
    this.currentLeftNavMenuItem = menuItem;
  }

  isActivated(menuItem: LeftNavMenuItem): boolean {
    return this.currentLeftNavMenuItem && this.currentLeftNavMenuItem.equals(menuItem);
  }
}
