export class VerticalNavMenuItem {
  private title: string;
  private faIconClass: string;

  constructor(title = 'Unknown', faIconClass?: string) {
    this.title = title;
    this.faIconClass = faIconClass;
  }

  getTitle(): string {
    return this.title;
  }

  getFaIconClass(): string {
    return this.faIconClass;
  }

  equals(o: any): boolean {
    if (this === o) {
      return true;
    } else if (o instanceof VerticalNavMenuItem) {
      return o.getTitle() === this.title;
    } else {
      return false;
    }
  }
}
