import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { BarraComponent } from './barra/barra.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor() { }

  ngOnInit() {
  }
}
