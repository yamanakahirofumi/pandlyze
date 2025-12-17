import {Injectable} from '@angular/core';
import {Region} from "../class/Region";
import {BlackCities, BlueCities, RedCities, YellowCities} from "../class/Cities";

@Injectable({
  providedIn: 'root'
})
export class PlayerCardsService {
  blueRegion!: Region;
  yellowRegion!: Region;
  blackRegion!: Region;
  redRegion!: Region;
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
    this.blueRegion = new Region(BlueCities, "bg-blue-500");
    this.yellowRegion = new Region(YellowCities, "bg-yellow-400");
    this.blackRegion = new Region(BlackCities, "bg-black");
    this.redRegion = new Region(RedCities, "bg-red-500");
  }

  blueCount(): number {
    return this.blueRegion.trueCount();
  }

  yellowCount(): number {
    return this.yellowRegion.trueCount();
  }

  blackCount(): number {
    return this.blackRegion.trueCount();
  }

  redCount(): number {
    return this.redRegion.trueCount();
  }

  usedCount(): number {
    return this.nowEpidemic + this.blueRegion.falseCount() + this.yellowRegion.falseCount() + this.blackRegion.falseCount() + this.redRegion.falseCount() + this.eventCards;
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
