import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../shared/services/movie.service';
import {Movie} from '../shared/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit, OnDestroy {

  similarMovies;
  id: number;
  private sub: any;
  movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.movieService.getMovieById(this.id).subscribe((data: Movie) => {
        this.movieService.getMovieByCategory({category: data.genres, id: this.id})
          .subscribe(movies => {
            this.similarMovies = movies;
            this.movie = data;
          });
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
