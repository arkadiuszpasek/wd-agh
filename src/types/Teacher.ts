export class Teacher {
  constructor(public readonly name: string, public readonly surname: string, public readonly title: string) {}

  get displayName(): string {
    return `${this.title} ${this.name} ${this.surname}`;
  }
}
