import { Component, OnInit,OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import {ProductService} from './product.services';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit,OnDestroy {

    pageTitle: string = "Product Details";
    product: IProduct
    productId:number;

    errorMessage :string;
    
    private sub: Subscription;

    constructor(private _activatedRoute: ActivatedRoute, private _reouter :Router, private _productService: ProductService ) {
        console.log(`Activated route returned value ' ${this._activatedRoute.snapshot.params['id']} ' from the route  `) //only get the initialized value .
        //next product use observable instead .
    }

    ngOnInit(): void {
        let id= + this._activatedRoute.snapshot.params['id'];
        this.pageTitle+= `: ${id}`;
        this.productId=id;


        this.sub = this._activatedRoute.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }



    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack():void
    {
        this._reouter.navigate(['/products']);
    }

    onRatingClicked(message:string)
    {
        
    }
}