import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDetail } from '../job.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
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
