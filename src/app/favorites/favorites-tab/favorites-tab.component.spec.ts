import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { JobsService } from '../../jobs/jobs.service';
import { FavoritesService } from '../favorites.service';
import { FavoritesTabComponent } from './favorites-tab.component';

describe('FavoritesTabComponent', () => {
  let component: FavoritesTabComponent;
  let fixture: ComponentFixture<FavoritesTabComponent>;
  let favoritesServiceSpy = jasmine.createSpyObj('favoritesService', ['updatedFavorite']);
  favoritesServiceSpy.updatedFavorite.and.returnValue(of());
  let jobsServiceSpy = jasmine.createSpyObj('jobsService', ['getJobs']);
  jobsServiceSpy.getJobs.and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesTabComponent],
      providers: [
        { provide: FavoritesService, useValue: favoritesServiceSpy},
        { provide: JobsService, useValue: jobsServiceSpy},
      ]
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
