import { Injectable, Signal, signal } from '@angular/core';
import { Job } from '../jobs/job.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  /**
   * Using signals instead of Observables, as recommended.
   * @returns a Signal to get the list of favorites jobs. The signal emits each time the list changes.
   */
  getFavorites(): Signal<Job[]> {
    return signal([]);
  }

  /**
   * Add a job to the favorites
   * @param job a favorite job
   */
  addFavorite(job: Job) {

  }

  /**
   * Remove a job from the favorites
   * @param job a job not favorite anymore
   */
  removeFavorite(job: Job) {

  }
}
