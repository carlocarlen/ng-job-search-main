import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { LocalStorageService } from '../shared/local-storage.service';
import { Job } from '../jobs/job.model';
import { computed, effect } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JobsQueryService } from '../jobs/jobs-query.service';

const jobOne: Job = {
  title: 'Job One',
  companyName: 'Company One',
  companyLogo: 'OneLogo',
  reference: 'job-one'
}
const jobTwo: Job = {
  title: 'Job Two',
  companyName: 'Company two',
  companyLogo: 'TwoLogo',
  reference: 'job-two'
}

describe('FavoritesService', () => {
  let service: FavoritesService;
 
  beforeEach(() => {
    const jobsServiceMock = jasmine.createSpyObj('jobsService', ['getAllJobs']);
    jobsServiceMock.getAllJobs.and.returnValue(of([jobOne, jobTwo]));

    const localStorageServiceMock = new LocalStorageServiceMock();

    TestBed.configureTestingModule({
      providers: [
        FavoritesService, 
        {provide: LocalStorageService, useValue: localStorageServiceMock},
        {provide: JobsQueryService, useValue: jobsServiceMock},
      ]
    });

    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addFavorite', () => {
    it('should update favorites', () => {
      expect(service.favorites().length).toBe(0);

      service.addFavorite(jobOne);
      expect(service.favorites().length).toBe(1);
      expect(service.favorites()).toContain(jobOne);

      service.addFavorite(jobTwo);
      expect(service.favorites().length).toBe(2);
      expect(service.favorites()).toContain(jobOne);
      expect(service.favorites()).toContain(jobTwo);
    })
  
    it('should not add values twice', () => {
      service.addFavorite(jobOne);
      service.addFavorite(jobOne);
      expect(service.favorites().length).toBe(1);
    })  

    // Probably just check that a persist storage is called, like we would do with http request
    it('should persist new favorite')
  });

/*   it('addFavorite should make favorites to emit a new signal', (done) => {
    let firstCall = true;
    effect(() => {
      if (firstCall && service.favorites().length == 1) {
        firstCall = false;
      } else if (service.favorites().length == 2) {
        done();
      } else {
        done.fail();
      }
    });

    service.addFavorite(jobOne);
    service.addFavorite(jobTwo);

  }) */

  describe('removeFavorite', () => {
    it('should update favorites', () => {
      expect(service.favorites().length).toBe(0);

      service.addFavorite(jobOne);
      service.addFavorite(jobTwo);
      expect(service.favorites().length).toBe(2);

      service.removeFavorite(jobOne);
      expect(service.favorites().length).toBe(1);
      expect(service.favorites()).toContain(jobTwo);
    });

    it('should not fail if job to remove was not favorite', () => {
      service.addFavorite(jobOne);
      service.removeFavorite(jobTwo);
      expect(service.favorites().length).toBe(1);
      expect(service.favorites()).toContain(jobOne);
    })
  });
});

class LocalStorageServiceMock {

  private localStorageMock = new Map();

  // Set a value in local storage
  setItem(key: string, value: string): void {
    this.localStorageMock.set(key, value);
  }

  // Get a value from local storage
  getItem(key: string): string | null {
    return this.localStorageMock.get(key);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    this.localStorageMock.delete(key);
  }

  // Clear all items from local storage
  clear(): void {
    this.localStorageMock.clear();
  }
  
}