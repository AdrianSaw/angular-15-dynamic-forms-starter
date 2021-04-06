import { Validators } from '@angular/forms';
import { DynamicFormInputTypeEnum } from './dynamic-form-input-type.enum';
import { DynamicFormTypesEnum } from './dynamic-form-types.enum';

export interface DynamicFormConfigModel {
  type: DynamicFormTypesEnum;
  input_type?: DynamicFormInputTypeEnum;
  label?: string;
  name?: string;
  placeholder?: string;
  validators?: Validators;
}
