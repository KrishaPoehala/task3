import { GyazoService } from './../../Services/gyazo.service';
import { BookDto } from './../../Dtos/BookDto';
import { BookStoreService } from './../../Services/booke-edit.service';
import { NewBookDto } from '../../Dtos/NewBookDto';
import { HttpService as HttpService } from '../../Services/BookService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private fb : FormBuilder, private bookService:HttpService,
    private store:BookStoreService,private gyazo:GyazoService) 
  { }
  title = "Add Book"
  isEditingMode = false;

  bookForm = this.fb.group({
    title : ['',Validators.required],
    cover: ['',Validators.required],
    genre: ['',Validators.required],
    author: ['',Validators.required],
    content: ['',Validators.required],
  })
  ngOnInit(): void {
    this.store.bookEditEmmiter.subscribe(bookToEdit => this.onBookToEditSelected(bookToEdit));
  }

  editedBookId:number | null = null;
  onBookToEditSelected(book:any){
    this.editedBookId = book.id;
    this.isEditingMode = true;
    for(const controlName in this.bookForm.controls){
      if(controlName == 'cover'){
        continue;
      }

      const value = book[controlName];
      this.bookForm.get(controlName)?.setValue(value);
    }
  }

  async submit(){
    if(this.bookForm.invalid){
      return;
    }

    const controls = this.bookForm.controls;
    const title = controls.title.value || "";
    const content = controls.content.value || "";
    const  genre = controls.genre.value || "";
    const author = controls.author.value || "";
    let cover = "";
    if(this.imageFile){
      const response = await this.gyazo.uploadImage(this.imageFile).then(x => x.json());
      cover = response.url;
    }

    let dto = new NewBookDto(this.editedBookId, title,
       cover, content, genre, author);
    this.bookService.postBook(dto).subscribe(() => {
      this.store.loadBooks();
    });

    this.clearForm();
  }

  clearForm(){
    this.isEditingMode = false;
    this.editedBookId = null;
    this.bookForm.reset();
  }

  imageFile:File | null = null;
  onBookCoverChange(event:any){
    this.imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.imageFile!); 
  }
}
