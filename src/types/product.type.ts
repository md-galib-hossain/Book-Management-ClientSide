export type TProduct = {
    _id? : string;
    productName : string;
    productSimpleId : string;
    productPrice : number;
    productQuantity : number;
    releaseDate : string;
    author : string;
    isbn : number;
    genre : string;
    publisher : string;
    series : string;
    language : string[];
    bookFormat : string[];
    isDeleted? : boolean

}


export type TFilterProduct = {
    filterAuthor : string;
    filterReleaseDate: string;
    filterISBN : string;
    filterGenre: string;
    filterPublisher: string;
    filterSeries: string;
    filterLanguage:string;
    filterBookFormat: string
}

export type TinitialProductSliceState = {
    selectedIds : string[];
    product : TProduct;
    filterItem: TFilterProduct
}