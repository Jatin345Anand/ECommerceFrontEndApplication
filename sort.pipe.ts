import { Pipe, PipeTransform } from '@angular/core';
import { Mobileproduct } from './mobileproduct';
@Pipe({
  name: 'sortByPrice'
})
export class SortPipe implements PipeTransform {

  transform(value: Mobileproduct[], order:string): Mobileproduct[] {
    if(value){
      return value.sort((a,b)=>a.Price-b.Price);
    }
    else{
      return value;
    }
  }

}
