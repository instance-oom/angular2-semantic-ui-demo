import { Component } from '@angular/core';

@Component({
  selector: 'checkbox-example',
  template: require('./checkbox.html')
})

export class CheckBoxDemoPage {
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