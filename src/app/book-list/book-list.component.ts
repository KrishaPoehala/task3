import { BookService } from './../Services/BookService';
import { BookDto } from './../Dtos/BookDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) 
  { }

  books: BookDto[] = []
  ngOnInit(): void {
    this.bookService.getBooks().subscribe(r => this.books = r)
  }

}
