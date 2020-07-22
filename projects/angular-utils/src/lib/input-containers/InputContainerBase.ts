import { Input, ElementRef, ViewChild, Renderer2, OnDestroy, AfterViewInit, Inject, Directive } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputContainersService } from './services/input-containers.service';

@Directive()
export class InputContainerBase implements OnDestroy, AfterViewInit {

    /**
     * @description Contador de instancias do InputContainer, não me pergunte porque eu não usei um service, não
     * encha meu saco.
     */
    private static inputInstances = 0;
    public static get instanceCount(): number {
        return ++InputContainerBase.inputInstances;
    }
    /**
     * @description Decide se deve ou não REMOVER e aplicar novos atributos HTML `id` e `for` para os `<input>` e seus
     * respectivos`<label>`. O maior intuito disso é aplicar automaticamente os atributos quando for o caso de
     * `<input type="radio">` ou `<input type="checkbox">`
     * Se TRUE vai aplicar, se FALSE não irá mexer nos ids.
     * @description Se você usa o atributo HTML id pra alguma outra coisa, deve setar isso como false.
     */
    @Input() autoSetId = true;

    /**
     * @description String com classes (css) a serem aplicadas à `<div>` principal (que contém a classe 'form-group')
     */
    @Input() classes: string;
    /**
     * @description FormControl, obrigatório para várias funções do componente.
     */
    @Input() fControl: FormControl | AbstractControl;
    /**
     * @description String que será exibida no `<label>`
     */
    @Input() label: string;
    /**
     * @description classe (css) que será aplicada no `<input>` se o FormControl for inválido. Para o framework css
     * bootstrap usamos 'is-invalid'
     */
    @Input() invalidClass: string;
    /**
     * @description classe (css) que será aplicada no `<input>` se o FormControl for válido. Para o framework css
     * bootstrap usamos 'is-valid'
     */
    @Input() validClass: string;
    /**
     * @description boleano que decide se deve ou não aplicar a classe (css) atribuída na variável `invalidClass` quando o
     * FormControl for inválido
     */
    @Input() shouldApplyInvalidClass: boolean;
    /**
     * @description boleano que decide se deve ou não aplicar a classe (css) atribuída na variável `validClass` quando
     * o FormControl for válido
     */
    @Input() shouldApplyValidClass: boolean;
    /**
     * @description Mensagem de feedback que deve ser exibida em baixo do `<input>` quando o FormControl for válido.
     * @description Só aparece se `shouldApplyValidClass` for true.
     */
    @Input() validFeedbackMessage = 'Ok.';
    @ViewChild('inputParent', { static: false }) inputParent: ElementRef;

    /**
     * @description Subscriptions usadas no processo.
     * @description É feito um unsubscribe nela no ngOnDestroy() do Angular.
     */
    private subscriptions: Subscription = new Subscription();

    constructor(private renderer: Renderer2, private service: InputContainersService) {
        this.autoSetId = this.service.inputContainersConfig.autoSetId;
        this.invalidClass = this.service.inputContainersConfig.invalidClass;
        this.validClass = this.service.inputContainersConfig.validClass;
        this.shouldApplyInvalidClass = this.service.inputContainersConfig.shouldApplyInvalidClass;
        this.shouldApplyValidClass = this.service.inputContainersConfig.shouldApplyValidClass;
        this.validFeedbackMessage = this.service.inputContainersConfig.validFeedbackMessage;
    }

    ngAfterViewInit(): void {
        if (this.shouldApplyInvalidClass || this.shouldApplyValidClass) {
            this.subscriptionsInput();
        }

        this.applyLabelIdentifierFromInput();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    /**
     * É um método get que pega os filhos `<inputs>` da div.
     * É importante que seja um método para que sempre esteja atualiazdo.
     */
    protected inputChildren(): any[] {
        return this.inputParent.nativeElement.children;
    }

    /**
     * @description Faz um subscribe no statusChanges do FormCotrol. Na callback chama o método applyInputClass().
     * Salva esse subscribe na variável ngClassInvalidInput.
     * @description Faz um Listtener pro evento 'blur' no `<input>` da DOM. Na callback chama o método applyInputClass().
     * @description Você pode reescrever esse método se quiser. Mas olhe como deve ser chamado o método applyInputClass()
     */
    protected subscriptionsInput(): void {
        // Pra cada elemento filho... (Nem adianta tentar substituir isso por forEach que não da.)
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < this.inputChildren().length; index++) {
            // Adicionar um listener ao evento de blur no formControl.
            // Assim eu posso atualizar a classe sempre que o usuário mexer no `<input>`.
            this.renderer.listen(this.inputChildren()[index],
                'blur',
                () => {
                    this.applyInputClass();
                });
        }

        this.subscriptions.add(this.formControl.statusChanges.subscribe(status => {
            this.applyInputClass(status);
        }));
    }

