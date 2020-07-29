import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { BootstrapInputContainersModule } from './bootstrap-utils/input-containers/bootstrap-input-containers.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [TestComponent],
    imports: [
        CommonModule,
        BootstrapInputContainersModule,
    ],
    exports: [
        TestComponent,
        BootstrapInputContainersModule,
    ],
})
export class AngularUtilsModule { }
