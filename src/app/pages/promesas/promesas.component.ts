import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('hola');
    //   } else {
    //     reject('algo salio mal');
    //   }
    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch(error => console.log('Error en el promesa: ', error));

    // console.log('saludo');

    this.getUsuario().then(usuarios => {
      console.log(usuarios);
    });
  }

  // tslint:disable-next-line: typedef
  public getUsuario() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });

    // .then(resp => {
    //   resp.json().then(body => console.log(body));
    // })
    // .catch(console.log);
  }

}
