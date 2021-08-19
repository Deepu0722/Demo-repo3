import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toupper'
})
export class ToupperPipe implements PipeTransform {

  transform(value: any): any {
    return value.slice(0,2)+"!!!!!!";
  }

}
