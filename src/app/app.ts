import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {PlayerCardsService} from './service/player-cards.service';
import {InfectionManagerService} from './service/infection-manager.service';
import {Region} from './class/Region';
import {Percent} from './parts/percent/percent';
import {CityTile} from './parts/city-tile/city-tile';
import {Color} from './class/Color';

@Component({
  selector: 'app-root',
  imports: [
    Percent,
    CityTile
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  resetModalFlag: WritableSignal<boolean> = signal(false);
  colorList: Color[] = ['red', 'blue', 'yellow', 'black'];
  playerCards!: Record<Color, Region>;
  infectionCards!: Record<Color, Region>;

  constructor(private playerCardsService: PlayerCardsService,
              private infectionManagerService: InfectionManagerService) {
  }

  ngOnInit() {
    this.playerCards = {
      red: this.playerCardsService.redRegion,
      blue: this.playerCardsService.blueRegion,
      yellow: this.playerCardsService.yellowRegion,
      black: this.playerCardsService.blackRegion,
    }

    this.initInfection();
  }

  initInfection() {
    this.infectionCards = {
      red: this.infectionManagerService.redRegion,
      blue: this.infectionManagerService.blueRegion,
      yellow: this.infectionManagerService.yellowRegion,
      black: this.infectionManagerService.blackRegion,
    }
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
    this.initInfection();
  }

  modeChange() {
    this.resetModalFlag.set(!this.resetModalFlag());
  }

  getOpenCity(): Array<Map<string, string>> {
    return this.infectionManagerService.openCities;
  }

  exclude(region: Region, name: string) {

  }

  getCount(color: Color): number {
    let count = 0;
    switch (color) {
      case 'red':
        count = this.playerCardsService.redCount();
        break;
      case 'blue':
        count = this.playerCardsService.blueCount();
        break;
      case 'yellow':
        count = this.playerCardsService.yellowCount();
        break;
      case 'black':
        count = this.playerCardsService.blackCount();
        break;
    }
    return count;
  }
}
