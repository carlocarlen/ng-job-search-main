import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root',
})
export class JobsRestService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs')
      //.pipe(delay(2000))  // Simulate slow connection
  }

}
