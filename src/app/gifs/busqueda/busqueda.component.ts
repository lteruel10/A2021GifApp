import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // decorado viewchild
  //elementRef es un generico hay que decirle que tipo es para que no se any
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar( ){
    // elementRefe es un generico por eso es de tipo anY
    const valor=this.txtBuscar.nativeElement.value;
    console.log(valor);
    this.txtBuscar.nativeElement.value='';
  }

}
