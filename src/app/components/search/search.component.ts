import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService } from '../../services/productos/productos.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

	termino:string=undefined

  constructor( private _ar:ActivatedRoute, public _ps:ProductosService) { 
  		
  		_ar.params.subscribe( parametros=>{

  			this.termino=parametros['termino']

  			// console.log(this.termino)

        _ps.buscar_producto(this.termino)
  		})

  }
}
