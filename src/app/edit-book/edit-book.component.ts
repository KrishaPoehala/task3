import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private fb : FormBuilder) 
  { }
  title:string = "Add Book"

  bookForm = this.fb.group({
    title : [''],
    cover: [''],
    genre: [''],
    author: [''],
    content: [''],
  })
  ngOnInit(): void {
  }

}
