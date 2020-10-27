import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

myFormModel: FormGroup;

  constructor(perForm: FormBuilder) {
    this.myFormModel = perForm.group({
      yourName: ['Olga'],
      availability: perForm.group({
        start: [''],
        end: ['']
      }),
      description: [''],
      emails: perForm.array([''])
    });
    // this.myFormModel = new FormGroup({
    //   yourName: new FormControl('Max'),
    //   availability: new FormGroup({
    //     start: new FormControl(),
    //     end: new FormControl()
    //   }),
    //   description: new FormControl(''),
    //   emails: new FormArray([
    //     new FormControl()
    //   ])
    // });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Formularz: ', this.myFormModel.value);
  }

  addEmail() {
    (this.myFormModel.get('emails') as FormArray).push(new FormControl());
  }
}
