import { TestBed } from '@angular/core/testing';

import { Job } from '../jobs/job.model';
import { FavoritesService } from './favorites.service';

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
      const jobOne: Job = {
        id: 1,
        title: 'Job One',
        companyName: 'Company One',
        companyLogo: 'OneLogo',
        reference: 'job-one',
        isFavorite: false,
      }

      service.addFavorite(jobOne);

      expect(jobOne.isFavorite).toBeTrue();
    })
  })

  describe('removeFavorite', () => {
    it('should mark job as not favorite', () => {
      const jobOne: Job = {
        id: 1,
        title: 'Job One',
        companyName: 'Company One',
        companyLogo: 'OneLogo',
        reference: 'job-one',
        isFavorite: true,
      }  
      
      service.removeFavorite(jobOne);

      expect(jobOne.isFavorite).toBeFalse();
    })
  })

});