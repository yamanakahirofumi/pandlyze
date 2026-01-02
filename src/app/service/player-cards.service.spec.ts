import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { PlayerCardsService } from './player-cards.service';

describe('PlayerCardsService', () => {
  let service: PlayerCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(PlayerCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
