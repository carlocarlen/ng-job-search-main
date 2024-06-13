import { Component } from '@angular/core';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {

  jobs: Job[] = [];

  constructor() {
    // TODO fetch from db instead
    this.jobs = [
      {companyLogo: "logo", companyName: "FIRST", reference: "referenceFirst", title: "titleFirst"},
      {companyLogo: "logo", companyName: "SECOND", reference: "referenceSecond", title: "titleSecond"},
    ]
  }

}
