import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  // Datos Tabla 1
  public title1: string = 'Titulo 1';
  public labels1: string[] = ['etiqueta 1', 'etiqueta 2', 'etiqueta 3'];
  public data1: [number[]] = [[50, 25, 25]];

  // Datos Tabla 2
  public title2: string = 'Titulo 2';
  public labels2: string[] = ['lbl 1', 'lbl 2', 'lbl 3'];
  public data2: [number[]] = [[10, 50, 30]];
}
