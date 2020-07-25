import { Component,  Renderer2, Input, Inject } from '@angular/core';
import { InputContainerBase } from '../InputContainerBase';
import { InputContainersService } from '../services/input-containers.service';

@Component({
  selector: 'jmsutils-input-text-container',
  templateUrl: './input-text-container.component.html',
  styles: []
})
export class InputTextContainerComponent extends InputContainerBase {

    constructor(renderer: Renderer2, @Inject(InputContainersService) service: InputContainersService) {
        super(renderer, service);
    }
}
