import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  // decorado viewchild
  //elementRef es un generico hay que decirle que tipo es para que no se any
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar( ){
    // elementRefe es un generico por eso es de tipo anY
    const valor=this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(valor);
  //  console.log(valor);
    this.txtBuscar.nativeElement.value='';
  }

}
