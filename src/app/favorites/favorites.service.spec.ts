import { TestBed } from '@angular/core/testing';

import { JobDto } from '../jobs/job.dto';
import { Job } from '../jobs/job.model';
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
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
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

});