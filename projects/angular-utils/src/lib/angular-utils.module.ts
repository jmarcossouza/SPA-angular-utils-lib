import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { InputContainersModule } from './input-containers/input-containers.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [TestComponent],
    imports: [
        CommonModule,
        InputContainersModule,
    ],
    exports: [
        TestComponent,
    ],
})
export class AngularUtilsModule { }
