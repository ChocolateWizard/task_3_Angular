import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SiteLogoComponent } from './components/site-logo/site-logo.component';
import { MediaCardComponent } from './components/cards/media-card/media-card.component';
import { GridComponent } from './components/cards/grid/grid.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowsComponent } from './components/shows/shows.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
    PageNotFoundComponent,
    SiteLogoComponent,
    MediaCardComponent,
    GridComponent,
    MoviesComponent,
    ShowsComponent,
    WatchlistComponent,
    MovieDetailsComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
