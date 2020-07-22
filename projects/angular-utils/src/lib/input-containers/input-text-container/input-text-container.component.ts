import { Component,  Renderer2, Input, Inject } from '@angular/core';
import { InputContainerBase } from '../InputContainerBase';
import { InputContainersService } from '../services/input-containers.service';

@Component({
  selector: 'jms-utils-input-text-container',
  templateUrl: './input-text-container.component.html',
  styles: []
})
export class InputTextContainerComponent extends InputContainerBase {
    /**
     * @description Pra injetar alguma classe na `<div>` pai do `<input>`.
     * @description Criei isso pra poder usar os inputs com append e prepend.
     * @example
     * <div [ngClass]="inputParentClass">
     *     <ng-content></ng-content>
     * </div>
     */
    @Input() inputParentClass: string;

    constructor(renderer: Renderer2, @Inject(InputContainersService) service: InputContainersService) {
        super(renderer, service);
        this.inputParentClass = service.inputContainersConfig.inputParentClass;
    }
}
