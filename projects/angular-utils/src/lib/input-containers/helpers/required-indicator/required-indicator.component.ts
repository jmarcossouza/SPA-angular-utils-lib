import { Component, Inject } from '@angular/core';
import { InputContainersService } from '../../services/input-containers.service';

@Component({
    selector: 'jmsutils-required-indicator',
    template: `<span *ngIf="requiredIndicatorType === 'span'; else iconRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</span><ng-template #iconRequiredIndicator><i [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</i></ng-template>`,
    styles: []
})
export class RequiredIndicatorComponent {

    public requiredIndicatorMessage: string;
    public requiredIndicatorClasses: string;
    public requiredIndicatorType: 'span' | 'icon';

    constructor(@Inject(InputContainersService) service: InputContainersService) {
        this.requiredIndicatorClasses = service.inputContainersConfig.requiredIndicator.requiredIndicatorClasses;
        this.requiredIndicatorMessage = service.inputContainersConfig.requiredIndicator.requiredIndicatorMessage;
        this.requiredIndicatorType = service.inputContainersConfig.requiredIndicator.requiredIndicatorType;
    }
}