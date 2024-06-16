import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of();
  }
}
