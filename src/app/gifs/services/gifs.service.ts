import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:string[]=[];
  get historial() { 
    return [...this._historial]; 
  }

  private apiKey:string='';
  private url:string='https://api.giphy.com/v1/gifs/search?api_key='+this.apiKey+'&q=dragon ball z&limit=10';

  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,9);
    }
//    console.log(this._historial);
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=apiKey&q=dragon ball z&limit=10')
    // .then(resp=>{
    //   resp.json().then(data=>{
    //     console.log(data);
    //   })
    // })///este es ejemplod de javascript
    this.http.get(this.url).subscribe((resp:any)=>{
      console.log(resp);
    });
  }

  constructor(private http:HttpClient) { }
}
