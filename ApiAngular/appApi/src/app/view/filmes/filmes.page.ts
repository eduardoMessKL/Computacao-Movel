import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OmbdapiService, SearchType } from 'src/app/model/services/ombdapi.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  result! : Observable<any>
  searchTerms : string = ''
  type : SearchType = SearchType.all

  
  constructor(private omdbApi : OmbdapiService) { }

  ngOnInit() {
    console.log(this.search())
  }

  search(){
    this.result = this.omdbApi.getAll(this.searchTerms, this.type).pipe(map(result => result['Search']));
  }
}
