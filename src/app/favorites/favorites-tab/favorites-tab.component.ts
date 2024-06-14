import { Component } from '@angular/core';
import { Job } from '../../jobs/job.model';
import { JobListComponent } from "../../jobs/job-list/job-list.component";

@Component({
    selector: 'app-favorites-tab',
    standalone: true,
    templateUrl: './favorites-tab.component.html',
    styleUrl: './favorites-tab.component.css',
    imports: [JobListComponent]
})
export class FavoritesTabComponent {

  // TODO: subscribe to the correct thing
  favorites: Job[] = [];

}
