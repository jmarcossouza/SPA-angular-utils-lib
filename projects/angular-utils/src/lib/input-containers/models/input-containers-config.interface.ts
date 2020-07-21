export interface InputContainersConfig {
    /**
     * @description classe (css) que será aplicada no `<input>` se o FormControl for inválido. Para o bootstrap usamos 'is-invalid'
     */
    invalidClass: string;
    /**
     * @description classe (css) que será aplicada no `<input>` se o FormControl for válido. Para o bootstrap usamos 'is-valid'
     */
    validClass: string;
    /**
     * @description boleano que decide se deve ou não aplicar a classe (css) atribuída na variável `invalidClass` quando o
     * FormControl for inválido
     */
    shouldApplyInvalidClass: boolean;
    /**
     * @description boleano que decide se deve ou não aplicar a classe (css) atribuída na variável `validClass` quando
     * o FormControl for válido
     */
    shouldApplyValidClass: boolean;
    /**
     * @description Mensagem de feedback que deve ser exibida em baixo do `<input>` quando o FormControl for válido.
     * @description Só aparece se `shouldApplyValidClass` for true.
     */
    validFeedbackMessage: string;
    /**
     * @description Decide se deve ou não REMOVER e aplicar novos atributos HTML `id` e `for` para os `<input>` e seus
     * respectivos`<label>`. O maior intuito disso é aplicar automaticamente os atributos quando for o caso de
     * `<input type="radio">` ou `<input type="checkbox">`
     * Se TRUE vai aplicar, se FALSE não irá mexer nos ids.
     * @description Se você usa o atributo HTML id pra alguma outra coisa, deve setar isso como false.
     */
    autoSetId: boolean;
}
