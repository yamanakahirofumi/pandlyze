import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Percentcomponent } from './percent';

describe('Percentcomponent', () => {
  let component: Percentcomponent;
  let fixture: ComponentFixture<Percentcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Percentcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Percentcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
