import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { Job } from '../jobs/job.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { JobsQueryService } from '../jobs/jobs-query.service';
import { FavoritesLocalStorageService } from './favorites-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  private favoritesSignal: WritableSignal<Job[]>;

  constructor(
    private favoritesStorage: FavoritesLocalStorageService,
  ) {
    this.favoritesSignal = signal(favoritesStorage.getAllFavorites());
   }

   /**
    * Get all favorites as a Signal
    */
   get favorites(): Signal<Job[]> {
    return this.favoritesSignal.asReadonly();
   }

  /**
   * Add a job to the favorites
   * @param job a favorite job
   */
  addFavorite(job: Job) {
    this.favoritesStorage.addFavorite(job);
    this.favoritesSignal.set(this.favoritesStorage.getAllFavorites());
  }

  /**
   * Remove a job from the favorites
   * @param job a job not favorite anymore
   */
  removeFavorite(job: Job) {
    this.favoritesStorage.removeFavorite(job);
    this.favoritesSignal.set(this.favoritesStorage.getAllFavorites());
  }

}
