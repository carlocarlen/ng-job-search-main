import { Routes } from '@angular/router';
import { AllJobsTabComponent } from './jobs/all-jobs-tab/all-jobs-tab.component';
import { FavoritesTabComponent } from './favorites/favorites-tab/favorites-tab.component';

export const routes: Routes = [
    { path: '', component: AllJobsTabComponent},
    { path: 'favorites', component: FavoritesTabComponent},
];
