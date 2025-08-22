import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';


@NgModule({
    declarations: [],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        DynamicFormModule
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormModule
    ]
})

export class SharedModule { }
