import { Component, Renderer2, Inject } from '@angular/core';
import { BootstrapInputContainerBase } from '../BootstrapInputContainerBase';
import { BootstrapInputContainersService } from '../services/bootstrap-input-containers.service';

@Component({
    selector: 'jmsutils-bootstrap-radio-container',
    templateUrl: './bootstrap-radio-container.component.html',
    styles: []
})
export class BootstrapRadioContainerComponent extends BootstrapInputContainerBase {

    constructor(renderer: Renderer2, @Inject(BootstrapInputContainersService) service: BootstrapInputContainersService) {
        super(renderer, service);
    }

    /**
     * @description Cada <div> em que se encontra o input radio e o label dele.
     */
    private get divRadioArray(): any[] {
        return this.inputParent.nativeElement.children;
    }

    /**
     * @override Sobrescrita do método porque mudou a localização dos inputs.
     */
    public inputChildren(): any[] {
        const inputsArray: any[] = [];

        for (let index = 0; index < this.divRadioArray.length; index++) {
            // Salvar os elementos encontrados nessa constante.
            const elementosEncontrados: any[] = super.findBetweenChildElements('input', this.divRadioArray[index].children);

            // Pra cada elemento encontrado, vou jogar no array lá de cima. Depois pensar numa maneira de melhorar esse código sem esse for.
            for (let index = 0; index < elementosEncontrados.length; index++) {
                inputsArray.push(elementosEncontrados[index]);
            }
        }
        return inputsArray;
    }
}
