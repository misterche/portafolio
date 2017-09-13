import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent  {

  constructor( private _ar:ActivatedRoute) {

  	_ar.params.subscribe( parametros =>{
  		console.log(parametros['id'])
  	})
   }

  ngOnInit() {
  }

}
