import { Component } from '@angular/core';

@Component({
  selector: 'tab-example',
  template: require('./tab.html')
})

export class TabDemoPage {
  private datas: Array<any> = [];
  private type: string = 'tabular';
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

  private setType(type: string) {
    this.type = type;
  }
}