import { BookStoreService } from './../../Services/booke-edit.service';
import { HttpService } from '../../Services/BookService';
import { BookDto } from '../../Dtos/BookDto';
import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  closeResult = '';
  @Input() book! :BookDto;

  constructor(private modalService: NgbModal, private store:BookStoreService) {}

  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  ngOnInit(): void {
  }

  onEditClick(){
    this.store.bookEditEmmiter.emit(this.book);
  }
}
