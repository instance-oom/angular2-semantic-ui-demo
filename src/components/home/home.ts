import { Component } from '@angular/core';
import { CodeBlockDirective } from '../codeblock/codeblock';

@Component({
  selector: 'home',
  directives: [CodeBlockDirective],
  template: require('./home.html')
})

export class Home {
  constructor() {

  }
}