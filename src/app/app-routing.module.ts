import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowsComponent } from './components/shows/shows.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'show/:id', component: ShowDetailsComponent },
  { path: 'watchlist', component: WatchlistComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
