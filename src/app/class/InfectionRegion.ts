export class InfectionRegion {
  private cities: Map<string, boolean>;

  constructor(cityList: string[]) {
    this.cities = new Map<string, boolean>();
    cityList.map(city => this.cities.set(city, true));
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

  trueCount(): number {
    return [...this.cities.values()].filter(v => v).reduce((count) => count + 1, 0);
  }

  falseCount(): number {
    return [...this.cities.values()].filter(v => !v).reduce((count) => count + 1, 0);
  }
}

