import {Injectable} from '@angular/core';
import {Region} from "../class/Region";
import {BlackCities, BlueCities, RedCities, YellowCities} from "../class/Cities";

@Injectable({
  providedIn: 'root'
})
export class InfectionManagerService {
  blueRegion!: Region;
  yellowRegion!: Region;
  blackRegion!: Region;
  redRegion!: Region;
  openCities!: Array<Map<string, string>>;
  excludeCities!: Array<string>;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.openCities = [];
    this.excludeCities = [];
    this.initializeCities();
  }

  initializeCities() {
    this.blueRegion = new Region(BlueCities, "bg-blue-500");
    this.yellowRegion = new Region(YellowCities, "bg-yellow-400");
    this.blackRegion = new Region(BlackCities, "bg-black");
    this.redRegion = new Region(RedCities, "bg-red-500");
  }

  drawCard() {
    const openMap = new Map<string, string>();
    for (const c of this.blueRegion.getList()) {
      if (!c[1]) {
        openMap.set(c[0], this.blueRegion.getColor());
      }
    }
    for (const c of this.yellowRegion.getList()) {
      if (!c[1]) {
        openMap.set(c[0], this.yellowRegion.getColor());
      }
    }
    for (const c of this.blackRegion.getList()) {
      if (!c[1]) {
        openMap.set(c[0], this.blackRegion.getColor());
      }
    }
    for (const c of this.redRegion.getList()) {
      if (!c[1]) {
        openMap.set(c[0], this.redRegion.getColor());
      }
    }

    for (const [key, _] of openMap) {
      for (const cities of this.openCities) {
        cities.delete(key);
      }
    }
    this.openCities.unshift(openMap);
    this.openCities = this.openCities.filter(s => s.size != 0);
  }

  popOpenCity(cityName: string) {
    this.openCities.forEach(citiesSet => {
      citiesSet.delete(cityName);
    });
  }
}
