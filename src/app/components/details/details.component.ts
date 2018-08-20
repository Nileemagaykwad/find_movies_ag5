import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../../services/movie-search.service'
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie: Object;
  constructor(private router: ActivatedRoute, private _movieSearchService: MovieSearchService) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this._movieSearchService.getMovie(id).subscribe(movie => {
        this.movie = movie;

      })
    })
  }
  }


