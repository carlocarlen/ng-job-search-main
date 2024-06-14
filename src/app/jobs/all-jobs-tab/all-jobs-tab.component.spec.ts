import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobsTabComponent } from './all-jobs-tab.component';
import { JobsQueryService } from '../jobs-query.service';

describe('AllJobsTabComponent', () => {
  let component: AllJobsTabComponent;
  let fixture: ComponentFixture<AllJobsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllJobsTabComponent],
      providers: [
        {provide: JobsQueryService, useValue: jasmine.createSpyObj('jobsQueryService', ['getAllJobs']) }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllJobsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
