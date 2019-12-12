import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../services/animes.service';
@Component({
  selector: 'app-lista-animes',
  templateUrl: './lista-animes.component.html',
  styleUrls: ['./lista-animes.component.css']
})
export class ListaAnimesComponent implements OnInit {
  listaAnimes = [];

  constructor(private animesService: AnimesService) { }

  ngOnInit() {
    this.animesService.getAnime().subscribe(res => {
      console.log(res);
      this.listaAnimes = res;
    },
    err => console.log(err)
    )
  }

}
