import { Component } from '@angular/core';
import { TAB_DIRECTIVES } from 'angular2-semantic-ui/angular2-semantic-ui'

@Component({
  selector: 'tab-example',
  directives: [TAB_DIRECTIVES],
  template: require('./tab.html')
})

export class TabExample {
  private datas: Array<any> = [];
  constructor() {
  }

  ngOnInit() {
    this.datas = [
      {
        title: 'First',
        content: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
        active: false
      }, {
        title: 'Second',
        content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.',
        active: true
      }, {
        title: 'Third',
        content: 'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.',
        active: false
      }
    ]
  }
}