import { Injectable } from '@angular/core';
import { JobDto } from '../jobs/job.dto';
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

  /**
   * A jobDto does not have the isFavorite property, this method completes that information
   * @param jobDto a jobDto 
   * @returns if the given jobDto is favorite
   */
  // Thanks to this method, we do not expose how we save favorites (by id, but could be by reference or anything else)
  isFavorite(jobDto: JobDto): boolean {
    return this.favoritesStorage.getFavoritesIds().includes(jobDto.id);
  }

}
