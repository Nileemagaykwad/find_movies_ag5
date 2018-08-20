import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { DetailsComponent } from './components/details/details.component'

// Route Configuration
export const routes: Routes = [
  { path: '', component: MovieSearchComponent },
  { path: 'movie/:id', component: DetailsComponent }

];

export const appRoutingProvider: ModuleWithProviders = RouterModule.forRoot(routes);
