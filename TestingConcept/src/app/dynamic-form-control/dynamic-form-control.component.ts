import { ControlBase } from '../classes/control-base';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})
export class DynamicFormControlComponent implements OnInit {

  @Input() control: ControlBase<string>;
  @Input() form: FormGroup;

  get isValid(): boolean{
    return this.form.controls[this.control.key].valid;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
