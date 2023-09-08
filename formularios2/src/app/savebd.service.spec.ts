import { TestBed } from '@angular/core/testing';

import { SavebdService } from './savebd.service';

describe('SavebdService', () => {
  let service: SavebdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavebdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
