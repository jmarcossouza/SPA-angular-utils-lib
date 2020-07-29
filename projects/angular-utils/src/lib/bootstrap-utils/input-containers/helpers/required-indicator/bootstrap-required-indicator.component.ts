import { Component, Inject } from '@angular/core';
import { BootstrapInputContainersService } from '../../services/bootstrap-input-containers.service';

@Component({
    selector: 'jmsutils-bootstrap-required-indicator',
    template: `<span *ngIf="requiredIndicatorType === 'span'; else iconRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</span><ng-template #iconRequiredIndicator><i [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</i></ng-template>`,
    styles: []
})
export class BootstrapRequiredIndicatorComponent {

    public requiredIndicatorMessage: string;
    public requiredIndicatorClasses: string;
    public requiredIndicatorType: 'span' | 'icon';

    constructor(@Inject(BootstrapInputContainersService) service: BootstrapInputContainersService) {
        this.requiredIndicatorClasses = service.inputContainersConfig.requiredIndicator.requiredIndicatorClasses;
        this.requiredIndicatorMessage = service.inputContainersConfig.requiredIndicator.requiredIndicatorMessage;
        this.requiredIndicatorType = service.inputContainersConfig.requiredIndicator.requiredIndicatorType;
    }
}