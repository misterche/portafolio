import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos/productos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

	constructor( private _ps:ProductosService){}

}
