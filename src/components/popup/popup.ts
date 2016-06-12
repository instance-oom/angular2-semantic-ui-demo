import { Component } from '@angular/core';
import { CodeBlockDirective } from '../codeblock/codeblock';
import { POPUP_DIRECTIVES, TAB_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'

@Component({
  selector: 'popup-example',
  directives: [POPUP_DIRECTIVES, TAB_DIRECTIVES, CodeBlockDirective],
  template: require('./popup.html')
})

export class PopupExample {
  constructor() {
  }

  ngOnInit() {

  }
}