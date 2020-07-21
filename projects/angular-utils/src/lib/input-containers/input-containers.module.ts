import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainersService } from './services/input-containers.service';
import { InputContainersConfig } from './models/input-containers-config.interface';

const defaultConfig: InputContainersConfig = {
    invalidClass: 'is-invalid',
    validClass: 'is-valid',
    shouldApplyInvalidClass: true,
    shouldApplyValidClass: false,
    autoSetId: true,
    validFeedbackMessage: 'Ok.',
};

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: InputContainersService,
            useValue: {
                inputContainersConfig: defaultConfig
            },
        },
    ],
})
export class InputContainersModule {
    public static setDefaultConfig(config: InputContainersConfig): ModuleWithProviders<InputContainersModule> {
        return {
            ngModule: InputContainersModule,
            providers: [
                {
                    provide: InputContainersService,
                    useValue: {
                        inputContainersConfig: config
                    },
                }
            ]
        };
    }
}
