import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable()
export class MovieService {

  private api = environment.apiUrl + '/api/Movies';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getMovies() {
    let url: string = this.api;
    //console.log(url);
    return this.http.get<Movie[]>(url)
     .pipe(catchError(this.handleError))
  }

  getMovie(id: number){
    console.log(id);
    let url: string = this.api + "/" + id;
    return this.http.get<Movie>(url)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: any) {
    let errMsg = error;
    console.log("error", errMsg);
    return Observable.throw(errMsg);
  }
}

