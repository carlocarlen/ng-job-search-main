import { TestBed } from '@angular/core/testing';

import { JobsQueryService } from './jobs-query.service';

describe('JobsQueryService', () => {
  let service: JobsQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
