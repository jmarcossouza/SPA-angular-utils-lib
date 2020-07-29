import { FormControl, AbstractControl } from '@angular/forms';

/**
 * Métodos auxiliares do Reactive Forms, métodos para [FormControl](https://angular.io/api/forms/FormControl),
 * [FormGroup](https://angular.io/api/forms/FormGroup) e etc. Todos os métodos são estáticos.
 */
export class ReactiveFormsUtils {

    /**
     * Indica se o FormControl tem o [Validator](https://angular.io/api/forms/Validators) required
     * @param formControl FormControl a ser analisado
     */
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
