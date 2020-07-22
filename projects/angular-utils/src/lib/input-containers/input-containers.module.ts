import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainersService } from './services/input-containers.service';
import { InputContainersConfig } from './models/input-containers-config.interface';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxContainerComponent } from './checkbox-container/checkbox-container.component';
import { InputFeedbackComponent } from './helpers/input-feedback/input-feedback.component';
import { RequiredIndicatorComponent } from './helpers/required-indicator/required-indicator.component';
import { InputTextContainerComponent } from './input-text-container/input-text-container.component';
import { InputTextContainer2Component } from './input-text-container2/input-text-container2.component';
import { RadioContainerComponent } from './radio-container/radio-container.component';

const defaultConfig: InputContainersConfig = {
    inputParentClass: '',
    invalidClass: 'is-invalid',
    feedbackInvalidClasses: 'invalid-feedback',
    validClass: 'is-valid',
    feedbackValidClasses: 'valid-feedback',
    shouldApplyInvalidClass: true,
    shouldShowInvalidFeedback: true,
    shouldApplyValidClass: false,
    shouldShowValidFeedback: false,
    autoSetId: true,
    validFeedbackMessage: 'Ok.',
    emptyLabel: true,
    feedbackErrorsMessages: {
        requiredMessage: 'Campo obrigatório.',
        minLengthMessage: 'Mínimo {{{ param }}} caractéres.',
        maxLengthMessage: 'Máximo {{{ param }}} caractéres.',
        minMessage: 'Valor mínimo: {{{ param }}}',
        maxMessage: 'Valor máximo: {{{ param }}}',
        emailMessage: 'Não corresponde a um formato de e-mail válido.',
        patternMessage: 'Formato inválido.',
    },
    requiredIndicator: {
        requiredIndicatorClasses: '',
        requiredIndicatorMessage: '*',
        requiredIndicatorType: 'span',
        showRequiredIndicator: true
    },
};

@NgModule({
    declarations: [
        CheckboxContainerComponent,
        InputFeedbackComponent,
        RequiredIndicatorComponent,
        InputTextContainerComponent,
        InputTextContainer2Component,
        RadioContainerComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        {
            provide: InputContainersService,
            useValue: {
                inputContainersConfig: defaultConfig,
            },
        },
    ],
    exports: [
        CommonModule,
        CheckboxContainerComponent,
        InputFeedbackComponent,
        RequiredIndicatorComponent,
        InputTextContainerComponent,
        InputTextContainer2Component,
        RadioContainerComponent,
    ]
})
export class InputContainersModule {
    public static setDefaultConfig(config: InputContainersConfig): ModuleWithProviders<InputContainersModule> {
        config.feedbackErrorsMessages = { ...defaultConfig.feedbackErrorsMessages, ...config.feedbackErrorsMessages };
        config.requiredIndicator = { ...defaultConfig.requiredIndicator, ...config.requiredIndicator };
        const mergedConfig: InputContainersConfig = { ...defaultConfig, ...config };

        return {
            ngModule: InputContainersModule,
            providers: [
                {
                    provide: InputContainersService,
                    useValue: {
                        inputContainersConfig: mergedConfig,
                    },
                },
            ],
        };
    }
}
