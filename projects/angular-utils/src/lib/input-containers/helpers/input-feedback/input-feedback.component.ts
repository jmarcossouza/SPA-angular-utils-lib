import { Component, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputContainersService } from '../../services/input-containers.service';
import { FeedbackErrorsMessages } from '../../models/input-containers-config.interface';

@Component({
    selector: 'jms-utils-input-feedback',
    templateUrl: './input-feedback.component.html',
    styles: []
})
export class InputFeedbackComponent {

    @Input() public fControl: FormControl;
    /**
     * @description Decide se deve ser mostrada alguma mensagem quando o campo for INVÁLIDO.
     */
    @Input() public showWhenInvalid: boolean;
    @Input() public feedbackInvalidClasses: string;
    /**
     * @description Decide se deve ser mostrada alguma mensagem quando o campo for VÁLIDO.
     */
    @Input() public showWhenValid: boolean;
    @Input() public feedbackValidClasses: string;
    @Input() public validFeedbackMessage: string;
    @Input() public feedbackErrorsMessages: FeedbackErrorsMessages;
    private replaceString = '{{{ param }}}';

    constructor(@Inject(InputContainersService) private service: InputContainersService) {
        this.showWhenInvalid = this.service.inputContainersConfig.shouldShowInvalidFeedback;
        this.feedbackInvalidClasses = this.service.inputContainersConfig.feedbackInvalidClasses;
        this.showWhenValid = this.service.inputContainersConfig.shouldShowValidFeedback;
        this.feedbackValidClasses = this.service.inputContainersConfig.feedbackValidClasses;
        this.validFeedbackMessage = this.service.inputContainersConfig.validFeedbackMessage;
        this.feedbackErrorsMessages = this.service.inputContainersConfig.feedbackErrorsMessages;
    }

    /**
     * @description Método que apresenta as mensagens de erro. Ele é baseado nos booleanos showWhenValid e showWhenInvalid.
     * Ou seja, só irá retornar as mensagens de erro se eles estiverem true. Não vou entrar em muito detalhes,
     * porque é um método fácil de entender e mudar suas propriedades.
     * @returns Mensagem de válida ou inválida de acordo com o erro do fControl.
     */
    public errorFeedbackMessage(): string {
        if (this.fControl && (this.fControl.dirty || this.fControl.touched)) {
            const error = this.fControl.errors;

            // Mensagens de campo inválido.
            if (error.required) {
                return this.feedbackErrorsMessages.requiredMessage;
            } else if (error.minlength) {
                return this.feedbackErrorsMessages.minLengthMessage.replace(this.replaceString, `${error.minlength.requiredLength}`);
            } else if (error.maxlength) {
                return this.feedbackErrorsMessages.maxLengthMessage.replace(this.replaceString, `${error.maxlength.requiredLength}`);
            } else if (error.min) {
                return this.feedbackErrorsMessages.minMessage.replace(this.replaceString, `${error.min.min}`);
            } else if (error.max) {
                return this.feedbackErrorsMessages.maxMessage.replace(this.replaceString, `${error.max.max}`);
            } else if (error.email) {
                return this.feedbackErrorsMessages.emailMessage;
            } else if (error.pattern) {
                return this.feedbackErrorsMessages.patternMessage;
            } else if (error.message) { // Para erros de validators personalizados.
                return `${error.message}`;
            }
        }

        return null;
    }

}
