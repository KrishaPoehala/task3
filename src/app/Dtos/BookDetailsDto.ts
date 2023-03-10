import { ReviewDto } from './ReviewDto';


export interface BookDetailsDto{
    id : number,
    title:string,
    author:string,
    cover:string,
    content:string,
    genre:string,
    rating:number,
    reviews : ReviewDto[],
}