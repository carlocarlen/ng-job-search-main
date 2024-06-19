import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { JobDetailDto, JobDto } from './job.dto';

@Injectable({
  providedIn: 'root',
})
export class JobsRestService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllJobs(): Observable<JobDto[]> {
    return this.http.get<JobDto[]>('/jobs')
      .pipe(delay(2000))  // Simulate slow connection
  }

  getJobDetails(jobId: number): Observable<JobDetailDto> {
    return this.http.get<JobDetailDto>(`/jobs/${jobId}`);
  }

}
