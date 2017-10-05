import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tipos de Pipes';

  nombre = 'dave gamache';

  libroTitle = 'de cero a uno';

  collection: string[] = ['Orfa', 'Natalia', 'Kevin', 'Clayre', 'Frank', 'Johnson'];

  PI = Math.PI;

  porcentPipe: number = 0.5827;

  money: number = 3850.528;

  tePrometoQue = new Promise( ( resolve , reject )=> {

      setTimeout( () => resolve('Te voy a querer siempre'), 2500 );

    })

  fecha = new Date('05/10/2017');

  personas = [
    {
      "Apellido": "Arcila",
      "Casado": false,
      "Dirección": "Calle 35 # 43 28",
      "Nombre": "Diego",
      "Teléfono": 3859720
    },
    {
      "Apellido": "Bueno",
      "Casado": false,
      "Dirección": "CR 16A # 53 28",
      "Nombre": "Kevin",
      "Teléfono": 31485579954
    },
    {
      "Apellido": "Palomino",
      "Casado": false,
      "Dirección": "CR 25 # 52 33",
      "Nombre": "Natalia",
      "Teléfono": 32255945555
    }
  ]

}
