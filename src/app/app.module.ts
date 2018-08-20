import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieSearchService } from './services/movie-search.service'
import {appRoutingProvider} from './app.routing';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingProvider,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ MovieSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
