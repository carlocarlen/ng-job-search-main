import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FavoritesService } from '../favorites/favorites.service';
import { Job, JobDetail } from './job.model';
import { JobsRestService } from './jobs-rest.service';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private jobsRestService: JobsRestService,
    private favoritesService: FavoritesService,
  ) { }

  getJobs(): Observable<Job[]> {
    return this.jobsRestService.getAllJobs().pipe(
      map(jobDtos => jobDtos.map(jobDto => ({
          ...jobDto,
          isFavorite: this.favoritesService.isFavorite(jobDto)
        }))        
      )
    )
  }

  getJobDetails(jobId: number): Observable<JobDetail> {
    return this.jobsRestService.getJobDetails(jobId).pipe(
      map(jobDto => ({...jobDto}))
    )
  }
}
