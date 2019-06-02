import { Movie } from '../model/movie.model';

export class Review {
    id: number;
    comment: string;
    //user: User;
    movie: Movie;   
    created: Date;
}
