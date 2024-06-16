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
      map(jobDtos => {
        let favoritesId = this.favoritesService.getFavoritesId();
        return jobDtos.map(jobDto => ({
          ...jobDto,
          isFavorite: favoritesId.includes(jobDto.id)
        }))        
      })
    )
  }

  getFavoriteJobs(): Observable<Job[]> {
    return this.getJobs().pipe(
      map(jobs => jobs.filter(job => job.isFavorite))
    )
  }

  getJobDetails(jobId: number): Observable<JobDetail> {
    return this.jobsRestService.getJobDetails(jobId).pipe(
      map(jobDto => ({...jobDto}))
    )
  }
}
