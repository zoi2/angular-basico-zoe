import { Component} from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})

export class ListadoComponent{
  heroes:string[]=['superman','batman','aquaman','flash'];
  
  heroeBorrado:string = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
  
}
  

  

