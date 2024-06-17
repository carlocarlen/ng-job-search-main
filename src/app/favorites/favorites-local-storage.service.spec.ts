import { TestBed } from '@angular/core/testing';

import { Job } from '../jobs/job.model';
import { FavoritesLocalStorageService } from './favorites-local-storage.service';

const jobOne: Job = {
  id: 1,
  title: 'Job One',
  companyName: 'Company One',
  companyLogo: 'OneLogo',
  reference: 'job-one',
  isFavorite: true,
}

const jobTwo: Job = {
  id: 2,
  title: 'Job Two',
  companyName: 'Company two',
  companyLogo: 'TwoLogo',
  reference: 'job-two',
  isFavorite: false,
}

/**
 * While window.localStorage IS accessible to the test environment, 
 * it is better to mock it so that we can control its state,
 * in particular we start always with an empty storage.
 */
let localStorageMock: {[key: string]: string};
const mockingLocalStorage = {
  getItem(key: string): string | null {
    return key in localStorageMock ? localStorageMock[key] : null;
  },

  setItem(key: string, value: string) {
    localStorageMock[key] = value;
  },

  removeItem(key: string){
    delete localStorageMock[key];
  },

  clear() {
    localStorageMock = {};
  }
}

describe('FavoritesLocalStorageService', () => {
  let service: FavoritesLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesLocalStorageService);

    localStorageMock = {};
    spyOn(window.localStorage, 'getItem').and.callFake(mockingLocalStorage.getItem);
    spyOn(window.localStorage, 'setItem').and.callFake(mockingLocalStorage.setItem);
    spyOn(window.localStorage, 'removeItem').and.callFake(mockingLocalStorage.removeItem);
    spyOn(window.localStorage, 'clear').and.callFake(mockingLocalStorage.clear);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add favorites', () => {
    service.addFavorite(jobOne);
    expect(service.getFavoritesIds().length).toBe(1);
    expect(service.getFavoritesIds()).toContain(1);
  })

  it('should remove favorites', () => {
    service.addFavorite(jobOne);
    service.addFavorite(jobTwo);
    service.removeFavorite(jobOne);
    expect(service.getFavoritesIds().length).toBe(1);
    expect(service.getFavoritesIds()).toContain(2);   
  })

  it('should not return accidentally other local storage entries', () => {
    window.localStorage.setItem("aKey", "not a job");
    service.addFavorite(jobOne);

    expect(service.getFavoritesIds().length).toBe(1);
    expect(service.getFavoritesIds()).toContain(1);
  })

  it('should return the array of favorites ids as number array', () => {
    service.addFavorite(jobOne);
    service.addFavorite(jobTwo);
    expect(service.getFavoritesIds()).toEqual([1,2]);
  })

  it('should return an empty array if no ids are stored', () => {
    expect(service.getFavoritesIds()).not.toBeNull();
    expect(service.getFavoritesIds()).toEqual([]);
  })
});

