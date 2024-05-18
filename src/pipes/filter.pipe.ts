import { Pipe, PipeTransform } from '@angular/core';
import { BookModel } from '../models/book-model.interface';

@Pipe({
  name: 'filter', standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: BookModel[], categoryName: string): any {
    if (categoryName == "all")
      return value;
    var data = value.filter(f => f.category === categoryName);

    return data;
  }
}