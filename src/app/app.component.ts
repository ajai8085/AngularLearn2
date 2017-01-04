import { Component } from '@angular/core';
import {ProductService} from './products/product.services'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  pageTitle = 'Products App';
}
