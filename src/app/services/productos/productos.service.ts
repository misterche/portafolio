import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

	productos:any[]=[]

	filtro:any[]=[]
	demo:any=[]
	cargando:boolean=true

  	constructor( private http:Http) { 
  		this.cargar_productos()
 	 }

 	 public buscar_producto( termino:string){

 	 	if (this.productos.length===0) {
 	 		this.cargar_productos().then(()=>{
 	 			//termino la carga
 	 			this.filtrado_find(termino)
 	 			
 	 		})
 	 	}else{
 	 		this.filtrado_find(termino)
 	 		
 	 	}
 	 }

 	 private filtrado_find( termino:string){
 	 	this.filtro=[]
 	 	termino = termino.toLowerCase()
 	 	this.productos.forEach( prod=>{
 	 		if (prod.categoria.indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0 ){
 	 			this.filtro.push(prod)
 	 			// console.log(prod)
 	 		}
 	 	})

 	 }

 	 //carga todos los productos
 	 public cargar_productos(){
 	 	this.cargando=true

 	 	let promesa = new Promise( (resolve, rejet) => {

 	 	this.http.get("https://babyshop-d1bda.firebaseio.com/productos_idx.json").subscribe( res=>{
 	 		this.cargando=false
 	 		this.productos = res.json()
 	 		resolve()
 	 	})
 	 	})
 	 	return promesa
 	 }

 	 public carga_total_pro( cod:string){
		return this.http.get(`https://babyshop-d1bda.firebaseio.com/productos/${cod}.json`)
 	 }

}
