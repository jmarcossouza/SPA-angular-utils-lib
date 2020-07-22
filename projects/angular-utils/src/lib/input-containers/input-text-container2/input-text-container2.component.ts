import { Component, Renderer2, Input, Inject } from '@angular/core';
import { InputContainerBase } from '../InputContainerBase';
import { InputContainersService } from '../services/input-containers.service';

@Component({
    selector: 'jms-utils-input-text-container2',
    templateUrl: './input-text-container2.component.html',
    styles: []
})
export class InputTextContainer2Component extends InputContainerBase {

    constructor(renderer: Renderer2, @Inject(InputContainersService) service: InputContainersService) {
        super(renderer, service);
    }

    /**
     * @description Classe que será aplicada no <label>. É mais pra indicar o tamanho que o <label> ocupará.
     * @default 'col-lg-2'
     */
    @Input() labelClass = 'col-lg-2';
    /**
     * @description Classe que será aplicada na <div> pai do <input>. É mais pra indicar o tamanho que o <input> ocupará.
     * @default 'col-lg-10'
     */
    @Input() inputClass = 'col-lg-10';
}
