import { Component, Renderer2, Inject } from '@angular/core';
import { InputContainerBase } from '../InputContainerBase';
import { InputContainersService } from '../services/input-containers.service';

@Component({
    selector: 'jmsutils-radio-container',
    templateUrl: './radio-container.component.html',
    styles: []
})
export class RadioContainerComponent extends InputContainerBase {

    constructor(renderer: Renderer2, @Inject(InputContainersService) service: InputContainersService) {
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
