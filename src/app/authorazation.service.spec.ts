import { TestBed, inject } from '@angular/core/testing';

import { AuthorazationService } from './authorazation.service';

describe('AuthorazationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorazationService]
    });
  });

  it('should be created', inject([AuthorazationService], (service: AuthorazationService) => {
    expect(service).toBeTruthy();
  }));
});
