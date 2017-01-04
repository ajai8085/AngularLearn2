import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProductDetailsGuard implements CanActivate {

    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        let id=+route.params['id'];
        //let id = +route.url[1].path

        if (isNaN(id) || id < 1) {

            alert('invalid id value found in  router');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}
