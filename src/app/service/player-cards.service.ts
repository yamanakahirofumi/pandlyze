import { Injectable } from '@angular/core';
import { Region } from '../class/Region';
import { CITY_CONFIG } from '../class/Cities';
import { Color } from '../class/Color';

@Injectable({
  providedIn: 'root',
})
export class PlayerCardsService {
  regions!: Record<Color, Region>;
  totalEpidemic!: number;
  nowEpidemic!: number;
  eventCards!: number;
  totalInitialSize!: number;

  constructor() {
    this.initialize(4, 8);
  }

  initialize(total: number, initialSize: number) {
    this.totalEpidemic = total;
    this.totalInitialSize = initialSize;
    this.nowEpidemic = 0;
    this.eventCards = 0;

    this.regions = {
      blue: new Region(CITY_CONFIG.blue.cities, CITY_CONFIG.blue.uiColor),
      yellow: new Region(CITY_CONFIG.yellow.cities, CITY_CONFIG.yellow.uiColor),
      black: new Region(CITY_CONFIG.black.cities, CITY_CONFIG.black.uiColor),
      red: new Region(CITY_CONFIG.red.cities, CITY_CONFIG.red.uiColor),
    };
  }

  getCount(color: Color): number {
    return this.regions[color].trueCount();
  }

  usedCount(): number {
    const falseCounts = (Object.values(this.regions) as Region[]).reduce(
      (acc, region) => acc + region.falseCount(),
      0,
    );
    return this.nowEpidemic + falseCounts + this.eventCards;
  }

  totalCards(): number {
    return 53 + this.totalEpidemic - this.totalInitialSize;
  }

  epidemicTurn(): number {
    return Math.floor(this.usedCount() / this.segmentCount()) + 1;
  }

  segmentCount(): number {
    return this.totalCards() / this.totalEpidemic;
  }

  remainingCardsOfSegment(): number {
    return this.segmentCount() * this.epidemicTurn() - this.usedCount();
  }

  includeCount(): number {
    return this.epidemicTurn() - this.nowEpidemic;
  }

  epidemic(): void {
    this.nowEpidemic++;
  }
}
