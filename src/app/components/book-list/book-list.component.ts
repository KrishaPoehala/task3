import { BookStoreService as BookStoreService } from './../../Services/booke-edit.service';
import { HttpService as HttpService } from '../../Services/BookService';
import { BookDto } from '../../Dtos/BookDto';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private http: HttpService, private store: BookStoreService) 
  { }

  allBooks!:Observable<BookDto[]>
  recommendedBooks! : Observable<BookDto[]>;
  displayedBooks!: Observable<BookDto[]>;
  ngOnInit(): void {
    this.allBooks =  this.store.booksSubject.asObservable();
    this.store.loadBooks();
    this.recommendedBooks =  this.http.getRecommendedBooks();
    this.displayedBooks = this.allBooks;
  }

  getAll(){
    this.displayedBooks = this.allBooks;
  }

  getRecommended(){
    this.displayedBooks = this.recommendedBooks;
  }
}
