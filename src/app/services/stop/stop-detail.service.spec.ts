import { TestBed } from '@angular/core/testing';

import { StopDetailService } from './stop-detail.service';

describe('StopDetailService', () => {
  let service: StopDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StopDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
