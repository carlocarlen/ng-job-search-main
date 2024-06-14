import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsQueryService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs')
      //.pipe(delay(2000))  // Simulate slow connection
  }

}
