import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Movie, genreType} from '../shared/models/movie.model';
import {MovieService} from '../shared/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  genres = Object.keys(genreType);
  categoryText = "";
  movies: Movie[];
  searchText: string = '';
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    console.log(this.genres);
    this.movieService.getAllMovies().subscribe(data => {
      this.movies = data;
    });
  }

}
