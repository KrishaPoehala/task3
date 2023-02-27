import { NewBookDto } from './../Dtos/NewBookDto';
import { BookDetailsDto } from './../Dtos/BookDetailsDto';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BookDto } from "../Dtos/BookDto";

@Injectable()
export class HttpService{

    constructor(private http : HttpClient)
    {}

    public getBooks(){
        return this.http.get<BookDto[]>(environment.api + 'Books?opt=Title');
    }

    public getBookDetails(id : number){
        return this.http.get<BookDetailsDto>(environment.api + `Books/${id}`);
    }

    public postBook(dto : NewBookDto){
        console.log('SAVING A BOOK');
        return this.http.post(environment.api + 'Books/save', dto);
    }

    public getRecommendedBooks(){
        return this.http.get<BookDto[]>(environment.api + 'Books/recommended?genre=omnis');  
    }
}