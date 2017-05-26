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
}
