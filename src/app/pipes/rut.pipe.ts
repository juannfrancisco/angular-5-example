import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rut'
})
export class RutPipe implements PipeTransform {

  transform(value: string, format: any): any {
    if( format ){
      return this.format( value, format );
    }else{
      return this.format( value, "##.###.###-#" );
    }
  }

  format(value, pattern) {
    var i = 0,
        v = value.toString();
    return pattern.replace(/#/g, _ =>{ 
      let index = i++;
      return v[index] ? v[index] : "";
    });
  }


}
