import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobListComponent } from "../job-list/job-list.component";
import { Job } from '../job.model';
import { JobsService } from '../jobs.service';

@Component({
    selector: 'app-all-jobs-tab',
    standalone: true,
    templateUrl: './all-jobs-tab.component.html',
    styleUrl: './all-jobs-tab.component.css',
    imports: [JobListComponent, CommonModule]
})
export class AllJobsTabComponent implements OnInit {

  allJobs$!: Observable<Job[]>;

  constructor(
    private jobsService: JobsService,
  ) {}

  ngOnInit(): void {
    this.allJobs$ = this.jobsService.getJobs();
  }
}
