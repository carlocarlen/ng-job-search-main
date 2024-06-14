import { Component, OnInit } from '@angular/core';
import { JobListComponent } from "../job-list/job-list.component";
import { JobsQueryService } from '../jobs-query.service';
import { Observable } from 'rxjs';
import { Job } from '../job.model';
import { CommonModule } from '@angular/common';

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
    private jobsQueryService: JobsQueryService,
  ) {}

  ngOnInit(): void {
    this.allJobs$ = this.jobsQueryService.getAllJobs();
  }
}
