import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../model/movie.model';
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  movie: Movie;

  ngOnInit() {
    let movieId: number;
    this.route.params.subscribe(
      params => {
        movieId = params['id'];
        this.getMovie(movieId);
      }
    );
  }

  getMovie(id: number){
    this.movieService.getMovie(id)
      .subscribe(
        result => {
          this.movie = result;
          console.log(result);
        },
        error => {
        }
      ); 
  };
}
