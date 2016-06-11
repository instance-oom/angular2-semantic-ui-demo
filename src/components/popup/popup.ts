import { Component } from '@angular/core';
import { POPUP_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'

@Component({
  selector: 'popup-example',
  directives: [POPUP_DIRECTIVES],
  template: require('./popup.html')
})

export class PopupExample {
  constructor() {
  }

  ngOnInit() {
    
  }
}