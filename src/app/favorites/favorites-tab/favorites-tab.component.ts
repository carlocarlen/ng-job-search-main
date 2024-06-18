import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobListComponent } from "../../jobs/job-list/job-list.component";
import { Job } from '../../jobs/job.model';
import { JobsService } from '../../jobs/jobs.service';
import { FavoritesService } from '../favorites.service';

@Component({
    selector: 'app-favorites-tab',
    standalone: true,
    templateUrl: './favorites-tab.component.html',
    styleUrl: './favorites-tab.component.css',
    imports: [JobListComponent, CommonModule]
})
export class FavoritesTabComponent implements OnInit, OnDestroy {

  favoritesSignal = signal<Job[]>([]);

  private subscriptions: Subscription[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private jobsService: JobsService,
  ) { }


  ngOnInit(): void {
    this.subscriptions.push(
      this.jobsService.getJobs().subscribe(jobs => this.favoritesSignal.set(jobs.filter(job => job.isFavorite)))
    );
    this.subscriptions.push(
      this.favoritesService.updatedFavorite().subscribe(job => {
        if (job.isFavorite) {
          this.favoritesSignal.update(currentFavorites => [...currentFavorites, job]);
        } else {
          this.favoritesSignal.update(currentFavorites => currentFavorites.filter(fav => fav.id !== job.id));
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
