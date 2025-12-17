import { TestBed } from '@angular/core/testing';

import { InfectionManagerService } from './infection-manager.service';

describe('InfectionManagerService', () => {
  let service: InfectionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfectionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
