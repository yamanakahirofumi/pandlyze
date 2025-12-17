import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTile } from './city-tile';

describe('CityTile', () => {
  let component: CityTile;
  let fixture: ComponentFixture<CityTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
