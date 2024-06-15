import { Injectable } from '@angular/core';
import { Job } from '../jobs/job.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesLocalStorageService {
  private static readonly KEYS = "KEYS";
  private static readonly SEPARATOR = ",";

  constructor() { }

  getAllFavorites(): Job[] {
    let favoriteKeys = this.stringToArray(window.localStorage.getItem(FavoritesLocalStorageService.KEYS));
    return favoriteKeys
            .map(key => window.localStorage.getItem(key))
            .filter(mayBeNull => mayBeNull !== null)
            .map(neverNull => neverNull!)
            .map(stringJob => JSON.parse(stringJob))
  }

  addFavorite(job: Job) {
    window.localStorage.setItem(job.reference, JSON.stringify(job));

    let currentKeys = this.stringToArray(window.localStorage.getItem(FavoritesLocalStorageService.KEYS));
    if (!currentKeys.includes(job.reference)) {
      currentKeys.push(job.reference);
      window.localStorage.setItem(FavoritesLocalStorageService.KEYS, this.arrayToString(currentKeys));
    }
  }

  removeFavorite(job: Job) {
    window.localStorage.removeItem(job.reference);

    let currentKeys = this.stringToArray(window.localStorage.getItem(FavoritesLocalStorageService.KEYS));
    if (currentKeys.includes(job.reference)) {
      let newKeys = currentKeys.filter(key => key !== job.reference)
      window.localStorage.setItem(FavoritesLocalStorageService.KEYS, this.arrayToString(newKeys))
    }
  }

  private stringToArray(input: string | null): string[] {
    return input == null || input.length == 0 ? [] : input.split(FavoritesLocalStorageService.SEPARATOR);
  }

  private arrayToString(input: string[]): string {
    return input.join(FavoritesLocalStorageService.SEPARATOR);
  }
}
