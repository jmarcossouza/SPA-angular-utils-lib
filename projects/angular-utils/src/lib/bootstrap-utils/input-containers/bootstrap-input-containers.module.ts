import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapInputContainersService } from './services/bootstrap-input-containers.service';
import { BootstrapInputContainersConfigModel } from './models/bootstrap-input-containers-config.model';
import { BootstrapCheckboxContainerComponent } from './checkbox-container/bootstrap-checkbox-container.component';
import { BootstrapInputFeedbackComponent } from './helpers/input-feedback/bootstrap-input-feedback.component';
import { BootstrapRequiredIndicatorComponent } from './helpers/required-indicator/bootstrap-required-indicator.component';
import { BootstrapInputTextContainerComponent } from './input-text-container/bootstrap-input-text-container.component';
import { BootstrapBootstrapInputTextContainer2Component } from './input-text-container2/bootstrap-input-text-container2.component';
import { BootstrapRadioContainerComponent } from './radio-container/bootstrap-radio-container.component';

const defaultConfig: BootstrapInputContainersConfigModel = {
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
        BootstrapCheckboxContainerComponent,
        BootstrapInputFeedbackComponent,
        BootstrapRequiredIndicatorComponent,
        BootstrapInputTextContainerComponent,
        BootstrapBootstrapInputTextContainer2Component,
        BootstrapRadioContainerComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        {
            provide: BootstrapInputContainersService,
            useValue: {
                inputContainersConfig: defaultConfig,
            },
        },
    ],
    exports: [
        CommonModule,
        BootstrapCheckboxContainerComponent,
        BootstrapInputFeedbackComponent,
        BootstrapRequiredIndicatorComponent,
        BootstrapInputTextContainerComponent,
        BootstrapBootstrapInputTextContainer2Component,
        BootstrapRadioContainerComponent,
    ]
})
export class BootstrapInputContainersModule {
    public static setDefaultConfig(config: BootstrapInputContainersConfigModel): ModuleWithProviders<BootstrapInputContainersModule> {
        config.feedbackErrorsMessages = { ...defaultConfig.feedbackErrorsMessages, ...config.feedbackErrorsMessages };
        config.requiredIndicator = { ...defaultConfig.requiredIndicator, ...config.requiredIndicator };
        const mergedConfig: BootstrapInputContainersConfigModel = { ...defaultConfig, ...config };

        return {
            ngModule: BootstrapInputContainersModule,
            providers: [
                {
                    provide: BootstrapInputContainersService,
                    useValue: {
                        inputContainersConfig: mergedConfig,
                    },
                },
            ],
        };
    }
}
