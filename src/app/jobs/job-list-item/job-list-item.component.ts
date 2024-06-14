import { Component, Input } from '@angular/core';
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

}
