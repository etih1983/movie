import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../../model/review.model';
import {  ReviewsService } from '../../Services/reviews.service';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {

  constructor(private reviewsService: ReviewsService, private route: ActivatedRoute) { }

  reviews : Review[] = [];

  ngOnInit() {
    let movieId: number;
    this.route.params.subscribe(
      params => {
        movieId = params['id'];
        this.getReviewsByMovieId(movieId);
      }
    );
  }

   getReviewsByMovieId(id: number){
    this.reviewsService.getReviewsByMovieId(id)
      .subscribe(
        result => {
          this.reviews = result;
          console.log(result);
        },
        error => {
        }
      ); 
  };

}
