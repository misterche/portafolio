import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService} from '../../services/productos/productos.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent  {

	producto:any=undefined
	cod:string=undefined
  	constructor( private _ar:ActivatedRoute, private _ps:ProductosService) {

  	_ar.params.subscribe( parametros =>{
  		_ps.carga_total_pro( parametros['id'] ).subscribe( res =>{this.cod=parametros['id'], this.producto = res.json()

  			console.log(res.json())
  		})
  	})
   }

}
