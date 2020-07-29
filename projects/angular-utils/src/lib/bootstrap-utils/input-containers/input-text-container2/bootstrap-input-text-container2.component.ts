import { Component, Renderer2, Input, Inject } from '@angular/core';
import { BootstrapInputContainerBase } from '../BootstrapInputContainerBase';
import { BootstrapInputContainersService } from '../services/bootstrap-input-containers.service';

@Component({
    selector: 'jmsutils-bootstrap-input-text-container2',
    templateUrl: './bootstrap-input-text-container2.component.html',
    styles: []
})
export class BootstrapBootstrapInputTextContainer2Component extends BootstrapInputContainerBase {

    constructor(renderer: Renderer2, @Inject(BootstrapInputContainersService) service: BootstrapInputContainersService) {
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
