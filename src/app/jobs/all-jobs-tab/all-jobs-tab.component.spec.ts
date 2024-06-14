import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobsTabComponent } from './all-jobs-tab.component';

describe('AllJobsTabComponent', () => {
  let component: AllJobsTabComponent;
  let fixture: ComponentFixture<AllJobsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllJobsTabComponent]
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
