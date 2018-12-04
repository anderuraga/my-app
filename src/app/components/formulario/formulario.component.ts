import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

 
  formulario: FormGroup; // formulario para agrupar inputs == FormControl

  constructor( public frutaService: FrutaService ) {
    console.trace('FormularioComponent constructor');

    //agrupacion de controles == formulario
    this.formulario = new FormGroup({
      nombre : new FormControl( '',
                                 [
                                  Validators.required,
                                  Validators.minLength(2),
                                  Validators.maxLength(50)
                                 ] 
                              ),
      precio: new FormControl(                              
                               '0',                       //valor inicial                               
                               [                         // array validaciones
                                  Validators.required,
                                  Validators.minLength(0),
                                  Validators.maxLength(5)
                               ] 
                              )
    });
  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
  }


  cargarFormulario(){
    console.trace('FormularioComponent cargarFormulario');
    this.formulario.controls.nombre.setValue('fresa');
    this.formulario.controls.precio.setValue(2.34);

  }


  sumitar(){
    console.trace('FormularioComponent sumitar %o', this.formulario );


    let fruta = new Fruta();
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;

    console.debug('llamar provider pasando la fruta %o', fruta );

    this.frutaService.add( fruta ).subscribe( data => {
      console.debug('fruta creada %o', data);
    });

  }

}
