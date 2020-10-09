import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

myFormModel: FormGroup;

  constructor() {
    this.myFormModel = new FormGroup({
      yourName: new FormControl('Max'),
      description: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Formularz: ', this.myFormModel.value);
  }
}
