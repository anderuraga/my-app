import { TestBed, async, inject } from '@angular/core/testing';

import { BackofficeGuard } from './backoffice.guard';

describe('BackofficeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackofficeGuard]
    });
  });

  it('should ...', inject([BackofficeGuard], (guard: BackofficeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
