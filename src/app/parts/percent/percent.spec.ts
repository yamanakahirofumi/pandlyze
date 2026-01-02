import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { Percent } from './percent';

describe('Percent', () => {
  let component: Percent;
  let fixture: ComponentFixture<Percent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Percent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Percent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
