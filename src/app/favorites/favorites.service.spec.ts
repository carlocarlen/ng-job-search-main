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
    it('should not erase previous values', () => {
      service.addFavorite(jobOne);
      expect(service.favorites().length).toBe(1);
  
      service.addFavorite(jobTwo);
      expect(service.favorites().length).toBe(2);
  
    })
  
    it('should not add values twice', () => {
      service.addFavorite(jobOne);
      service.addFavorite(jobOne);
      expect(service.favorites().length).toBe(1);
    })   
  })



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

  it('removeFavorite should remove only that favorite')

  it('removeFavorite should make getFavorites to emit a new signal')
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