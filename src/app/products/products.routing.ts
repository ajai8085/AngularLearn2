import {ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list-component';
import { ProductDetailComponent } from './product-detail.component'
import {ProductDetailsGuard} from './product-guard.service'


export const productRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

export const productRouting: ModuleWithProviders =
                RouterModule.forChild(productRoutes);