import { Injectable } from '@angular/core';
import { Job } from '../jobs/job.model';
import { FavoritesLocalStorageService } from './favorites-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  constructor(
    private favoritesStorage: FavoritesLocalStorageService,
  ) {}

  /**
   * 
   * @returns the array of favorite job ids
   */
  getFavoritesId(): number[] {
    return this.favoritesStorage.getFavoritesIds();
  }

  /**
   * Add a job to the favorites
   * @param job a favorite job
   */
  addFavorite(job: Job) {
    job.isFavorite = true;
    this.favoritesStorage.addFavorite(job);
  }

  /**
   * Remove a job from the favorites
   * @param job a job not favorite anymore
   */
  removeFavorite(job: Job) {
    job.isFavorite = false;
    this.favoritesStorage.removeFavorite(job);
  }

}
