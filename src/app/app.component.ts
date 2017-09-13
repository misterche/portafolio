import { Component } from '@angular/core';
import { InfoService } from './services/info/info.service'
import { ProductosService } from './services/productos/productos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _is:InfoService, public _ps:ProductosService ){

  }
}
