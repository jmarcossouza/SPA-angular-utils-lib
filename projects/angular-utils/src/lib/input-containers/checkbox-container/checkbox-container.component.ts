import { Component, Renderer2, Input } from '@angular/core';
import { InputContainerBase } from '../InputContainerBase';
import { InputContainersService } from '../services/input-containers.service';

@Component({
    selector: 'jmsutils-checkbox-container',
    templateUrl: './checkbox-container.component.html',
    styles: []
})
export class CheckboxContainerComponent extends InputContainerBase {

    constructor(renderer: Renderer2, service: InputContainersService) {
        super(renderer, service);
    }

    public inputChildren(): any[] {
        return super.findBetweenChildElements('input', this.inputParent.nativeElement.children);
    }
}
