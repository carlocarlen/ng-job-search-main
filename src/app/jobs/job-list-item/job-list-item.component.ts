import { Component, Input, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../favorites/favorites.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-list-item.component.html',
  styleUrl: './job-list-item.component.css'
})
export class JobListItemComponent {

  jobAsSignal!: WritableSignal<Job>;

  @Input() job!: Job;
  @Input() canHandleFavorite!: boolean

  constructor(
    private favoritesService: FavoritesService
  ) {
  }

  toggleFavorite() {
    if (this.job.isFavorite) {
      this.favoritesService.removeFavorite(this.job);
    } else {
      this.favoritesService.addFavorite(this.job);
    }
  }

}
