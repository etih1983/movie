import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {DataService} from './data.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { HomeComponent } from './movies/home/home.component';
import { AboutComponent } from './movies/about/about.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { MovieService } from '../app/Services/movie.service';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { ReviewsService } from '../app/Services/reviews.service';
import { MovieReviewsComponent } from './movies/movie-reviews/movie-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [DataService, MovieService, ReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
