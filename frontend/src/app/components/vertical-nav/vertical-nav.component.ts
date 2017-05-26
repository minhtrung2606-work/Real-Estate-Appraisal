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
  @Input() defaultFaIconClass: string;

  private currentVerticalNavMenuItem: VerticalNavMenuItem;

  constructor() { }

  ngOnInit() {
  }

  getItemList(): Array<VerticalNavMenuItem> {
    return this.itemList;
  }

  onMenuItemClicked(menuItem: VerticalNavMenuItem): void {
    this.currentVerticalNavMenuItem = menuItem;
  }

  isMenuItemActivated(menuItem: any): boolean {
    return this.currentVerticalNavMenuItem && this.currentVerticalNavMenuItem.equals(menuItem);
  }

}
