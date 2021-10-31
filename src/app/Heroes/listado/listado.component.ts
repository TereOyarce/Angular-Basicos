import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent   {
heroes : string[] = ['IronMan','Spiderman','Thor','Hulk'];
heroeEliminado : string = '';

borrarHeroe(){
  console.log('Borrando..');

 this.heroeEliminado = this.heroes.shift() || '';
}
}
