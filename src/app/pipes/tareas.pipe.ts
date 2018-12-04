import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completas'
})
export class TareasPipe implements PipeTransform {

  transform(value: any, todas: boolean): any {

    if ( todas ){
      return value;
    }else{
      return value.filter( el => el.terminado === false );
    }  

  }

}
