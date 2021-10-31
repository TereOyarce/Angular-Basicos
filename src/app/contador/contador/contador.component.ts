import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{ title }}</h1>

    <button (click)="acumular(base)">+5</button>
    <span>{{ numero }} </span>
    <button (click)="acumular(-base)">-5</button>`,
})
export class ContadorComponent {
  title = 'Contador App';
  numero = 10;
  base = 5;

  //Metodo
acumular (valor:number){
  this.numero += valor;
}
}
