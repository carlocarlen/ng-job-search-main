import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { JobDto } from '../jobs/job.dto';
import { Job } from '../jobs/job.model';
import { JobsRestService } from '../jobs/jobs-rest.service';
import { FavoritesService } from './favorites.service';

const testJobDto: JobDto = {
  id: 12,
  title: 'Tester',
  companyName: 'Testing Company',
  companyLogo: 'LogoTest',
  reference: 'test-job',
}

describe('FavoritesService', () => {
  let service: FavoritesService;
  let jobsRestServiceSpy = jasmine.createSpyObj('jobsRestService', ['getAllJobs']);
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: JobsRestService, useValue: jobsRestServiceSpy }
      ]
    });
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addFavorite', () => {
    it('should mark job as favorite', () => {
      const job: Job = {
        ...testJobDto,
        isFavorite: false,
      }

      service.addFavorite(job);

      expect(job.isFavorite).toBeTrue();
    })
  })

  describe('removeFavorite', () => {
    it('should mark job as not favorite', () => {
      const job: Job = {
        ...testJobDto,
        isFavorite: true,
      }  
      
      service.removeFavorite(job);

      expect(job.isFavorite).toBeFalse();
    })
  })

  describe('isFavorite', () => {
    it('should return true after addFavorite', () => {
      const job: Job = {
        ...testJobDto,
        isFavorite: false,
      }

      service.addFavorite(job);

      expect(service.isFavorite(job)).toBeTrue();
    })

    it('should return false after removeFavorite', () => {
      const job: Job = {
        ...testJobDto,
        isFavorite: true,
      }

      service.removeFavorite(job);

      expect(service.isFavorite(job)).toBeFalse();
    })
  })

  describe('getFavorites', () => {
    // Initial state: one favorite and one non favorite job
    const favoriteJob: Job = { ...testJobDto, id: 21, isFavorite: true }
    const nonFavoriteJob: Job = { ...testJobDto, id: 22, isFavorite: false }

    jobsRestServiceSpy.getAllJobs.and.returnValue(of([
      {...testJobDto, id: 21}, {...testJobDto, id: 22}
    ]));

    it('should return only favorite jobs', (done: DoneFn) => {
      service.addFavorite(favoriteJob);
      service.removeFavorite(nonFavoriteJob);
  
      service.getFavorites().subscribe(jobs => {
        expect(jobs.length).toBe(1);
        expect(jobs[0].isFavorite).toBeTrue();
        done();
      })
    })

    it('should emit when a new favorite is added', (done: DoneFn) => {
      service.addFavorite(favoriteJob);
      service.removeFavorite(nonFavoriteJob);

      let publishingCounter = 0; // counting each time the getFavorites() Observable publishes an event
      service.getFavorites().subscribe(jobs => {
        publishingCounter++;
        if (publishingCounter === 1) {
          expect(jobs.length).toBe(1);
        } else if (publishingCounter === 2) {
          expect(jobs.length === 2);
          done();
        } 
      })

      service.addFavorite(nonFavoriteJob);
    })

    it('should emit when a favorite is removed', (done: DoneFn) => {
      service.addFavorite(favoriteJob);
      service.addFavorite(nonFavoriteJob);

      let publishingCounter = 0;
      service.getFavorites().subscribe(jobs => {
        publishingCounter++;
        if (publishingCounter === 1) {
          expect(jobs.length).toBe(2);
        } else if (publishingCounter === 2) {
          expect(jobs.length).toBe(1);
          done();
        }
      })

      service.removeFavorite(favoriteJob);
    })
  })

});