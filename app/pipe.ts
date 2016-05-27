import {Pipe, PipeTransform} from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'sortByName',
  pure: false
})

export class SortByNamePipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        if (!items || !items.length) { return; }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.author.indexOf(args[0].author) !== -1);
    }
}