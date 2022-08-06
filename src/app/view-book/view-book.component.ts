import { BookDetailsDto } from './../Dtos/BookDetailsDto';
import { BookService } from './../Services/BookService';
import { BookDto } from './../Dtos/BookDto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private bookService:BookService) { }
  @Input() bookId : number | undefined = undefined;
  bookDetails:BookDetailsDto | null = null;
  ngOnInit(): void {
    this.bookService.getBookDetails(this.bookId || 0)
    .subscribe(r => this.bookDetails = r)
  }

}
