import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobListComponent } from "../../jobs/job-list/job-list.component";
import { Job } from '../../jobs/job.model';
import { JobsService } from '../../jobs/jobs.service';

@Component({
    selector: 'app-favorites-tab',
    standalone: true,
    templateUrl: './favorites-tab.component.html',
    styleUrl: './favorites-tab.component.css',
    imports: [JobListComponent, CommonModule]
})
export class FavoritesTabComponent implements OnInit {

  favorites$!: Observable<Job[]>;

  constructor(
    private jobsService: JobsService,
  ) { }

  ngOnInit(): void {
    this.favorites$ = this.jobsService.getFavoriteJobs();
  }

}
