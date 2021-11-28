export class Teacher {
  constructor(
    public readonly name: string,
    public readonly surname: string
  ) {}

  get displayName(): string {
    return `${this.name} ${this.surname}`;
  }
}
