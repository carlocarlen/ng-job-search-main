import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { JobsRestService } from './jobs-rest.service';

describe('JobsRestService', () => {
  let service: JobsRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(JobsRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
