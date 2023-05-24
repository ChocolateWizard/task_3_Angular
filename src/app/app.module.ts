import { NgModule, isDevMode } from '@angular/core';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppStoreModule } from 'src/store/AppStoreModule';
import { ActorGridComponent } from './components/actor/actor-grid/actor-grid.component';
import { ActorCardComponent } from './components/actor/actor-card/actor-card.component';
import { ScalePipe } from './pipes/scale.pipe';
import { StyleButtonDirective } from './directives/style-button.directive';

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
    ShowDetailsComponent,
    ActorGridComponent,
    ActorCardComponent,
    ScalePipe,
    StyleButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...AppStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
