import { TestBed } from '@angular/core/testing';

import { FavoritesLocalStorageService } from './favorites-local-storage.service';
import { Job } from '../jobs/job.model';

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
    expect(service.getAllFavorites().length).toBe(1);
    expect(service.getAllFavorites()).toContain(jobOne);
  })

  it('should remove favorites', () => {
    service.addFavorite(jobOne);
    service.addFavorite(jobTwo);
    service.removeFavorite(jobOne);
    expect(service.getAllFavorites().length).toBe(1);
    expect(service.getAllFavorites()).toContain(jobTwo);   
  })

  it('should not return accidentally other local storage entries', () => {
    window.localStorage.setItem("aKey", "not a job");
    service.addFavorite(jobOne);

    expect(service.getAllFavorites().length).toBe(1);
    expect(service.getAllFavorites()).toContain(jobOne);
  })
});

