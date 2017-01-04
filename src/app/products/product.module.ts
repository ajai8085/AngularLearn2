
import {NgModule} from '@angular/core'
import { RouterModule } from '@angular/router'
import { ProductListComponent } from './product-list-component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component'
import {ProductDetailsGuard} from './product-guard.service'
import {productRouting} from './products.routing';

import {ProductService} from './product.services'

import{SharedModule} from '../shared/shared.module';

@NgModule({
    imports:[
      productRouting,
        SharedModule
    ],
    declarations:[
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent,
        
    ],    
    providers: [ProductService,ProductDetailsGuard],
    
})
export class ProductModule{}