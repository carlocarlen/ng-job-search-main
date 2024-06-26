import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { FavoritesService } from '../favorites/favorites.service';
import { JobDto } from './job.dto';
import { JobsRestService } from './jobs-rest.service';
import { JobsService } from './jobs.service';

const favoriteJobDto: JobDto = {
  id: 1,
  title: 'Job One',
  companyName: 'Company One',
  companyLogo: 'OneLogo',
  reference: 'job-one',
}

const nonFavoriteJobDto: JobDto = {
  id: 2,
  title: 'Job Two',
  companyName: 'Company two',
  companyLogo: 'TwoLogo',
  reference: 'job-two',
}

describe('JobsService', () => {
  let service: JobsService;

  let jobsRestServiceSpy = jasmine.createSpyObj('JobsRestService', ['getAllJobs']);
  jobsRestServiceSpy.getAllJobs.and.returnValue(of([favoriteJobDto, nonFavoriteJobDto]));

  let favoritesServiceSpy = jasmine.createSpyObj('FavoritesService', ['isFavorite']);
  favoritesServiceSpy.isFavorite.withArgs(favoriteJobDto).and.returnValue(true);
  favoritesServiceSpy.isFavorite.and.returnValue(false);

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
      service.getJobs().subscribe(jobs => {
        expect(jobs.length).toBe(2);
        expect(jobs[0].isFavorite).toBeTrue();
        expect(jobs[1].isFavorite).toBeFalse();
        done();
      })
    })
  })
  
});
