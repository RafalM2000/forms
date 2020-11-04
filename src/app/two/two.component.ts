import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

myFormModel: FormGroup;

  constructor(perForm: FormBuilder) {
    this.myFormModel = perForm.group({
      yourName: ['Olga', Validators.required],
      availability: perForm.group({
        start: [''],
        end: ['']
      }),
      description: ['', {
        validators: [Validators.minLength(3)],
        updateOn: 'submit'
    }],
      emails: perForm.array([''])
    });

    this.myFormModel.get('yourName').valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe(
      value => console.log(value)
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Formularz: ', this.myFormModel.value);
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
