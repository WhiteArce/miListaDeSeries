import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AnimesService } from '../services/animes.service';

@Component({
  selector: 'app-agregar-ser-anim',
  templateUrl: './agregar-ser-anim.component.html',
  styleUrls: ['./agregar-ser-anim.component.css']
})
export class AgregarSerAnimComponent implements OnInit {

  clasificacionForm: FormGroup;
  form: FormGroup;
  ordersData = [];

  constructor(private animesService: AnimesService, private router: Router) { }

  ngOnInit() {
  }

  onNewAnime(form): void {
    this.animesService.createAnime(form.value).subscribe(res => {
      this.router.navigate(['./home']);
    })
  }


  // clasificaciones = [
  //   {id: 1, name: 'Familiar'},
  //   {id: 2, name: 'Adulto'}
  // ];


  // constructor(private formBuilder: FormBuilder) {
  //   this.form = this.formBuilder.group({
  //     orders: new FormArray([],
  //       minSelectedCheckboxes(1))
  //   });

  //   of(this.getOrders()).subscribe(orders => {
  //     this.ordersData = orders;
  //     this.addCheckboxes();
  //   });
  // }

  // private addCheckboxes() {
  //   this.ordersData.forEach((o, i) => {
  //     const control = new FormControl(i === 0);
  //     (this.form.controls.orders as FormArray).push(control);
  //   });
  // }

  // getOrders() {
  //   return [
  //     { id: 1, name: 'Accion' },
  //     { id: 2, name: 'Ciencia Ficcion' },
  //     { id: 3, name: 'Deportes' },
  //     { id: 4, name: 'Espacial' },
  //     { id: 5, name: 'Infantil' },
  //     { id: 6, name: 'Mecha' },
  //     { id: 7, name: 'Parodia' },
  //     { id: 8, name: 'Romance' },
  //     { id: 9, name: 'Shounen' },
  //     { id: 10, name: 'Terror' },
  //     { id: 11, name: 'Artes Marciales' },
  //     { id: 12, name: 'Comedia' },
  //     { id: 13, name: 'Drama' },
  //     { id: 14, name: 'Fantasia' },
  //     { id: 15, name: 'Militar' },
  //     { id: 16, name: 'Sobrenatural' },
  //     { id: 17, name: 'Ecchi' },
  //     { id: 18, name: 'Seinen' },
  //     { id: 19, name: 'Música' },
  //     { id: 20, name: 'Shoujo' }
  //   ];
  // }


  // submit() {
  //   const selectedOrderIds = this.form.value.orders
  //     .map((v, i) => v ? this.ordersData[i].id : null)
  //     .filter(v => v !== null);
  //   console.log(selectedOrderIds);

  // }
  // ngOnInit() {
  //  const selectedClassi = this.clasificacionForm = this.formBuilder.group({
  //     clasificacionControl: [this.clasificaciones[0]]
  //   });
  // }

}

// function minSelectedCheckboxes(min = 1) {
//   const validator: ValidatorFn = (formArray: FormArray) => {
//     const totalSelected = formArray.controls
//       .map(control => control.value)
//       .reduce((prev, next) => next ? prev + next : prev, 0);

//     return totalSelected >= min ? null : { required: true };
//   };

//   return validator;
// }
