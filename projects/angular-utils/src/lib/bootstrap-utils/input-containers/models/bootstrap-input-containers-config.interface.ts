export interface IBootstrapInputContainersConfig {
    /**
     * @description Pra injetar alguma classe na `<div>` pai do `<input>` em `<jmsutils-bootstrap-input-text-container>`.
     * @description Criei isso pra poder usar os inputs com append e prepend.
     * @example
     * <div [ngClass]="inputParentClass">
     *     <ng-content></ng-content>
     * </div>
     * @default ''
     */
    inputParentClass: string;
    /**
     * @description classe (css) que será aplicada no `<input>` se o FormControl for inválido. Para o
     * [bootstrap](https://getbootstrap.com/docs/4.5/components/forms/#server-side) usamos 'is-invalid'
     * @default 'is-invalid'
     */
    invalidClass: string;
    /**
     * @description Classes (css) a serem setadas na `<div>` do feedback. No
     * [Bootstrap](https://getbootstrap.com/docs/4.5/components/forms/#server-side) é usado 'invalid-feedback'
     * @default 'invalid-feedback'
     */
    feedbackInvalidClasses: string;
    /**
     * @description classe (css) que será aplicada no `<input>` se o FormControl for válido. Para o
     * [bootstrap](https://getbootstrap.com/docs/4.5/components/forms/#server-side) usamos 'is-valid'
     * @default 'is-valid'
     */
    validClass: string;
    /**
     * @description Classes (css) a serem setadas na `<div>` do feedback. No
     * [Bootstrap](https://getbootstrap.com/docs/4.5/components/forms/#server-side) é usado 'valid-feedback'
     * @default 'valid-feedback'
     */
    feedbackValidClasses: string;
    /**
     * @description boleano que decide se deve ou não aplicar a classe (css) atribuída na variável `invalidClass` quando o
     * FormControl for inválido. Trata-se [disso aqui](https://getbootstrap.com/docs/4.5/components/forms/#server-side).
     * @default true
     */
    shouldApplyInvalidClass: boolean;
    /**
     * @description boleano que decide se deve ou não mostrar o componente de feedback quando inválido.
     * [Exemplo do bootstrap](https://getbootstrap.com/docs/4.5/components/forms/#server-side)
     * @description Obs: Você pode alterar a classe (css) da `<div>` que é exibida no componente na property `feedbackInvalidClasses`
     * @default true
     */
    shouldShowInvalidFeedback: boolean;
    /**
     * @description boleano que decide se deve ou não aplicar a classe (css) atribuída na variável `validClass` quando
     * o FormControl for válido. Trata-se [disso aqui](https://getbootstrap.com/docs/4.5/components/forms/#server-side).
     * @default false
     */
    shouldApplyValidClass: boolean;
    /**
     * @description boleano que decide se deve ou não mostrar o componente de feedback quando válido.
     * [Exemplo do bootstrap](https://getbootstrap.com/docs/4.5/components/forms/#server-side)
     * @description Obs: Você pode alterar a classe (css) da `<div>` que é exibida no componente na property `feedbackValidClasses`
     * @default false
     */
    shouldShowValidFeedback: boolean;
    /**
     * @description Mensagem de feedback que deve ser exibida em baixo do `<input>` quando o FormControl for válido.
     * @description Só aparece se `shouldShowValidFeedback` for true.
     * @default 'Ok.'
     */
    validFeedbackMessage: string;
    /**
     * @description Decide se deve ou não REMOVER e aplicar novos atributos HTML `id` e `for` para os `<input>` e seus
     * respectivos`<label>`. O maior intuito disso é aplicar automaticamente os atributos quando for o caso de
     * `<input type="radio">` ou `<input type="checkbox">`
     * Se TRUE vai aplicar, se FALSE não irá mexer nos ids.
     * @description Se você usa o atributo HTML id pra alguma outra coisa, deve setar isso como false.
     * @default true
     */
    autoSetId: boolean;
    /**
     * @description Propriedade que decide se deve ou não mostrar um `<label>` com um `&nbsp;` (espaço vazio).
     * Eu uso esse label pro espaçamento não ficar zuado com `<inputs type="checkbox">` que não usam o `<label>`.
     * @default true
     * @example
     * <label *ngIf="emptyLabel"> &nbsp;</label>
     * <div class="custom-control custom-checkbox">
     *  <input type="checkbox" value"...">
     * </div>
     */
    emptyLabel: boolean;
    /**
     * @description Trata-se de uma `<div>` com mensagens de erro que aparecem logo em baixo do `<input>`. Basicamente isso
     * [Exemplo do Bootstrap](https://getbootstrap.com/docs/4.5/components/forms/#input-group-validation-workaround).
     * Neste objeto você decidirá a mensagem exibida para cada [Validator](https://angular.io/api/forms/Validators)
     */
    feedbackErrorsMessages: IFeedbackErrorsMessages;
    /**
     * `<span>` ou `<icon>` (de sua escolha) com o
     * conteúdo e classes (css) (de sua escolha) que aparecerá dentro do `<label>` em alguns inputs containers QUANDO
     * houver o [Validator](https://angular.io/api/forms/Validators) required do Angular.
     * @example <span *ngIf="showRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</span>
     * @example <i *ngIf="showRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</i>
     */
    requiredIndicator: IRequiredIndicator;
}

