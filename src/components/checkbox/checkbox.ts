import { Component } from '@angular/core';
import { CodeBlockDirective } from '../codeblock/codeblock';
import { CHECKBOX_DIRECTIVES, TAB_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui';

@Component({
  selector: 'checkbox-example',
  directives: [CHECKBOX_DIRECTIVES, TAB_DIRECTIVES, CodeBlockDirective],
  template: require('./checkbox.html')
})

export class CheckBoxExample {
  private isChecked: boolean = true;
  private isChecked1: boolean = true;
  private isChecked2: boolean = true;
  private isChecked3: boolean = true;
  constructor() {

  }

  ngOnInit() {
    this.isChecked = false;
    this.isChecked2 = true;
  }
}