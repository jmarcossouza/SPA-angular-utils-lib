import { Component, Renderer2 } from '@angular/core';
import { BootstrapInputContainerBase } from '../BootstrapInputContainerBase';
import { BootstrapInputContainersService } from '../services/bootstrap-input-containers.service';

@Component({
    selector: 'jmsutils-bootstrap-checkbox-container',
    templateUrl: './bootstrap-checkbox-container.component.html',
    styles: []
})
export class BootstrapCheckboxContainerComponent extends BootstrapInputContainerBase {

    constructor(renderer: Renderer2, service: BootstrapInputContainersService) {
        super(renderer, service);
    }

    public inputChildren(): any[] {
        return super.findBetweenChildElements('input', this.inputParent.nativeElement.children);
    }
}
