

export class NewBookDto{
    constructor(
    public id : number | null,
    public title : string,
    public cover:string,
    public content:string,
    public genre: string,
    public author:string,
    )
    {}
}