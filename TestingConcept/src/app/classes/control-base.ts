export class ControlBase<T> {
  value: T;
  key: string;
  label: string;
  data_required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  fieldType: string;

  constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      data_required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: {key: string, value: string}[];
      fieldType?: string;
    } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.data_required = !!options.data_required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
      this.fieldType = options.fieldType || '';
  }
}
