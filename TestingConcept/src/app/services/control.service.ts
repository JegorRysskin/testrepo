import { ControlTextbox } from './../classes/control-textbox';
import { ControlDropdown } from './../classes/control-dropdown';
import { ControlBase } from './../classes/control-base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor() { }

  getControls(): Observable<ControlBase<string>[]>{
    const controls: ControlBase<string>[] = [
      new ControlDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unrpoven', value: 'Unproven'},
        ],
        order: 3
      }),
      new ControlTextbox({
        key: 'firstName',
        label: 'First Name',
        value: 'Bombasta',
        required: true,
        order: 1
      }),
      new ControlTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        required: true
      }),

    ];

    return of(controls.sort((a, b) => a.order - b.order));
  }
}
