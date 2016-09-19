import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'tags-input-example',
  template: require('./tags-input.html')
})
export class TagsInputDemoPage {

  private tags: Array<string>;
  private validators: Array<any>;

  constructor() {

  }

  ngOnInit() {
    this.validators = [Validators.minLength(2)];
  }
}