import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Review } from '../model/review.model';

@Injectable()
export class ReviewsService {

  private api = environment.apiUrl + '/api/Reviews';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {}

  getReviewsByMovieId(id: number){
    let url: string = this.api + "/Movie/" + id;
    //console.log(url);
    return this.http.get<Review[]>(url)
     .pipe(catchError(this.handleError))
  }

  private handleError(error: any) {
    let errMsg = error;
    console.log("error", errMsg);
    return Observable.throw(errMsg);
  }

}
