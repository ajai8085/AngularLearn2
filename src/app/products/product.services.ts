import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //only execute the javascripts.
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    private _serviceUrl: string = "http://127.0.0.1:8080/products.json" //copy the products.json file in this folder under a folder somewhere else and run : http-server --cors

    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._serviceUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do((next) => console.log('All: ' + JSON.stringify(next)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Service Error');
    }

      getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId == id));
    }

}