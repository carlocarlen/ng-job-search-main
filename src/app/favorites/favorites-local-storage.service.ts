import { Injectable } from '@angular/core';
import { Job } from '../jobs/job.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesLocalStorageService {
  private static readonly KEYS = "KEYS";
  private static readonly SEPARATOR = ",";

  constructor() { }

  getFavoritesIds(): number[] {
    return this.stringToNumberArray(window.localStorage.getItem(FavoritesLocalStorageService.KEYS));
  }

  addFavorite(job: Job) {
    let currentKeys = this.stringToNumberArray(window.localStorage.getItem(FavoritesLocalStorageService.KEYS));
    if (!currentKeys.includes(job.id)) {
      currentKeys.push(job.id);
      window.localStorage.setItem(FavoritesLocalStorageService.KEYS, this.numberArrayToString(currentKeys));
    }
  }

  removeFavorite(job: Job) {
    let currentKeys = this.stringToNumberArray(window.localStorage.getItem(FavoritesLocalStorageService.KEYS));
    if (currentKeys.includes(job.id)) {
      let newKeys = currentKeys.filter(key => key !== job.id)
      window.localStorage.setItem(FavoritesLocalStorageService.KEYS, this.numberArrayToString(newKeys))
    }
  }

  private stringToNumberArray(input: string | null): number[] {
    return input == null || input.length == 0 ? [] : 
      input.split(FavoritesLocalStorageService.SEPARATOR).map(stringId => parseInt(stringId));
  }

  private numberArrayToString(input: number[]): string {
    return input.join(FavoritesLocalStorageService.SEPARATOR);
  }
}
