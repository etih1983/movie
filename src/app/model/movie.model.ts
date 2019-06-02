import { Genre} from '../model/genre';
export class Movie {
    id: number;
    name: string;
    description: string;
    length: number;
    publishDate: Date;
    photo: string;
    genre: Genre;
}
