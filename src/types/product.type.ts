export type TProduct = {
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

export type TinitialProductSliceState = {
    selectedIds : number[];
    products : TProduct[];
}