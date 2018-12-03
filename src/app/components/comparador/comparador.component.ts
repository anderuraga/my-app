import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  frutas: Fruta[];
  carrito: Fruta[];
  f1: Fruta;
  f2: Fruta;

  constructor() {
    console.trace('ComparadorComponent constructor');
    this.frutas = [];
    this.carrito = [];
    this.f1 = new Fruta();
    this.f2 = new Fruta();
    this.loadFrutas();

    this.f1 =  this.frutas[0];
    this.f2 =  this.frutas[1];

  }

  ngOnInit() {
    console.trace('ComparadorComponent ngOnInit');
  }

  seleccionar( fruta: Fruta ) {
    console.trace('ComparadorComponent seleccionar %o', fruta);
    this.f2 = this.f1;
    this.f1 = fruta;
  }

  getTotal(): number{
    let total = 0;
    this.carrito.forEach( el => {
      total += el.precio * el.cantidad;
    })
    return total;
  }

  sumarProducto(p: Producto, index: number){    
    p.cantidad++;
    this.carrito[index] = p;
  }

  restarProducto(p: Producto, index: number){
    if ( p.cantidad > 1 ){
      p.cantidad--;
      this.carrito[index] = p;
    }
  }

  eliminarProducto(p: Producto, index: number){
    p.cantidad = 1;
    this.carrito.splice(index,1);
  }

  actualizarCarro( event: Event) {
    console.debug('ComparadorComponent actualizarCarro recibimos evento del componente hijo');
    let frutaClick = event['frutaClick'];
    console.debug('Parametro frutaClick = %o' , frutaClick );
    let f = this.carrito.find( f => f.nombre === frutaClick.nombre);
    if ( f ){
      f.cantidad ++;
      let index = this.carrito.indexOf(frutaClick);
      this.carrito[index]= f;      
    }else{
      this.carrito.push(frutaClick);
    }  
  }

  loadFrutas() {
    console.trace('ComparadorComponent loadFrutas');
    let f: Fruta;

    f = new Fruta();
    f.nombre = 'Banana';
    f.precio = 3.15;
    f.calorias = 500;
    f.colores = ['Amarillo', 'Negro'];
    f.oferta = true;
    f.imagen = 'http://padeladdict.com/wp-content/uploads/2012/12/platano2.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Pera';
    f.precio = 2;
    f.calorias = 350;
    f.colores = ['Amarillo', 'Verde'];
    f.imagen = 'http://www.cajanature.com/405-large_default/pera-ecologica-.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Kiwi';
    f.precio = 2.34;
    f.calorias = 720;
    f.colores = ['Amarillo', 'Verde'];
    f.imagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Kiwi_%28Actinidia_chinensis%29_2_Luc_Viatour.jpg/220px-Kiwi_%28Actinidia_chinensis%29_2_Luc_Viatour.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Fresa';
    f.precio = 0.75;
    f.calorias = 100;
    f.colores = ['Rosa', 'Rojo', 'Verde'];
    f.oferta = true;
    f.imagen = 'http://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg';
    this.frutas.push(f);

  }

}
