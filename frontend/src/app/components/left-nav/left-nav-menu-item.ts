import { LeftNavSubMenuItem } from './left-nav-sub-menu-item';

export class LeftNavMenuItem {
  private title: string;
  private faIconClass: string;
  private menuItemList: Array<LeftNavSubMenuItem>;

  constructor(title = 'Unknown', faIconClass?:string) {
    this.title = title;
    this.faIconClass = faIconClass;
    this.menuItemList = [];
  }

  addMenuItem(subMenuItem: LeftNavSubMenuItem): LeftNavMenuItem {
    this.menuItemList.push(subMenuItem);
    return this;
  }

  hasMenuItemList(): boolean {
    return this.menuItemList.length > 0;
  }

  getMenuItemList(): Array<LeftNavSubMenuItem> {
    return this.menuItemList;
  }

  getFaIconClass(): string {
    return this.faIconClass;
  }

  getTitle(): string {
    return this.title;
  }

  equals(o: any): boolean {
    if (this === o) {
      return true;
    } else if (o instanceof LeftNavMenuItem) {
      return o.getTitle() === this.title;
    } else {
      return false;
    }
  }
}
