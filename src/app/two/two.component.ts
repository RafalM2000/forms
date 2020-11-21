import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

myFormModel: FormGroup;

  constructor(perForm: FormBuilder, private validationService: ValidationService) {
    this.myFormModel = perForm.group({
      yourName: ['Olga', Validators.required],
      availability: perForm.group({
        start: [''],
        end: ['']
      }),
      description: ['',
        '',
        validationService.customValidator
  ],
      emails: perForm.array([''])
    });

    // this.myFormModel.get('yourName').valueChanges.pipe(
    //   debounceTime(1000)
    // )
    // .subscribe(
    //   value => {
    //     const descControll = this.myFormModel.get('description');
    //     if(value === 'Sylwia') {
    //       descControll.setValidators(this.customValidator);
    //     }
    //     descControll.updateValueAndValidity();
    //   }
    // );
  }

  ngOnInit(): void {
  }

  // customValidator(control: FormControl): ValidationErrors | null {
  //   const value = control.value || '';
  //   const valid = value.match(/super/i);
  //   return valid ? null : {custom: true};
  // }

  onSubmit() {
    console.log('Obiekt--->', this.myFormModel.get('description'));
  }

  addEmail() {
    (this.myFormModel.get('emails') as FormArray).push(new FormControl());
  }

  reload() {
    this.myFormModel.patchValue(
      {yourName: 'Olga'}
    );
  }
}
