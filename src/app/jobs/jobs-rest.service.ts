import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDto } from './job.dto';

@Injectable({
  providedIn: 'root',
})
export class JobsRestService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllJobs(): Observable<JobDto[]> {
    return this.http.get<JobDto[]>('/jobs')
      //.pipe(delay(2000))  // Simulate slow connection
  }

}
