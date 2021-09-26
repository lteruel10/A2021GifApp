import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) { }

  private _historial:string[]=[];
  private apiKey:string='api_key=';
  private url:string='https://api.giphy.com/v1/gifs/search?';
  private limit:string='&limit=10';
 // TODO: cambiar tipo any por el correcto
  public resultado:any[]=[];

  get historial() { 
    return [...this._historial]; 
  }
 
  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,9);
    }
    this.url=`https://api.giphy.com/v1/gifs/search?${this.apiKey}&q=${query}${this.limit}`;
    console.log(this.url);
    console.log(query);

    this.http.get(this.url).subscribe((resp:any)=>{
                                        console.log(resp.data);
                                        this.resultado=resp.data; // es donde estoy guardando el resultado
                                      });
  }

 
}
