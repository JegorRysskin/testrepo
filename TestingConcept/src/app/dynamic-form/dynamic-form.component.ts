import { ControlControlService } from './../services/control-control.service';
import { FormGroup } from '@angular/forms';
import { ControlBase } from './../classes/control-base';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() controls: ControlBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private ccs: ControlControlService) { }

  ngOnInit(): void {
    this.form = this.ccs.toFormGroup(this.controls);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
