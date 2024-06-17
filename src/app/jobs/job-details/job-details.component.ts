import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { JobDetailsContentComponent } from "../job-details-content/job-details-content.component";
import { JobDetail } from '../job.model';
import { JobsService } from '../jobs.service';

@Component({
    selector: 'app-job-details',
    standalone: true,
    templateUrl: './job-details.component.html',
    styleUrl: './job-details.component.css',
    imports: [CommonModule, RouterLink, JobDetailsContentComponent]
})
export class JobDetailsComponent {

  jobDetails$!: Observable<JobDetail>

  constructor(
    private jobsService: JobsService,
  ) {}

  @Input()
  set jobId(jobId: number) {
    this.jobDetails$ = this.jobsService.getJobDetails(jobId);
  }
}
