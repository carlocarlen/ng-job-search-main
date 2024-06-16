import { Component, Input } from '@angular/core';
import { FavoritesService } from '../../favorites/favorites.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-list-item',
  standalone: true,
  imports: [],
  templateUrl: './job-list-item.component.html',
  styleUrl: './job-list-item.component.css'
})
export class JobListItemComponent {

  @Input() job!: Job;

  isFavorite = false;

  constructor(
    private favoritesService: FavoritesService
  ) {
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(this.job);
      this.isFavorite = false;
    } else {
      this.favoritesService.addFavorite(this.job);
      this.isFavorite = true;
    }
  }

}
