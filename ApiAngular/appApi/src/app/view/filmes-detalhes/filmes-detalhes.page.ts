import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmbdapiService } from 'src/app/model/services/ombdapi.service';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.page.html',
  styleUrls: ['./filmes-detalhes.page.scss'],
})
export class FilmesDetalhesPage implements OnInit {
  info : any

  constructor(private actRoute : ActivatedRoute, private omdbapi : OmbdapiService) {}

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id')
    this.omdbapi.getById(id).subscribe(result => {this.info = result})
  }

  OpenURL(){
    window.open(this.info.website, 'blank')
  }
}
