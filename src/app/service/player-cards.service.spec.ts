import { TestBed } from '@angular/core/testing';

import { PlayerCardsService } from './player-cards.service';

describe('PlayerCardsService', () => {
  let service: PlayerCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
