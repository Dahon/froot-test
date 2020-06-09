import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Movie} from '../models/movie.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'api/movies';
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(map(movies => {
        return movies;
      }));
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe( map(movie => movie));
  }

  getMovieByCategory({category, id}): Observable<Movie> {
    return this.http.get(this.moviesUrl)
      .pipe(map((movies: any) => {
          return movies.filter(item => item.id !== id && category.some(i => item.genres.includes(i)));
        })
      );
  }


}
