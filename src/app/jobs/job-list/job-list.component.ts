import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { JobsQueryService } from '../jobs-query.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {

  jobs$!: Observable<Job[]>;

  constructor(
    private jobsQueryService: JobsQueryService,
  ) {}

  ngOnInit(): void {
    this.jobs$ = this.jobsQueryService.getAllJobs()
  }

}
