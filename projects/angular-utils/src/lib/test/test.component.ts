import { Component, OnInit, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { InputContainerBase } from '../input-containers/InputContainerBase';
import { InputContainersService } from '../input-containers/services/input-containers.service';

@Component({
    selector: 'jms-utils-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent extends InputContainerBase {

    @Input() test: string;

    constructor(renderer: Renderer2, service: InputContainersService) {
        super(renderer, service);

    }
}
