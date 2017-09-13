import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class InfoService {
	info:any={}
	loading:boolean=false
	about:any[]=[]
   	constructor( private http:Http) { 
  	this.carga_info()
  	this.carga_about()
  }

  public carga_info(){
  	this.http.get("assets/data/info.data.js").subscribe( info =>{
  			// console.log(info.json())
  			this.loading = true
  			this.info = info.json()
  	})
  }

  public carga_about(){
  	this.http.get("https://babyshop-d1bda.firebaseio.com/Equipo.json").subscribe( info =>{
  			console.log(info.json())
  			this.loading = true
  			this.about = info.json()
  	})
  }

}
