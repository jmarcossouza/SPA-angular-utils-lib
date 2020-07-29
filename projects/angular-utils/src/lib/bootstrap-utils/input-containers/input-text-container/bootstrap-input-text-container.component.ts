import { Component,  Renderer2, Inject } from '@angular/core';
import { BootstrapInputContainerBase } from '../BootstrapInputContainerBase';
import { BootstrapInputContainersService } from '../services/bootstrap-input-containers.service';

@Component({
  selector: 'jmsutils-bootstrap-input-text-container',
  templateUrl: './bootstrap-input-text-container.component.html',
  styles: []
})
export class BootstrapInputTextContainerComponent extends BootstrapInputContainerBase {

    constructor(renderer: Renderer2, @Inject(BootstrapInputContainersService) service: BootstrapInputContainersService) {
        super(renderer, service);
    }
}
