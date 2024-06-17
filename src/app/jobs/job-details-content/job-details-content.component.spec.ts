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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
