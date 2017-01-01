import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'ai-star',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StarComponent implements OnChanges {

    starWidth: number;
    @Input() rating: number = 4;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
        console.log('Computed star width is = ' + this.starWidth)
    }


    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onItemClicked(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked !`);

    }
}