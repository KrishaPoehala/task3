import { HttpService } from './BookService';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookDto } from '../Dtos/BookDto';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http:HttpService) { }
  public booksSubject = new BehaviorSubject<BookDto[]>([]);
  public loadBooks(){
    this.http.getBooks().subscribe(books => {
      console.log(books);
      this.booksSubject.next(books);
    });
  }

  public bookEditEmmiter:EventEmitter<BookDto> = new EventEmitter();
}
