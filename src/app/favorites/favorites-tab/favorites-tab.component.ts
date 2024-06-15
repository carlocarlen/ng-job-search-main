import { Component, Signal } from '@angular/core';
import { Job } from '../../jobs/job.model';
import { JobListComponent } from "../../jobs/job-list/job-list.component";
import { FavoritesService } from '../favorites.service';

@Component({
    selector: 'app-favorites-tab',
    standalone: true,
    templateUrl: './favorites-tab.component.html',
    styleUrl: './favorites-tab.component.css',
    imports: [JobListComponent]
})
export class FavoritesTabComponent {

  favorites: Signal<Job[]>;

  constructor(
    favoritesService: FavoritesService,
  ) {
    this.favorites = favoritesService.favorites
  }

}
