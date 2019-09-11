import { TestBed } from '@angular/core/testing';

import { SupplieService } from './supplie.service';

describe('SupplieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplieService = TestBed.get(SupplieService);
    expect(service).toBeTruthy();
  });
});
