import { ControlTextbox } from './../classes/control-textbox';
import { ControlDropdown } from './../classes/control-dropdown';
import { ControlBase } from './../classes/control-base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import json from '../../assets/dummyData.json';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor() { }

  getControls(): Observable<ControlBase<string>[]>{

    const controls: ControlBase<string>[] = [];

    json.data.forEach(e => {
        switch(e.FIELD_TYPE) {
          case 'TextBox':
            const label = e.DATA_FIELD.toLowerCase().replace(/\_/gi, ' ');

            controls[controls.length] = new ControlTextbox({
                key: e.ID,
                label: label.charAt(0).toUpperCase() + label.substring(1),
                data_required: Number(e.DATA_REQUIRED) === 1
            });

            break;

          default:
            console.log(e.FIELD_TYPE);
        }
    });
      /*
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
        data_required: true,
        order: 1
      }),

      new ControlTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        data_required: true
      }),

    ];
    */

    return of(controls.sort((a, b) => a.order - b.order));
  }
}
