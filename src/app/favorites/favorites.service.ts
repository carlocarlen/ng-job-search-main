import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { Job } from '../jobs/job.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { JobsQueryService } from '../jobs/jobs-query.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  static readonly FAVORITES = "FAVORITES";
  static readonly SEPARATOR = ",";
  
  favorites: Signal<Job[]>;

  private favoriteKeys: WritableSignal<Set<string>> = signal(new Set());

  constructor(
    private localStorageService: LocalStorageService,
    jobsService: JobsQueryService,
  ) {
    const allJobs: Signal<Job[]> = toSignal(jobsService.getAllJobs(), {initialValue: []});
    this.favorites = computed(() => {
      // Not sure if this is necessary, to subscribe instead of directly in the filter
      let currentKeys = this.favoriteKeys();
      return allJobs().filter(job => currentKeys.has(job.reference));
    })
   }

  /**
   * Add a job to the favorites
   * @param job a favorite job
   */
  addFavorite(job: Job) {
    const jobKey = this.jobToKey(job);
    let newKeys: Set<string> = this.getStoredKeys().add(jobKey);
    this.localStorageService.setItem(FavoritesService.FAVORITES, this.setToString(newKeys));
    this.favoriteKeys.set(newKeys);
  }

  /**
   * Remove a job from the favorites
   * @param job a job not favorite anymore
   */
  removeFavorite(job: Job) {

  }

  private getStoredKeys(): Set<string> {
    const storedString = this.localStorageService.getItem(FavoritesService.FAVORITES) ?? "";
    return this.stringToSet(storedString);
  }

  private jobToKey(job: Job): string {
    return job.reference;
  }

  private stringToSet(input: string): Set<string> {
    return input.length == 0 ? new Set<string>() : new Set<string>(input.split(FavoritesService.SEPARATOR));
  }

  private setToString(input: Set<string>): string {
    return Array.from(input).join(FavoritesService.SEPARATOR);
  }
}
