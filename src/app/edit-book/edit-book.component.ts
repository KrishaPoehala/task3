import { NewBookDto } from './../Dtos/NewBookDto';
import { BookService } from './../Services/BookService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private fb : FormBuilder, private bookService:BookService) 
  { }
  title:string = "Add Book"
  isEditingMode:boolean = false;

  bookForm = this.fb.group({
    title : [''],
    cover: [''],
    genre: [''],
    author: [''],
    content: [''],
  })
  ngOnInit(): void {
  }

  submit(){
    
    if(this.isEditingMode === false){
      if(this.bookForm.invalid){
        return;
      }

      const title = this.bookForm.controls.title.value || "";
      const cover = this.bookForm.controls.cover.value || "";
      const content = this.bookForm.controls.content.value || "";
      const  genre = this.bookForm.controls.genre.value || "";
      const author = this.bookForm.controls.author.value || "";
      let dto = new NewBookDto(null, title, cover, content, genre, author);
      this.bookService.postBook(dto).subscribe();
    } 
  }

  clearForm(){
    this.bookForm.reset();
  }

}
