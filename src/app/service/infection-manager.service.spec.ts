import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { InfectionManagerService } from './infection-manager.service';

describe('InfectionManagerService', () => {
  let service: InfectionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(InfectionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
