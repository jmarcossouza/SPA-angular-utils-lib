import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
    styles: []
})
export class FormulariosComponent implements OnInit {

    constructor() { }

    public form1: FormGroup;
    public form2: FormGroup;
    public value: any;

    ngOnInit() {
        this.createForms();
    }

    private createForms(): void {
        this.form1 = new FormGroup({
            nome: new FormControl('', [Validators.required, Validators.maxLength(60)]),
            email: new FormControl('', [Validators.maxLength(100), Validators.email]),
            sexo: new FormControl('M', [Validators.required]),
            concordaTermos: new FormControl(true, Validators.requiredTrue),
        });

        this.form2 = new FormGroup({
            nome: new FormControl('', [Validators.required, Validators.maxLength(60)]),
            email: new FormControl('', [Validators.maxLength(100), Validators.email]),
        });

        console.log('fcontrols', this.form1.controls);
    }

}
