import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-percent',
  imports: [],
  templateUrl: './percent.html',
  styleUrl: './percent.css'
})
export class Percent {
  @Input() color: string = "";
  @Input() value: number = 0;
  @Input() max: number = 12;

  percent(): string {
    return Math.floor(this.value / this.max * 100) + "%";
  }
}
