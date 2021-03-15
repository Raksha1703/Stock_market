import { flatten } from "@angular/compiler";
export interface Stock {
    name:string;
    code:string,
    price:number,
    previousPrice:number,
    exchange:string,
    favorite:boolean
}
// export class Stock {
//     favorite: boolean = false;
//     //notablePeople: Person[];
//     constructor(
//         public name:string,
//         public code:string,
//         public price:number,
//         public previousPrice:number,
//         public exchange:string
//     ){}

//     // isPositiveChange(): boolean {
//     //     return this.price >= this.previousPrice;
//     // }
// }
export class Person{
    name:string;
    title:string;
}