import { TestBed } from '@angular/core/testing';

import { JobsQueryService } from './jobs-query.service';
import { provideHttpClient } from '@angular/common/http';

describe('JobsQueryService', () => {
  let service: JobsQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(JobsQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
