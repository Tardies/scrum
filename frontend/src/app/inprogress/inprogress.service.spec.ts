import { TestBed } from '@angular/core/testing';

import { InprogressService } from './inprogress.service';

describe('InprogressService', () => {
  let service: InprogressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InprogressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
