import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

	productos:any[]=[]
	cargando:boolean=true
  	constructor( private http:Http) { 
  		this.cargar_productos()
 	 }

 	 public cargar_productos(){
 	 	this.cargando=true
 	 	this.http.get("https://babyshop-d1bda.firebaseio.com/productos_idx.json").subscribe( res=>{
 	 		this.cargando=false
 	 		// console.log(res.json())
 	 		this.productos = res.json()
 	 	})
 	 	
 	 }
}
