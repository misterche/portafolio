import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class InfoService {
	info:any={}
	loading:boolean=false
   	constructor( private http:Http) { 
  	this.http.get("assets/data/info.data.js").subscribe( info =>{
  			console.log(info.json())
  			this.loading = true
  			this.info = info.json()
  	})
  }

}
