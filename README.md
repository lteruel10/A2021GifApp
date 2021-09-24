# d-flex...coloca un element al lado de otro
 <div class="d-flex">
  <div>Hola </div>
  <div>Mundo</div>
</div>


# lo ideal es no tener practicamente nada en el app component


# Non-null assertion operator
# ViewChild   el simbolo ! nos ayuda a decirle a ts que el objeto no es nulo o asegurarle que existe.
  @ViewChild('txtBuscar') txtBuscar!:ElementRef;
* ejemplo
// decorador viewchild
  //elementRef es un generico hay que decirle que tipo es para que no se any
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar( ){
  // elementRefe es un generico por eso es de tipo anY
    const valor=this.txtBuscar.nativeElement.value;
    console.log(valor);
    this.txtBuscar.nativeElement.value='';
  }




















## repositorio github de la seccion
git remote add origin https://github.com/lteruel10/A2021GifApp.git
git push -u origin master