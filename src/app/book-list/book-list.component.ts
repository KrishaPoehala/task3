import { BookService } from './../Services/BookService';
import { BookDto } from './../Dtos/BookDto';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) 
  { }

  allBooks:BookDto[] = []
  recommendedBooks : BookDto[] = []
  displayedBooks: BookDto[] = []
  ngOnInit(): void {
    this.bookService.getBooks().subscribe(r => {
      this.allBooks = r
      this.displayedBooks = this.allBooks;
    })
    this.bookService.getRecommendedBooks().subscribe(r => this.recommendedBooks = r)

   
  }

  getAll(){
    this.displayedBooks = this.allBooks;
  }

  getRecommended(){
    this.displayedBooks = this.recommendedBooks;
  }
}
