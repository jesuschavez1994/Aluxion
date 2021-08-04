import { TestBed } from '@angular/core/testing';

import { CascaronService } from './cascaron.service';

describe('CascaronService', () => {
  let service: CascaronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CascaronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
