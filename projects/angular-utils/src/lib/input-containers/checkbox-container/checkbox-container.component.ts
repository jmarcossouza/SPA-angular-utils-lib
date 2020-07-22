import { Component, Renderer2, Input } from '@angular/core';
import { InputContainerBase } from '../InputContainerBase';
import { InputContainersService } from '../services/input-containers.service';

@Component({
    selector: 'jms-utils-checkbox-container',
    templateUrl: './checkbox-container.component.html',
    styles: []
})
export class CheckboxContainerComponent extends InputContainerBase {

    /**
     * @description Propriedade que decide se deve ou não mostrar um `<label>` com um `&nbsp;` (espaço vazio).
     * Eu uso esse label pro espaçamento não ficar zuado com `<inputs type="checkbox">` que não usam o `<label>`.
     * @example
     * <label *ngIf="emptyLabel"> &nbsp;</label>
     * <div class="custom-control custom-checkbox">
     *  <input type="checkbox" value"...">
     * </div>
     */
    @Input() emptyLabel: boolean;

    constructor(renderer: Renderer2, service: InputContainersService) {
        super(renderer, service);
        this.emptyLabel = service.inputContainersConfig.emptyLabel;
    }

    public inputChildren(): any[] {
        return super.findBetweenChildElements('input', this.inputParent.nativeElement.children);
    }
}
