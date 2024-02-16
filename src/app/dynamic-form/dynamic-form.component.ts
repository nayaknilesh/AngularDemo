import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IForm, IformControls, IValidator } from '../interface/form.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() form!:IForm;
  fb = inject(FormBuilder);
  dynamicFormGroup:FormGroup = this.fb.group({})

  ngOnInit(): void {
    if(this.form?.FormControls){
      let formGroup:any
      this.form.FormControls.forEach((control:IformControls)=>{
        let controlValidators:any = [];
        if(control.validators){
          control.validators.forEach((val:IValidator)=>{
            if(val.validatorName === 'required')controlValidators.push(Validators.required)
            if(val.validatorName === 'email')controlValidators.push(Validators.email);
            if(val.validatorName === 'minlength')controlValidators.push(Validators.minLength(val.minLength as number));
            if(val.validatorName === 'pattern')controlValidators.push(Validators.pattern(val.pattern as string));
            if(val.validatorName === 'maxlength')controlValidators.push(Validators.minLength(val.maxLength as number));

          })
        }
        formGroup[control.name] = [control.value || '', controlValidators]
      })
      this.dynamicFormGroup = this.fb.group(formGroup)
    }
  }

  onSubmit(){
    console.log(this.dynamicFormGroup.value);
    
  }
  resetForm(){
    this.dynamicFormGroup.reset()
  }
}
