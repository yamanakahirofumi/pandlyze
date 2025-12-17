export class Region {
  private cities: Map<string, boolean>;
  private color: string;

  constructor(cityList: string[],color:string) {
    this.color = color;
    this.cities = new Map<string, boolean>();
    cityList.map(city => this.cities.set(city, true));
  }

  getColor(): string {
    return this.color;
  }

  isContains(name: string): boolean {
    return this.cities.has(name);
  }

  changeCityValue(name: string, value: boolean): void {
    if (this.isContains(name)) {
      this.cities.set(name, value);
    } else {
      throw new Error("bug");
    }
  }

  getCityValue(name: string): boolean {
    if (this.isContains(name)) {
      return <boolean>this.cities.get(name);
    } else {
      throw new Error("bug");
    }
  }

  getList(): MapIterator<[string, boolean]> {
    return this.cities.entries();
  }

  getRemainList(): Array<[string, boolean]> {
    return Array.from(this.cities.entries()).filter(([_, val]) => val)
  }

  trueCount(): number {
    return [...this.cities.values()].filter(v => v).reduce((count) => count + 1, 0);
  }

  falseCount(): number {
    return [...this.cities.values()].filter(v => !v).reduce((count) => count + 1, 0);
  }
}
