import { Component} from '@angular/core';
import { InfoService } from '../../services/info/info.service'
import { Router} from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor( public _is:InfoService, private _ar:Router) { }

	buscar_termino( termino:string){
		// console.log(termino)
		this._ar.navigate(['search', termino])
	}
}
