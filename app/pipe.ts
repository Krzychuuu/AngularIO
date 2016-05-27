import {Pipe, PipeTransform} from '@angular/core';
import 'rxjs/Rx';

@Pipe({
  name: 'sortByName',
  pure: false
})

export class SortByNamePipe {
    transform(items: any[], args: any[]): any {
        if (!items || !items.length) { return; }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.author.indexOf(args[0].author) !== -1);
    
    /*transform (value, [queryString]) {
    if (value==null) {
      return null;
    }
    console.log(this.transform);
    console.log(value);

    return value.filter((book)=>new RegExp(queryString).test(book.title))
    // return value;*/
  }
}