import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsService } from '../jobs.service';
import { JobDetailsComponent } from './job-details.component';

describe('JobDetailsComponent', () => {
  let component: JobDetailsComponent;
  let fixture: ComponentFixture<JobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailsComponent],
      providers: [
        { provide: JobsService, useValue: jasmine.createSpyObj('jobsService', ['getJobDetails'])}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
