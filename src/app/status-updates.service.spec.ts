import { TestBed } from '@angular/core/testing';

import { StatusUpdatesService } from './status-updates.service';

describe('StatusUpdatesService', () => {
  let service: StatusUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
