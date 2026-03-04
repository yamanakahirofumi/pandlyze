import { Injectable } from '@angular/core';
import { Region } from '../class/Region';
import { CITY_CONFIG } from '../class/Cities';
import { Color } from '../class/Color';

@Injectable({
  providedIn: 'root',
})
export class InfectionManagerService {
  regions!: Record<Color, Region>;
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
    this.regions = {
      blue: new Region(CITY_CONFIG.blue.cities, CITY_CONFIG.blue.uiColor),
      yellow: new Region(CITY_CONFIG.yellow.cities, CITY_CONFIG.yellow.uiColor),
      black: new Region(CITY_CONFIG.black.cities, CITY_CONFIG.black.uiColor),
      red: new Region(CITY_CONFIG.red.cities, CITY_CONFIG.red.uiColor),
    };
  }

  drawCard() {
    const openMap = new Map<string, string>();

    (Object.values(this.regions) as Region[]).forEach((region) => {
      for (const [name, isClosed] of region.getList()) {
        if (!isClosed) {
          openMap.set(name, region.getColor());
        }
      }
    });

    for (const [key, _] of openMap) {
      for (const cities of this.openCities) {
        cities.delete(key);
      }
    }
    this.openCities.unshift(openMap);
    this.openCities = this.openCities.filter((s) => s.size != 0);
  }

  popOpenCity(cityName: string) {
    this.openCities.forEach((citiesSet) => {
      citiesSet.delete(cityName);
    });
  }
}
