export type TProduct = {
    _id? : string;
    productName : string;
    productSimpleId? : string;
    productPrice : number;
    productQuantity : number;
    releaseDate : string;
    author : string;
    isbn? : number;
    genre : string;
    publisher : string;
    series : string;
    language : string[];
    bookFormat : string[];
    isDeleted : boolean;
    createdBy : string;
    updatedAt? : string;
    createdAt? : string

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
    searchTerm : string;
    createProduct: TProduct
    currentPage?: string;
    totalPage?: string;
    selectedIds : string[];
    updateProduct : Partial<TProduct>;
    filterItem: TFilterProduct
}