import { Routes } from '@angular/router';
import { FavoritesTabComponent } from './favorites/favorites-tab/favorites-tab.component';
import { AllJobsTabComponent } from './jobs/all-jobs-tab/all-jobs-tab.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';

export const routes: Routes = [
    { path: 'jobs', component: AllJobsTabComponent },
    { path: 'favorites', component: FavoritesTabComponent },
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: 'jobs/:jobId', component: JobDetailsComponent },
    { path: 'favorites/:jobId', component: JobDetailsComponent },
];
