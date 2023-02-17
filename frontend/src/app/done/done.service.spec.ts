import { TestBed } from '@angular/core/testing';

import { DoneService } from './done.service';

describe('DoneService', () => {
  let service: DoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
