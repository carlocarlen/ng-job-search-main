import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JobListItemComponent } from "../job-list-item/job-list-item.component";
import { Job } from '../job.model';

@Component({
    selector: 'app-job-list',
    standalone: true,
    templateUrl: './job-list.component.html',
    styleUrl: './job-list.component.css',
    imports: [CommonModule, JobListItemComponent]
})
export class JobListComponent {

  @Input() jobs!: Job[];
  @Input() canHandleFavorites!: boolean;

}
