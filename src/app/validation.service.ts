import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  customValidator(control: FormControl): Observable<ValidationErrors | null>  {
    const value = control.value || '';
    const valid = value.match(/super/i);
    return of(valid ? null : {custom: true});
  }

}
