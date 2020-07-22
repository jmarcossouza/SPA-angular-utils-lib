import { Component, Input} from '@angular/core';

@Component({
    selector: 'jms-utils-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent {

    @Input() test: string;

    constructor() {

    }
}
