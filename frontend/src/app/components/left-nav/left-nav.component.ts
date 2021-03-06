import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { LeftNavMenuItem } from './left-nav-menu-item'
import { LeftNavSubMenuItem } from './left-nav-sub-menu-item';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  abstract;

  @HostBinding('attr.class') cssClass = 'app-left-nav';
  @Input() itemList: Array<LeftNavMenuItem>;
  @Input() collapsed: boolean;

  private currentLeftNavMenuItem: LeftNavMenuItem;
  private currentLeftNavSubMenuItem: LeftNavSubMenuItem;

  constructor() {
    this.currentLeftNavMenuItem = null;
    this.currentLeftNavSubMenuItem = null;
  }

  ngOnInit() {
  }

  getItemList(): Array<LeftNavMenuItem> {
    return this.itemList;
  }

  onMenuItemClicked(menuItem: LeftNavMenuItem): void {
    if (this.isMenuItemActivated(menuItem)) {
      this.currentLeftNavMenuItem = null;
    } else {
      this.currentLeftNavMenuItem = menuItem;
    }
  }

  onSubMenuItemClicked(subMenuItem: LeftNavSubMenuItem): void {
    this.currentLeftNavSubMenuItem = subMenuItem;
  }

  isMenuItemActivated(menuItem: LeftNavMenuItem): boolean {
    return this.currentLeftNavMenuItem && this.currentLeftNavMenuItem.equals(menuItem);
  }

  isSubMenuItemActivated(subMenuItem: LeftNavSubMenuItem): boolean {
    return this.currentLeftNavSubMenuItem && this.currentLeftNavSubMenuItem.equals(subMenuItem);
  }

  isCollapsed(): boolean {
    return this.collapsed;
  }
}