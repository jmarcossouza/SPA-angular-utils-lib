import { Component, Input, Inject } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { InputContainersService } from '../../services/input-containers.service';
import { FeedbackErrorsMessagesModel } from '../../models/input-containers-config.model';

@Component({
    selector: 'jmsutils-input-feedback',
    templateUrl: './input-feedback.component.html',
    styles: []
})
export class InputFeedbackComponent {

    @Input() public fControl: AbstractControl;
    /**
     * @description Decide se deve ser mostrada alguma mensagem quando o campo for INVÁLIDO.
     */
    @Input() public shouldShowInvalidFeedback: boolean;
    @Input() public feedbackInvalidClasses: string;
    /**
     * @description Decide se deve ser mostrada alguma mensagem quando o campo for VÁLIDO.
     */
    @Input() public shouldShowValidFeedback: boolean;
    @Input() public feedbackValidClasses: string;
    @Input() public validFeedbackMessage: string;
    @Input() public feedbackErrorsMessages: FeedbackErrorsMessagesModel;
    private replaceString = '{{{ param }}}';

    constructor(@Inject(InputContainersService) private service: InputContainersService) {
        this.shouldShowInvalidFeedback = this.service.inputContainersConfig.shouldShowInvalidFeedback;
        this.feedbackInvalidClasses = this.service.inputContainersConfig.feedbackInvalidClasses;
        this.shouldShowValidFeedback = this.service.inputContainersConfig.shouldShowValidFeedback;
        this.feedbackValidClasses = this.service.inputContainersConfig.feedbackValidClasses;
        this.validFeedbackMessage = this.service.inputContainersConfig.validFeedbackMessage;
        this.feedbackErrorsMessages = this.service.inputContainersConfig.feedbackErrorsMessages;
    }

    public get formControlDirty(): boolean {
        return this.fControl && (this.fControl.dirty || this.fControl.touched);
    }

    /**
     * @description Método que apresenta as mensagens de erro. Ele é baseado nos booleanos
     * shouldShowValidFeedback e shouldShowInvalidFeedback.
     * Ou seja, só irá retornar as mensagens de erro se eles estiverem true. Não vou entrar em muito detalhes,
     * porque é um método fácil de entender e mudar suas propriedades.
     * @returns Mensagem de válida ou inválida de acordo com o erro do fControl.
     */
    public errorFeedbackMessage(): string {
        if (this.fControl.errors) {
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
