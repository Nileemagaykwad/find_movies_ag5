import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  apiKey: string;

  constructor(private _jsonp: Jsonp) {
    this.apiKey = 'a40affbd4f3a7e7768e83e7262601491';
    console.log('MovieService Initialized...')
  }

  getPopular() {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=a40affbd4f3a7e7768e83e7262601491')
      .map(res => res.json());
  }

  searchMovies(searchStr: string) {
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
      .map(res => res.json());
  }

  getMovie(id: string) {
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
      .map(res => res.json());
  }
}
