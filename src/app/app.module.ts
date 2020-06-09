import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import {movieMockData} from './shared/services/movie.mock-data';
import { FilterPipe } from './shared/pipes/filter.pipe';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(movieMockData, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
