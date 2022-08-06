import { BookDetailsDto } from './../Dtos/BookDetailsDto';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BookDto } from "../Dtos/BookDto";

@Injectable()
export class BookService{

    constructor(private http : HttpClient)
    {}

    public getBooks(){
        return this.http.get<BookDto[]>(environment.getBooks);
    }

    public getBookDetails(id : number){
        return this.http.get<BookDetailsDto>(environment.getBookDetails + id)
    }
}