import { Component, Input } from '@angular/core';
import { JobDetail } from '../job.model';

@Component({
  selector: 'app-job-details-content',
  standalone: true,
  imports: [],
  templateUrl: './job-details-content.component.html',
  styleUrl: './job-details-content.component.css'
})
export class JobDetailsContentComponent {

  @Input() jobDetails!: JobDetail;

}
