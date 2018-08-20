import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../../services/movie-search.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  popularList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;
  abc: any

  constructor(private _movieSearchService: MovieSearchService) {
    this._movieSearchService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
  }

  searchMovies() {

    this._movieSearchService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
      if (this.searchRes.length == 0) {
      }
    })
  }


  ngOnInit() {
  }

}
