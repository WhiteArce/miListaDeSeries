import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Es un titulo';
  descripcion = "descripcion";
  
  mensaje = {
    title: this.title,
    descripcion: this.descripcion
  };
}
