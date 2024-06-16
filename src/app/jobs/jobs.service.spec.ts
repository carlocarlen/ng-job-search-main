import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { FavoritesService } from '../favorites/favorites.service';
import { JobDto } from './job.dto';
import { JobsRestService } from './jobs-rest.service';
import { JobsService } from './jobs.service';

const jobDtoOne: JobDto = {
  id: 1,
  title: 'Job One',
  companyName: 'Company One',
  companyLogo: 'OneLogo',
  reference: 'job-one',
}

const jobDtoTwo: JobDto = {
  id: 2,
  title: 'Job Two',
  companyName: 'Company two',
  companyLogo: 'TwoLogo',
  reference: 'job-two',
}

describe('JobsService', () => {
  let service: JobsService;
  let jobsRestServiceSpy = jasmine.createSpyObj('JobsRestService', ['getAllJobs']);
  let favoritesServiceSpy = jasmine.createSpyObj('FavoritesService', ['getFavoritesId']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JobsService,
        { provide: JobsRestService, useValue: jobsRestServiceSpy },
        { provide: FavoritesService, useValue: favoritesServiceSpy },
      ]
    });
    service = TestBed.inject(JobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getJobs', () => {
    it('should return jobs with isFavorite information', (done: DoneFn) => {
      const mockJobDtos = [jobDtoOne, jobDtoTwo];
      const mockFavoritesIds = [1];
      jobsRestServiceSpy.getAllJobs.and.returnValue(of(mockJobDtos));
      favoritesServiceSpy.getFavoritesId.and.returnValue(mockFavoritesIds);

      service.getJobs().subscribe(jobs => {
        expect(jobs.length).toBe(2);
        expect(jobs[0].isFavorite).toBeTrue();
        expect(jobs[1].isFavorite).toBeFalse();
        done();
      })
    })
  })
  
});
