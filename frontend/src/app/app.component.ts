import { Component } from '@angular/core';
import { LeftNavMenuItem } from './components/left-nav/left-nav-menu-item';
import { LeftNavSubMenuItem } from './components/left-nav/left-nav-sub-menu-item';

let leftNavJson = [
  {
    title: 'Bảng điều khiển',
    faIconClass: 'fa-home'
  },
  {
    title: 'Hồ sơ',
    faIconClass: 'fa-envelope',
    menuItemList: [
      { title: 'HS yêu cầu' },
      { title: 'HS chờ phân công' },
      { title: 'HS đang thẩm định' },
      { title: 'HS chờ kiểm soát' },
      { title: 'HS chờ trình duyệt' },
      { title: 'HS chờ duyệt phát hành' },
      { title: 'HS đã xuất chứng thư' }
    ]
  },
  {
    title: 'Báo cáo',
    faIconClass: 'fa-file'
  },
  {
    title: 'Hợp đồng',
    faIconClass: 'fa-handshake-o'
  },
  {
    title: 'Công nợ',
    faIconClass: 'fa-handshake-o'
  },
  {
    title: 'Quản trị',
    faIconClass: 'fa-gears'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private leftNavMenuItemList:Array<LeftNavMenuItem>;

  constructor() {
    this.leftNavMenuItemList = constructLeftNav(leftNavJson);
  }
}

function constructLeftNav(leftNavJson) {
  let leftNavItemList = [];
  let leftNavItemJson;
  while ((leftNavItemJson = leftNavJson.shift())) {
    let leftNavItem = new LeftNavMenuItem(leftNavItemJson.title, leftNavItemJson.faIconClass);
    if (leftNavItemJson.menuItemList && leftNavItemJson.menuItemList.length > 0) {
      let leftNavSubMenuItemJson, i = 0, iLen = leftNavItemJson.menuItemList.length;
      for (; i < iLen; i++) {
        leftNavSubMenuItemJson = leftNavItemJson.menuItemList[i];
        leftNavItem.addMenuItem(new LeftNavSubMenuItem(leftNavSubMenuItemJson.title));
      }
    }
    leftNavItemList.push(leftNavItem);
  }
  return leftNavItemList;
}
