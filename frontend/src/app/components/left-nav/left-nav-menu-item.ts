import { LeftNavSubMenuItem } from './left-nav-sub-menu-item';

export class LeftNavMenuItem {
  public title:string;
  public faIconClass:string;
  public menuItemList:Array<LeftNavSubMenuItem>;

  constructor(title = 'Unknown', faIconClass?:string) {
    this.title = title;
    this.faIconClass = faIconClass;
    this.menuItemList = [];
  }

  addMenuItem(subMenuItem:LeftNavSubMenuItem):LeftNavMenuItem {
    this.menuItemList.push(subMenuItem);
    return this;
  }

  hasMenuItemList(): boolean {
    return this.menuItemList.length > 0;
  }

  getMenuItemList(): Array<LeftNavSubMenuItem> {
    return this.menuItemList;
  }
}
