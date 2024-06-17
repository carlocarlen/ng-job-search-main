import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsContentComponent } from './job-details-content.component';

describe('JobDetailsContentComponent', () => {
  let component: JobDetailsContentComponent;
  let fixture: ComponentFixture<JobDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDetailsContentComponent);
    component = fixture.componentInstance;
    component.jobDetails = {companyLogo: "", companyName: "", description: "", id: 1, industries: [], location: "", publishDate: "", reference: "", title: "", types: []};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
