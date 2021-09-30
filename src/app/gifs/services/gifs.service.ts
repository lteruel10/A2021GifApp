import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponce } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) {//bob
// obtener los datos de localstorage:
    // if(localStorage.getItem('historial')){
    //   this._historial=JSON.parse(localStorage.getItem('historial')!);
    //   //! le dice ts que confie que ya esta hecha la validacion
    // }
//otra MANERA DE HACER LO MISMO DE ARRIBA
    this._historial=JSON.parse(localStorage.getItem('historial')!)||[];
    this.resultado=JSON.parse(localStorage.getItem('resultado')!)||[];

   }//bob

  private _historial:string[]=[];
  private apiKey:string='o2PaB2w6qGXkvlL2i8OcvfyLqK9GWdST';
  private url:string='https://api.giphy.com/v1/gifs';
  private urlServicio:string='';
  private limit:string='10';
   // TODO: cambiar tipo any por el correcto
  public resultado:Gif[]=[];

  get historial() { 
    return [...this._historial]; 
  }
 
  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,9);
      localStorage.setItem('historial', JSON.stringify(this._historial));
   
    }
    const params=new HttpParams()
        .set('api_key',this.apiKey)
        .set('limit',this.limit)
        .set('q',query);
        console.log(params);



    // this.urlServicio=`${this.url}'/search?${this.apiKey}&q=${query}${this.limit}`;
   // this.urlServicio=`${this.url}/search`,${params};

    // console.log(this.url);
    // console.log(query);
//se especificaq en el get xq es un generico
    this.http.get<SearchGifsResponce>(`${this.url}/search`,{params}).subscribe((resp)=>{
                                        console.log(resp.data);
                                        this.resultado=resp.data; // es donde estoy guardando el resultado
                                        localStorage.setItem('resultado', JSON.stringify(this.resultado));
                                      });
                                         //tarea

  }//buscarGifs

 
}
