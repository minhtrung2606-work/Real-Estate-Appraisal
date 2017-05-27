import { Component } from '@angular/core';
import { LeftNavMenuItem } from './components/left-nav/left-nav-menu-item';
import { LeftNavSubMenuItem } from './components/left-nav/left-nav-sub-menu-item';
import { VerticalNavMenuItem } from './components/vertical-nav/vertical-nav-menu-item';

let leftNavJson = [
  {
    title: 'Bảng điều khiển',
    faIconClass: 'fa-home'
  },
  {
    title: 'Hồ sơ',
    faIconClass: 'fa-envelope',
    menuItemList: [
      { title: 'HS yêu cầu', count: 3, statisticClass: 'app-request-record' },
      { title: 'HS chờ phân công', count: 25, statisticClass: 'app-pending-assignment' },
      { title: 'HS đang thẩm định', count: 11, statisticClass: 'app-pending-appraisal' },
      { title: 'HS chờ kiểm soát', count: 0, statisticClass: 'app-pending-inspection' },
      { title: 'HS chờ trình duyệt', count: 1, statisticClass: 'app-pending-review' },
      { title: 'HS chờ duyệt phát hành', count: 0, statisticClass: 'app-pending-release-approval' },
      { title: 'HS đã xuất chứng thư', count: 0, statisticClass: 'app-released-certificate' }
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

let verticalNavJson = [
  { title: 'Pháp lý' },
  { title: 'Tài liệu đính kèm' },
  { title: 'Vị trí' },
  { title: 'Đất' },
  { title: 'Nhà' },
  { title: 'Tài sản khác' },
  { title: 'Đánh giá' },
  { title: 'Tài sản so sánh' },
  { title: 'Kết luận' },
  { title: 'Nội dung trao đổi' },
  { title: 'Tác nghiệp' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private leftNavMenuItemList: Array<LeftNavMenuItem>;
  private verticalNavMenuItemList: Array<VerticalNavMenuItem>;
  private leftNavCollapsed: boolean;

  constructor() {
    this.leftNavMenuItemList = constructLeftNav(leftNavJson);
    this.verticalNavMenuItemList = constructVerticalNav(verticalNavJson);
  }

  getLeftNavMenuItemList(): Array<LeftNavMenuItem> {
    return this.leftNavMenuItemList;
  }

  getVerticalNavMenuItemList(): Array<VerticalNavMenuItem> {
    return this.verticalNavMenuItemList;
  }

  onBarsBtnClicked(): void {
    this.leftNavCollapsed = !this.leftNavCollapsed;
  }
}

function constructLeftNav(leftNavJson: Array<any>) {
  let leftNavItemList = [];
  let leftNavItemJson;
  while ((leftNavItemJson = leftNavJson.shift())) {
    let leftNavItem = new LeftNavMenuItem(leftNavItemJson.title, leftNavItemJson.faIconClass);
    if (leftNavItemJson.menuItemList && leftNavItemJson.menuItemList.length > 0) {
      let leftNavSubMenuItemJson, i = 0, iLen = leftNavItemJson.menuItemList.length;
      for (; i < iLen; i++) {
        leftNavSubMenuItemJson = leftNavItemJson.menuItemList[i];
        var leftNavSubMenuItem = new LeftNavSubMenuItem(
          leftNavSubMenuItemJson.title,
          leftNavSubMenuItemJson.count,
          leftNavSubMenuItemJson.statisticClass);
        leftNavItem.addMenuItem(leftNavSubMenuItem);
      }
    }
    leftNavItemList.push(leftNavItem);
  }
  return leftNavItemList;
}

function constructVerticalNav(verticalNavJson: Array<any>): Array<VerticalNavMenuItem> {
  let verticalNavItemList = [];
  let verticalNavItemJson;
  while ((verticalNavItemJson = verticalNavJson.shift())) {
    verticalNavItemList.push(new VerticalNavMenuItem(verticalNavItemJson.title));
  }
  return verticalNavItemList;
}
