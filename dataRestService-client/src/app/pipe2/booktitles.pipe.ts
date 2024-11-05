import { Pipe, PipeTransform } from '@angular/core';
import {Author, Book} from '../authors/model/book';

@Pipe({
  name: 'booktitles',
  standalone: true
})
export class BooktitlesPipe implements PipeTransform {

  transform(value: Book[] | undefined): string {
    if (value == null) return '';
    return value.map((book) => `${book.title}, ${book.year}`).join(' <b>and</b> ')
  }

}
