import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsService } from '../../jobs/jobs.service';
import { FavoritesTabComponent } from './favorites-tab.component';

describe('FavoritesTabComponent', () => {
  let component: FavoritesTabComponent;
  let fixture: ComponentFixture<FavoritesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesTabComponent],
      providers: [{ provide: JobsService, useValue: jasmine.createSpyObj('JobsService', ['getFavoriteJobs'])}]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
