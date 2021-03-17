import { TestBed } from '@angular/core/testing';

import { CreateStockDeactivateGuard } from './create-stock-deactivate.guard';

describe('CreateStockDeactivateGuard', () => {
  let guard: CreateStockDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateStockDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
