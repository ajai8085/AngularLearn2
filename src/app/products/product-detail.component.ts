import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string = "Product Details";
    product: IProduct
    productId:number;

    constructor(private _activatedRoute: ActivatedRoute, private _reouter :Router) {
        console.log(`Activated route returned value ' ${this._activatedRoute.snapshot.params['id']} ' from the route  `) //only get the initialized value .
        //next product use observable instead .
    }

    ngOnInit(): void {
        let id= + this._activatedRoute.snapshot.params['id'];
        this.pageTitle+= `: ${id}`;
        this.productId=id;
    }

    onBack():void
    {
        this._reouter.navigate(['/products']);
    }

    onRatingClicked(message:string)
    {
        
    }
}