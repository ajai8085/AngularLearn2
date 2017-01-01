
export interface IProduct{
    productId:number;
    productName:string;
    productCode:string;
    releaseDate:string;
    description:string;
    price:number;
    starRating:number;
    imageUrl:string;
    
}

//Business objec 
// export class Product implements IProduct{

//     constructor(
//                 public productId:number,
//                 public productName:string,
//                 public productCode:string,
//                 public releaseDate:string,
//                 public description:string,
//                 public price:number,
//                 public starRating:number,
//                 public imageUrl:string,
//     ){}

//     calculatePercentDiscount(percent:number){
//         return this.price - (this.price*percent/100);
//     }

//     calculateValueDiscount(value:number ){
//         return this.price - value;
//     }
    
// }