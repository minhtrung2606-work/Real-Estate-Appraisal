export class LeftNavSubMenuItem {
  private title: string;
  private count: number;
  private statisticClass: string;

  constructor(title = 'Unknown', count = null, statisticClass = 'app-default-statistic') {
    this.title = title;
    this.count = count;
    this.statisticClass = statisticClass;
  }

  hasStatisticInfo(): boolean {
    return this.count !== null;
  }

  getStatisticInfo(): number {
    return this.count;
  }

  getTitle(): string {
    return this.title;
  }

  getStatisticInfoClass(): string {
    return this.statisticClass;
  }
}
