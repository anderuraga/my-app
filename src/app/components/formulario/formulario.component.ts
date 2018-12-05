import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
 
  formulario: FormGroup; // formulario para agrupar inputs == FormControl
  colores: FormArray;    // Arrays de FormControl

  constructor( public frutaService: FrutaService ) {
    console.trace('FormularioComponent constructor');

    

    //agrupacion de controles == formulario
    this.formulario = new FormGroup({
      nombre : new FormControl( '', 
                                [ Validators.required, Validators.minLength(2), Validators.maxLength(50)] 
                              ),
      precio: new FormControl( '0', [ Validators.required, Validators.min(0.1), Validators.max(999) ]                      
                              ),
      imagen: new FormControl('https://picsum.photos/300/300/?random', [ Validators.required, Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')]),
      oferta: new FormControl( false ),
      descuento: new FormControl( '5', [Validators.min(5), Validators.max(90) ] ),
      colores: new FormArray( [this.crearColorFormGroup(),this.crearColorFormGroup() ], Validators.minLength(1) )

    });

    


  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
  }


  crearColorFormGroup(): FormGroup{
    return new FormGroup({
                color: new FormControl('verde', [ Validators.required, Validators.minLength(2), Validators.minLength(15)])
        });
  }

  nuevoColor(){
    let arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push( this.crearColorFormGroup() );
  }

  eliminarColor( index: number){
    let arrayColores = this.formulario.get('colores') as FormArray;
    if ( arrayColores.length > 1 ){
      arrayColores.removeAt(index);
    }  
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
