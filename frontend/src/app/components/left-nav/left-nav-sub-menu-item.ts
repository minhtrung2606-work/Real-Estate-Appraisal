export class LeftNavSubMenuItem {
  public title:string;
  public count:number;

  constructor(title = 'Unknown', count?:number) {
    this.title = title;
    this.count = count;
  }
}