export interface IFeedbackErrorsMessages {
    /**
     * @description Mensagem para erro de Required: Quando o campo é deixado em branco.
     * @example requiredMessage: 'Este campo é obrigatório.'
     * @default 'Campo obrigatório.'
     */
    requiredMessage: string;
    /**
     * @description Mensagem para erro de MinLength: Quando a quantidade de caracteres no campo é menor que o mínimo exigido.
     * @description Há um método replace interno: se nesta string houver `{{{ param }}}` ele será substituido pelo número
     * do minLength trazido pelo [Validator](https://angular.io/api/forms/Validators): `FormControl.errors.minlength.requiredLength`
     * @example minLengthMessage: 'Mínimo {{{ param }}} caractéres.'
     * @example minLengthMessage: 'Você não digitou a quantidade mínima de caractéres.'
     * @default 'Mínimo {{{ param }}} caractéres.'
     */
    minLengthMessage: string;
    /**
     * @description Mensagem para erro de MaxLength: Quando a quantidade de caracteres no campo é maior que o máximo permitido.
     * @description Há um método replace interno: se nesta string houver `{{{ param }}}` ele será substituido pelo número
     * do MaxLength trazido pelo [Validator](https://angular.io/api/forms/Validators): `FormControl.errors.maxlength.requiredLength`
     * @example maxLengthMessage: 'Máximo {{{ param }}} caractéres.'
     * @example maxLengthMessage: 'Você ultrapassou a quantidade permitida de caractéres.'
     * @default 'Máximo {{{ param }}} caractéres.'
     */
    maxLengthMessage: string;
    /**
     * @description Mensagem para erro de Min: Quando o valor do campo (número) é menor que o mínimo exigido.
     * @description Há um método replace interno: se nesta string houver `{{{ param }}}` ele será substituido pelo número
     * do Min trazido pelo [Validator](https://angular.io/api/forms/Validators): `FormControl.errors.min.min`
     * @example minMessage: 'Valor mínimo é {{{ param }}}.'
     * @default 'Valor mínimo: {{{ param }}}'
     */
    minMessage: string;
    /**
     * @description Mensagem para erro de Min: Quando o valor do campo (número) é maior que o máximo permitido.
     * @description Há um método replace interno: se nesta string houver `{{{ param }}}` ele será substituido pelo número
     * do Max trazido pelo [Validator](https://angular.io/api/forms/Validators): `FormControl.errors.max.max`
     * @example maxMessage: 'Valor máximo é {{{ param }}}.'
     * @default 'Valor máximo: {{{ param }}}'
     */
    maxMessage: string;
    /**
     * @description Mensagem para erro de Email: Quando o valor do campo não corresponde à um formato de email.
     * @example emailMessage: 'Não corresponde a um formato de e-mail válido.'
     * @default 'Não corresponde a um formato de e-mail válido.'
     */
    emailMessage: string;
    /**
     * @description Mensagem para erro de Pattern: Quando o valor do campo não corresponde ao formato que você definiu no
     * [Validator](https://angular.io/api/forms/Validators)
     * @example patternMessage: 'Formato inválido.'
     * @default 'Formato inválido.'
     */
    patternMessage: string;
}

export interface IRequiredIndicator {
    /**
     * Se deve ou não mostrar o required indicator, que é nada mais que um `<span>` ou `<icon>` (de sua escolha) com o
     * conteúdo e classes (css) (de sua escolha) que aparecerá dentro do `<label>` em alguns inputs containers QUANDO
     * houver o [Validator](https://angular.io/api/forms/Validators) required do Angular.
     * @example <span *ngIf="showRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</span>
     * @example <i *ngIf="showRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</i>
     * @default true
     */
    showRequiredIndicator: boolean;
    /**
     * O que será exibido (texto) dentro do `<span>` ou `<icon>` (sua escolha).
     * @example <span *ngIf="showRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</span>
     * @example <i *ngIf="showRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</i>
     * @default '*'
     */
    requiredIndicatorMessage: string;
    /**
     * String com classes (css) a serem aplicadas no componente
     * @example <span *ngIf="showRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</span>
     * @example <i *ngIf="showRequiredIndicator" [ngClass]="requiredIndicatorClasses">{{ requiredIndicatorMessage }}</i>
     * @default ''
     */
    requiredIndicatorClasses: string;
    /**
     * Define se usará um `<span>` ou `<i>`
     * @default 'span'
     */
    requiredIndicatorType: 'span' | 'icon';
}