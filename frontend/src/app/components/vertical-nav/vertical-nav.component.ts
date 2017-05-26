import { Component, OnInit } from '@angular/core';
import { VerticalNavMenuItem } from './vertical-nav-menu-item';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent implements OnInit {
  abstract;

  public menuItemList: Array<VerticalNavMenuItem>;
  public defaultFaIconClass: string;

  constructor() {
    this.menuItemList = [];
    this.defaultFaIconClass = 'fa-angle-left';
  }

  ngOnInit() {
    this.menuItemList = [
      new VerticalNavMenuItem('Pháp lý'),
      new VerticalNavMenuItem('Tài liệu đính kèm'),
      new VerticalNavMenuItem('Vị trí'),
      new VerticalNavMenuItem('Đất'),
      new VerticalNavMenuItem('Nhà'),
      new VerticalNavMenuItem('Tài sản khác'),
      new VerticalNavMenuItem('Đánh giá'),
      new VerticalNavMenuItem('Tài sản so sánh'),
      new VerticalNavMenuItem('Kết luận'),
      new VerticalNavMenuItem('Nội dung trao đổi'),
      new VerticalNavMenuItem('Tác nghiệp')
    ];
  }

}
