import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsQueryService {

  constructor(
    // private http: HttpClient,
  ) { }

  getAllJobs(): Observable<Job[]> {
    return of([
        {companyLogo: "logo", companyName: "FIRST", reference: "referenceFirst", title: "titleFirst"},
        {companyLogo: "logo", companyName: "SECOND", reference: "referenceSecond", title: "titleSecond"},
      ]);
  
    // return this.http.get<Job[]>('/jobs');
  }

}