    /**
     * @description Jeito único de fazer a validação dos `<input>`. Verifica se o FormControl
     * está dirty ou touched e aplica ou remove a classe inválida nos `<input>` (buscando os filhos de inputParent).
     * @param status Status do FormControl, deve ser 'INVALID' ou 'VALID'. Default: this.formControl.status;
     */
    private applyInputClass(status: string = this.formControl.status): void {
        if (this.formControl.touched || this.formControl.dirty) {
            if (status === 'INVALID' && this.shouldApplyInvalidClass === true) {
                // Remover a classe de válido.
                if (this.shouldApplyValidClass === true) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let index = 0; index < this.inputChildren().length; index++) {
                        this.renderer.removeClass(this.inputChildren()[index], this.validClass);
                    }
                }

                // Adicionar a classe de inválido.
                // tslint:disable-next-line: prefer-for-of
                for (let index = 0; index < this.inputChildren().length; index++) {
                    this.renderer.addClass(this.inputChildren()[index], this.invalidClass);
                }
            } else {
                // Remover a classe de inválido.
                if (this.shouldApplyInvalidClass === true) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let index = 0; index < this.inputChildren().length; index++) {
                        this.renderer.removeClass(this.inputChildren()[index], this.invalidClass);
                    }
                }

                // Adicionar a classe de válido.
                if (this.shouldApplyValidClass === true) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let index = 0; index < this.inputChildren().length; index++) {
                        this.renderer.addClass(this.inputChildren()[index], this.validClass);
                    }
                }
            }
        }
    }

    /**
     * @description Retorna se no formControl há o Validator required do angular ``Validators.required``
     */
    public isRequired(): boolean {
        if (this.formControl.validator) { // Verificar se há algum validator antes
            // Se existir o required vai retornar um objeto { required: true }
            // tslint:disable-next-line: variable-name
            const _validator: any = this.formControl.validator({} as AbstractControl);
            return (_validator && _validator.required) ? true : false;
        }
        return false;
    }

    /**
     * @description Método get que retorna o FormControl injetado pelo componente no ``<ng-content></ng-content>``
     */
    public get formControl(): FormControl | AbstractControl {
        return this.fControl;
    }

    /**
     * Faz a busca em filhos de um elemento (HTML) com a tag específicada.
     * @param tagName Elemento que quer buscar. Ex: 'input', 'p', 'div', 'label'
     * @param arrayElements Elemento HTML. Obs: Não é um ElementRef. é o ElementRef.nativeElement
     * @returns Array de elementos encontrados.
     */
    protected findBetweenChildElements(tagName: string, arrayElements: any[]): any[] {
        const foundElements = [];
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < arrayElements.length; index++) {
            const element = arrayElements[index];

            // tslint:disable-next-line: triple-equals
            if (element.tagName == tagName.toUpperCase()) {
                foundElements.push(element);
            }
        }
        return foundElements;
    }

    /**
     * @description Remove os atributos 'id' e 'for' do `<input>` e `<label>` e substitui por novos.
     * Ambos iguais. Utiliza o contador instanceCount, portanto nunca irá se repetir dentro do projeto.
     * @param inputElement Input em que será aplicado o id
     * @param labelElement Label em que será aplicado o for
     */
    protected applyLabelIdentifier(inputElement: any, labelElement): void {
        if (inputElement && labelElement) {
            this.renderer.removeAttribute(inputElement, 'id');
            this.renderer.removeAttribute(labelElement, 'for');

            const identifier = `utsInput${InputContainerBase.instanceCount.toString()}`;

            this.renderer.setAttribute(inputElement, 'id', identifier);
            this.renderer.setAttribute(labelElement, 'for', identifier);
        }
    }

    /**
     * @description Método que varre os `<input>` e sai aplicando os atributos HTML 'for' e 'id' pra cada um deles.
     * IMPORTANTE: Pra usar esse método, os `<label>` devem estar sempre juntos ao `<input>` (compartilhando o mesmo pai)
     */
    public applyLabelIdentifierFromInput(): void {
        if (this.autoSetId === true) {
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < this.inputChildren().length; index++) {
                const input = this.inputChildren()[index];
                const label = this.findBetweenChildElements('label', input.parentElement.children)[0];

                if (input && label) {
                    this.applyLabelIdentifier(input, label);
                }
            }
        }
    }
}
