import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import{FormsModule} from '@angular/forms';
import { StarComponent } from './start.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[StarComponent ],
    exports:[CommonModule, FormsModule,StarComponent]
})
export class SharedModule{

}