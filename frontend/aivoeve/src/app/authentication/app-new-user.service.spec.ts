import { TestBed } from '@angular/core/testing';

import { AppNewUserService } from './app-new-user.service';

describe('AppNewUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppNewUserService = TestBed.get(AppNewUserService);
    expect(service).toBeTruthy();
  });
});
