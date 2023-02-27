import { BookDetailsDto } from '../../Dtos/BookDetailsDto';
import { HttpService as HttpService } from '../../Services/BookService';
import { BookDto } from '../../Dtos/BookDto';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private http:HttpService) { }
  @Input() bookId! : number;
  book$!:Observable<BookDetailsDto>
  ngOnInit(): void {
    this.book$ = this.http.getBookDetails(this.bookId);
  }
}
