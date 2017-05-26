export class LeftNavSubMenuItem {
  public title:string;
  public count:number;

  constructor(title = 'Unknown', count = null) {
    this.title = title;
    this.count = count;
  }

  hasStatisticInfo(): boolean {
    return this.count !== null;
  }

  getStatisticInfo(): number {
    return this.count;
  }
}
