import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { InputContainersModule } from './input-containers/input-containers.module';

@NgModule({
  declarations: [TestComponent],
  imports: [
    InputContainersModule
  ],
  exports: [
    TestComponent,
  ],
})
export class AngularUtilsModule { }
