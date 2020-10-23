import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ControlBase } from '../classes/control-base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlControlService {

  constructor() { }

  toFormGroup(controls: ControlBase<string>[]): FormGroup{
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required) : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
