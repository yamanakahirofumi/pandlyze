import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-city-tile',
  imports: [],
  templateUrl: './city-tile.html',
  styleUrl: './city-tile.css'
})
export class CityTile {
  @Input() name: string = "";
  @Input() color: string = "";
}
