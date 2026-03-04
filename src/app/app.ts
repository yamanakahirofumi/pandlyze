import { Component, signal, WritableSignal, inject } from '@angular/core';
import { PlayerCardsService } from './service/player-cards.service';
import { InfectionManagerService } from './service/infection-manager.service';
import { Region } from './class/Region';
import { Percent } from './parts/percent/percent';
import { CityTile } from './parts/city-tile/city-tile';
import { Color } from './class/Color';

@Component({
  selector: 'app-root',
  imports: [Percent, CityTile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly playerCardsService = inject(PlayerCardsService);
  private readonly infectionManagerService = inject(InfectionManagerService);

  resetModalFlag = signal(false);
  readonly colorList: Color[] = ['red', 'blue', 'yellow', 'black'];

  get playerCards() {
    return this.playerCardsService.regions;
  }

  get infectionCards() {
    return this.infectionManagerService.regions;
  }

  changeValue(region: Region, name: string) {
    region.changeCityValue(name, false);
    this.infectionManagerService.popOpenCity(name);
  }

  totalSegment(): number {
    return this.playerCardsService.remainingCardsOfSegment();
  }

  includeEpiCards(): number {
    return this.playerCardsService.includeCount();
  }

  nowEvent(): number {
    return this.playerCardsService.eventCards;
  }

  addEvent() {
    this.playerCardsService.eventCards++;
  }

  minusEvent() {
    this.playerCardsService.eventCards--;
  }

  epidemic() {
    this.infectionManagerService.drawCard();
    this.infectionManagerService.initializeCities();
    this.playerCardsService.epidemic();
  }

  modeChange() {
    this.resetModalFlag.set(!this.resetModalFlag());
  }

  getOpenCity(): Array<Map<string, string>> {
    return this.infectionManagerService.openCities;
  }

  exclude(region: Region, name: string) {}

  getCount(color: Color): number {
    return this.playerCardsService.getCount(color);
  }
}
