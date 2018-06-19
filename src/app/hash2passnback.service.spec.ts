import { TestBed, inject } from '@angular/core/testing';

import { Hash2passnbackService } from './hash2passnback.service';

describe('Hash2passnbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hash2passnbackService]
    });
  });

  it('should be created', inject([Hash2passnbackService], (service: Hash2passnbackService) => {
    expect(service).toBeTruthy();
  }));
});
