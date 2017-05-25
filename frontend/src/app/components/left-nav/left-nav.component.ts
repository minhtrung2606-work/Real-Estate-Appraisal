import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  abstract;

  @HostBinding('attr.class') cssClass = 'app-left-nav';

  constructor() { }

  ngOnInit() {
  }

}
