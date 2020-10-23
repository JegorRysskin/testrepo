import { Component, OnInit } from '@angular/core';
import {FormBuilder} from './form-builder';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';
import { formatPercent, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

testForm : FormGroup;

  json = [
    {
      FIELD_TYPE: 'string',
      DATA_LABEL: 'account_name',
      DATA_FIELD: 'name',
      LABEL_WIDTH: '15%',
      FIELD_WIDTH: '35%'
  },
  {
    FIELD_TYPE: 'number',
    DATA_LABEL: 'account_number',
    DATA_FIELD: 'number',
    LABEL_WIDTH: '15%',
    FIELD_WIDTH: '35%'
},
]



  result: SafeHtml;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let result = new FormBuilder().getTemplateForm(JSON.stringify(this.json));
    this.result = this.sanitizer.bypassSecurityTrustHtml(result);
   
    let controls = {};

    this.json.forEach(element => {
      controls[element.DATA_FIELD] = new FormControl();
    });
    
    this.testForm = new FormGroup(controls);

  }

  button() {
    console.log(this.testForm);
  }

}