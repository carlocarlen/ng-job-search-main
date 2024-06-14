import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListItemComponent } from './job-list-item.component';
import { provideHttpClient } from '@angular/common/http';

describe('JobListItemComponent', () => {
  let component: JobListItemComponent;
  let fixture: ComponentFixture<JobListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListItemComponent],
      providers: [provideHttpClient()],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListItemComponent);
    component = fixture.componentInstance;
    component.job = {companyLogo: "", companyName: "", reference: "", title: ""};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
