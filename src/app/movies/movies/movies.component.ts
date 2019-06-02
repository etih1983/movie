import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { Movie } from '../../model/movie.model';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [
    trigger('movies-affect', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset:0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset:0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset:1}),
        ]))]),{optional: true}),

        
       /* query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset:0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset:0.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset:1}),
        ]))]),{optional: true})*/
      ])
    ])
  ]
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie[] = [];

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies()
    .subscribe(
    result => {
      this.movies = result;
      //console.log(this.movies);
    },
    error => {
    }
    );
  }
}
