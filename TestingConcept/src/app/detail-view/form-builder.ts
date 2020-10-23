
export class FormBuilder {
    beginFormTemplate = `
    <div class="container">
    <div #form="ngForm" [formGroup]="testForm">
    `;

    endFormTemplate = `
    <button (click)="button()" class="btn btn-primary">Submit</button>
  </div>
  </div>`;

    controlTemplate = `
    <div class="form-group">
<input type="$TYPE$" name="$NAME$" formControlName="$NAME$" class="form-control" value="$PLACEHOLDER$">
</div>`;

    variableTemplate = `
    $VARIABLE$ : $TYPE$;`;

    submitMethod= '';
    tsCode = '';

    newForm = '';

    public getTemplateForm(jsonData: string) {
        this.newForm = this.beginFormTemplate;

        let jsonObject = JSON.parse(jsonData);

        for (var property in jsonObject) {
            if (jsonObject.hasOwnProperty(property)) {
                let value = jsonObject[property.toString()];
               
                let template = this.controlTemplate.replace("$TYPE$", value.FIELD_TYPE);
                template = template.replace("$NAME$", value.DATA_FIELD);
                template = template.replace("$PLACEHOLDER$", value.DATA_LABEL);
                template = template.replace("$NAME$", value.DATA_FIELD);


                let variable = this.variableTemplate.replace("$VARIABLE$", value.DATA_FIELD);
                variable = variable.replace("$TYPE$", value.FIELD_TYPE);
                this.tsCode += variable;
                this.newForm += template;
            }
        }

        this.newForm += this.endFormTemplate;
        return this.newForm;
    }

    getTsCode() {
        this.tsCode += this.submitMethod;
        return this.tsCode;
    }
}