import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroElevado'
})
export class NumeroElevadoPipe implements PipeTransform {

  transform(value: number, exp?: number ): number {    
    return exp ? Math.pow(value, exp) : value * value;  
  }

}
