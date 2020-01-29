import { TestBed } from '@angular/core/testing';

import { CapsuleerService } from './capsuleer.service';

describe('CapsuleerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapsuleerService = TestBed.get(CapsuleerService);
    expect(service).toBeTruthy();
  });
});
