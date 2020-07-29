import { FormControl, AbstractControl } from '@angular/forms';

export class ReactiveFormsUtils {

    public static hasRequiredValidator(formControl: FormControl): boolean {
        if (formControl.validator) { // Verificar se há algum validator antes
            // Se existir o required vai retornar um objeto { required: true }
            // tslint:disable-next-line: variable-name
            const _validator: any = formControl.validator({} as AbstractControl);
            return (_validator && _validator.required) ? true : false;
        }
        return false;
    }
}
