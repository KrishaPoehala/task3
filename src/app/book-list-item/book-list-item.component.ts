import { BookService } from './../Services/BookService';
import { BookDto } from './../Dtos/BookDto';
import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal,private bookService:BookService) {}

  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  ngOnInit(): void {
  }

  @Input() book :BookDto | null = null

}
