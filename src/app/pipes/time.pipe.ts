import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let minutes = Math.floor(value / 60);
    var seconds = value - (minutes * 60);

    return this.strPadLeft(minutes,'0',2)  + ':' + this.strPadLeft(seconds,'0',2) ;
  }

  strPadLeft(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}


}
